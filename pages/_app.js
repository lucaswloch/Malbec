// import '../styles/globals.css'
import context from '../logic/context'

function MyApp({ Component, pageProps }) {
  context.API_URL = process.env.NEXT_APP_API_URL
  return <Component {...pageProps} />
}

export default MyApp


// hay que agregar en algun momento esta linea 
