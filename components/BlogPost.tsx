import React from "react"
import { Container } from "@/components/Container"

interface BlogPostProps {
  frontmatter: { [key: string]: any }
  children?: any
}

export const BlogPost = (props: BlogPostProps) => {
  const { frontmatter, children } = props
  return (
    <Container>
      <div className="mx-auto my-10 prose">{children}</div>
    </Container>
  )
}
