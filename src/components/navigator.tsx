import Link from "next/link"

export default function Navigator() {
  return (
    <nav className="flex items-center justify-center gap-4 w-full h-16 fixed z-20 backdrop-blur-[8px] bg-[#e7e7e7]/50">
      <Link href="/" scroll={false}>Leko</Link>
      <Link href="/work" scroll={false}>Work</Link>
      <Link href="/source" scroll={false}>Source</Link>
    </nav>
  )
}
