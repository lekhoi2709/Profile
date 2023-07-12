import Link from "next/link"
import { Toggle } from "@radix-ui/react-toggle"
import { Sun, Moon, Github } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navigator() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  return (
    <nav className="flex items-center justify-around w-full h-16 fixed z-20 backdrop-blur-[7px] bg-[#e7e7e7]/50 dark:bg-[#111111]/70">
      <div className="flex gap-2 items-center">
        <Link className="hover:bg-black/10 dark:hover:bg-white/10 p-3 duration-200 delay-100 rounded-lg" href="/">Leko</Link>
        <Link className="hover:bg-black/10 dark:hover:bg-white/10 p-3 duration-200 delay-100 rounded-lg" href="#">Projects</Link>
        <Link className="hover:bg-black/10 dark:hover:bg-white/10 p-3 duration-200 delay-100 rounded-lg flex gap-1 items-center" href="https://github.com/lekhoi2709/Profile"><Github width={15} height={15} />Source</Link>
      </div>
      <Toggle onClick={changeTheme} className="object-cover p-2 dark:text-[#404565] dark:bg-[#dcdaca] rounded-md bg-[#404565] text-[#dcdaca]">
        {theme == "dark" ? <Sun /> : <Moon />}
      </Toggle>
    </nav>
  )
}
