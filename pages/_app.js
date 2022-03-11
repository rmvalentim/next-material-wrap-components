import Container from '@mui/material/Container'
import B2Navbar from '../components/B2Navbar'

import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container maxWidth="md">
      <B2Navbar />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
