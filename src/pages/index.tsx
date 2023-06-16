import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Cormorant_Garamond } from "next/font/google"
import { Github, Mail } from "lucide-react"
import Template from "@/components/template"

const cormo = Cormorant_Garamond({ weight: ['500', '700'], style: ['normal', 'italic'], subsets: ["latin"] })

export default function Home() {
  return (
    <Template>
      <div className="w-full flex gap-8 justify-around px-24 pt-24 relative">
        <div className="w-[450px] text-justify">
          <div className={`${cormo.className} font-bold text-[#404565] dark:text-[#5c8ff9] flex justify-between items-center`}>
            <div>
              <h3 className="text-2xl">Web developer</h3>
              <h1 className="text-5xl">Le Dinh Khoi</h1>
            </div>
            <Avatar className="border border-black w-24 h-24 object-cover rounded-full">
              <AvatarImage src="/avatar.png"></AvatarImage>
              <AvatarFallback>LK</AvatarFallback>
            </Avatar>
          </div>
          <br />
          <h1 className={`font-bold italic text-[#404565] dark:text-[#5c8ff9] text-2xl ${cormo.className} underline underline-offset-8`}>About me</h1>
          <br />
          <p>Hello, my name is Le Dinh Khoi - a hardworking student has a huge passion for web development. Enjoy solving front-end problems and creating the best experience for users. I am always learning new technologies to be a better engineer. </p>
          <br />
          <br />
          <h1 className={`font-bold italic text-[#404565] dark:text-[#5c8ff9] text-2xl ${cormo.className} underline underline-offset-8`}>Education</h1>
          <br />
          <div className="flex flex-col justify-between md:flex-row">
            <strong>&bull; Ton Duc Thang University</strong>
            <strong>Aug 20 - Now</strong>
          </div>
          <p>Sofware Engineering</p>
          <br />
          <br />
          <h1 className={`font-bold italic text-[#404565] dark:text-[#5c8ff9] text-2xl ${cormo.className} underline underline-offset-8`}>Work Experiences</h1>
          <br />
          <div className="flex flex-col justify-between md:flex-row">
            <strong>&bull; Five Star Education</strong>
            <strong>Aug 22 - Apr 23</strong>
          </div>
          <p>Administrative Coordinator (part-time)</p>

          <div className="flex flex-col justify-between md:flex-row mt-6">
            <strong>&bull; Balan Coffee Roastery</strong>
            <strong>Jun 23 - Now</strong>
          </div>
          <p>Full-stack Developer</p>

          <br />
          <br />
          <h1 className={`font-bold italic text-[#404565] dark:text-[#5c8ff9] text-2xl ${cormo.className} underline underline-offset-8`}>Find me on</h1>
          <br />
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4">
              <Github />
              <a className="text-sky-600" href="https://github.com/lekhoi2709">lekhoi2709</a>
            </div>
            <div className="flex gap-4">
              <Mail />
              <p>ledinhkhoimd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Template>
  )
}
