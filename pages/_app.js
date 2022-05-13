import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { ContextProvider } from '../context/Context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </MoralisProvider>
  )
}

export default MyApp
