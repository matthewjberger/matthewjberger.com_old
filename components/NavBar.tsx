import React from "react"
import NextLink from "next/link"
import { ThemeSwitcher } from "./ThemeChanger"

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
      <ThemeSwitcher />
      <div>
        <NextLink href="/portfolio">
          <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
            Portfolio
          </a>
        </NextLink>
        <NextLink href="/lbar">
          <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
            Lets Build a Renderer
          </a>
        </NextLink>
        <NextLink href="/about">
          <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">About</a>
        </NextLink>
        <NextLink href="/">
          <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Home</a>
        </NextLink>
      </div>
    </nav>
  )
}
