import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"

import remarkGfm from "remark-gfm"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSanitize from "rehype-sanitize"
import rehypeSlug from "rehype-slug"

export const ROOT = process.cwd()
export const POSTS_PATH = path.join(process.cwd(), "posts")

export const getFileContent = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8")
}

const getCompiledMDX = async (content: string) => {
  const remarkPlugins = [remarkGfm]
  const rehypePlugins = [rehypeAutolinkHeadings, rehypeSanitize, rehypeSlug]

  try {
    return await bundleMDX(content, {
      xdmOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ]

        return options
      },
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getSinglePost = async (slug: string) => {
  const source = getFileContent(`${slug}.mdx`)
  const { code, frontmatter } = await getCompiledMDX(source)

  return {
    frontmatter,
    code,
  }
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName)
      const slug = fileName.replace(/\.mdx?$/, "")
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
}
