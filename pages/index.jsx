import { createClient } from "contentful"
import { Fragment } from "react"
import {
  About,
  Contact,
  Footer,
  Gallery,
  Header,
  Inspection,
  Navbar,
  Removal,
  Services
} from "../components/components"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
  })

  const gallery = await client.getEntries({ content_type: "gallery" })
  return { props: { gallery: gallery.items }, revalidate: 10 }
}

function Home({ gallery }) {
  return (
    <Fragment>
      <Navbar />
      <Header gallery={gallery} />
      <Contact />
      <Services />
      <Gallery gallery={gallery} />
      <About />
      <Removal gallery={gallery} />
      <Inspection gallery={gallery} />
      <Footer />
    </Fragment>
  )
}

export default Home
