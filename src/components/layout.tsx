import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navigator from './navigator'
import Footer from './footer'
import { motion } from 'framer-motion'
import { Sawarabi_Mincho } from "next/font/google"

const sawarabi = Sawarabi_Mincho({ weight: ['400'], subsets: ['latin'] })

export default function Template({ children, page }: { children: ReactNode, page?: string }) {

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
  };

  return (
    <div key={page} className='bg-[#dcdaca] dark:bg-[#202023] text-[#545445] dark:text-[#e7e7e7]'>
      <Head>
        <title>{page ? page : "Le Dinh Khoi"}</title>
      </Head>
      <Navigator />
      <motion.article
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.4, staggerChildren: 0.3 }}
        className={`${sawarabi.className} min-h-screen max-w-screen overflow-hidden relative`}>
        {children}
      </motion.article>
      <Footer />
    </div>
  )
}