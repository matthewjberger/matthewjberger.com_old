import React from "react"

import { getMDXComponent } from "mdx-bundler/client"
import { getAllPosts, getSinglePost } from "@/lib/mdx"
import { BlogPost } from "@/components/BlogPost"

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <BlogPost frontmatter={frontmatter}>
      <Component />
    </BlogPost>
  )
}

export const getStaticProps = async ({ params }) => {
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
