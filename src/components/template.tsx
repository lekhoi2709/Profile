import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navigator from './navigator'
import Footer from './footer'
import { AnimatePresence, motion } from 'framer-motion'
import { Sawarabi_Mincho } from "next/font/google"

const sawarabi = Sawarabi_Mincho({ weight: ['400'], subsets: ['latin'] })

export default function Template({ children, page }: { children: ReactNode, page?: string }) {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <div key={page}>
      <Head>
        <title>{page ? page : "Le Dinh Khoi"}</title>
      </Head>
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
        <Navigator />
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", delay: 0.2 }}
          className={`${sawarabi.className} min-h-screen max-w-screen overflow-hidden bg-[#dcdaca] dark:bg-[#202023] text-[#545445] dark:text-[#e7e7e7]`}>
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}