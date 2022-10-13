import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';

import { StoreProvider } from '../utils/Store'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
