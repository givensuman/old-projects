import { ChakraProvider, extendTheme, ColorModeScript, Container } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/globals.css'

import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {

  return (
 
    <ChakraProvider theme={extendTheme({
      initialColorMode: 'light',
      useSystemColorMode: false
    })}>
    <ColorModeScript initialColorMode={'light'} />
    <Container
      h={"100vh"}
      maxW={"100%"}
      m={0}
    >

      <Navbar />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            // type: 'spring',
            // damping: 10,
            duration: 0.5
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

    </Container>
    </ChakraProvider>
  )
}

export default MyApp
