import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Cormorant_Garamond } from "next/font/google"
import Template from "@/components/template"

const cormo = Cormorant_Garamond({ weight: ['500', '700'], style: ['normal', 'italic'], subsets: ["latin"] })

export default function Home() {
  return (
    <Template>
      <div className="w-full flex gap-8 justify-around px-24 pt-24 relative">
        <div className="w-[450px] text-justify">
          <div className={`${cormo.className} font-bold text-[#404565] flex justify-between items-center`}>
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
          <h1 className={`font-bold italic text-[#404565] text-2xl ${cormo.className} underline underline-offset-8`}>About me</h1>
          <br />
          <p>Hello, my name is Le Dinh Khoi - a hardworking student has a huge passion for web development. Enjoy solving front-end problems and creating the best experience for users. I am always learning new technologies to be a better engineer. </p>
          <br />
          <br />
          <h1 className={`font-bold italic text-[#404565] text-2xl ${cormo.className} underline underline-offset-8`}>Education</h1>
          <br />
          <div className="flex justify-between">
            <strong>&bull; Ton Duc Thang University</strong>
            <strong>Aug 20 - Now</strong>
          </div>
          <p>Sofware Engineering</p>
          <br />
          <br />
          <h1 className={`font-bold italic text-[#404565] text-2xl ${cormo.className} underline underline-offset-8`}>Work Experiences</h1>
          <br />
          <div className="flex justify-between">
            <strong>&bull; Five Star Education</strong>
            <strong>Aug 22 - Apr 23</strong>
          </div>
          <p>Administrative Coordinator (part-time)</p>

          <div className="flex justify-between mt-6">
            <strong>&bull; Balan Coffee Roastery</strong>
            <strong>Jun 23 - Now</strong>
          </div>
          <p>Full-stack Developer</p>

          <br />
          <br />
          <h1 className={`font-bold italic text-[#404565] text-2xl ${cormo.className} underline underline-offset-8`}>Find me on</h1>
          <br />
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
              <a className="text-sky-600" href="https://github.com/lekhoi2709">lekhoi2709</a>
            </div>
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              <p>ledinhkhoimd@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
              <p>71 De Tham, Co Giang, district 1. Ho Chi Minh city</p>
            </div>
          </div>
        </div>
      </div>
    </Template>
  )
}
