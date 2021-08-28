import React from "react"

import { getMDXComponent } from "mdx-bundler/client"
import { getAllPosts, getSinglePost } from "@/lib/mdx"
import { BlogPost } from "@/components/BlogPost"

interface PostProps {
  code: string
  frontmatter: { [key: string]: any }
}

const Post = (props: PostProps) => {
  const { code, frontmatter } = props
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <BlogPost frontmatter={frontmatter}>
      <Component />
    </BlogPost>
  )
}

interface UrlProps {
  params: {
    slug: string
  }
}

export const getStaticProps = async (props: UrlProps) => {
  const { params } = props
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
