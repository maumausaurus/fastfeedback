import * as React from "react"
import { ProvideAuth } from '../lib/auth';
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ProvideAuth>
  );
}

export default MyApp;
