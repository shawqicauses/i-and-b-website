import { createClient } from "contentful"
import { Fragment, useEffect } from "react"
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
import { useContent } from "../context"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
  })

  const gallery = await client.getEntries({ content_type: "gallery" })
  return { props: { gallery: gallery.items }, revalidate: 10 }
}

export default function Home({ gallery }) {
  const { setContent } = useContent()
  useEffect(() => {
    setContent((...previous) => ({ ...previous, gallery }))
  }, [setContent, gallery])

  return (
    <Fragment>
      <Navbar />
      <Header />
      <Contact />
      <Services />
      <Gallery />
      <About />
      <Removal />
      <Inspection />
      <Footer />
    </Fragment>
  )
}
