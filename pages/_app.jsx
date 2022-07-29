import { Layout } from "../components/components"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
