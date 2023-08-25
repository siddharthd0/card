import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Analytics } from '@vercel/analytics/react';
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}
