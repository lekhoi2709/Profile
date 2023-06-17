import Link from "next/link"
import { useEffect, useState } from "react"
import { Toggle } from "@radix-ui/react-toggle"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navigator() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  return (
    <nav className="flex items-center justify-around w-full h-16 fixed z-20 backdrop-blur-[7px] bg-[#e7e7e7]/50 dark:bg-[#111111]/70">
      <div className="flex gap-4 items-center">
        <Link href="/" scroll={false}>Leko</Link>
        <Link href="/projects" scroll={false}>Projects</Link>
        <Link href="/source" scroll={false}>Source</Link>
      </div>
      <Toggle onClick={changeTheme} className="object-cover p-2 dark:text-[#404565] dark:bg-[#dcdaca] rounded-md bg-[#404565] text-[#dcdaca]">
        {theme == "dark" ? <Sun /> : <Moon />}
      </Toggle>
    </nav>
  )
}
