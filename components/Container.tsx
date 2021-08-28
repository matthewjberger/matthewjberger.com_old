import React, { useEffect } from "react"
import Head from "next/head"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"

interface ContainerProps {
  children?: any
}

export const Container = (props: ContainerProps) => {
  const { children } = props
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>Placeholder Title</title>
      </Head>
      <NavBar />
      <main className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
        <Footer />
      </main>
    </div>
  )
}
