import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider enableSystem={true} attribute='class' disableTransitionOnChange>
      <AnimatePresence initial={true} mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
}
