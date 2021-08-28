import type { NextPage } from "next"
import React from "react"
import { Container } from "@/components/Container"

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <p>Home Page</p>
      </div>
    </Container>
  )
}

export default Home
