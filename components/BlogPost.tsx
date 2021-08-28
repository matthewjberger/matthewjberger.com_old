import React from "react"
import { Container } from "@/components/Container"

export const BlogPost = ({ children, frontmatter }) => {
  return (
    <Container>
      <div className="mx-auto my-10 prose">{children}</div>
    </Container>
  )
}
