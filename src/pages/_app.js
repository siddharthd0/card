import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react"

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
