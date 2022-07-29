import { createClient } from "contentful"
import Head from "next/head"
import { Fragment, useEffect } from "react"
import {
  About,
  Contact,
  Gallery,
  Header,
  Inspection,
  Removal,
  Services
} from "../components/components"
import { useContent } from "../context"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const gallery = await client.getEntries({ content_type: "gallery" })
  if (!gallery || gallery.items.length === 0)
    throw new Error("Failed to fetch gallery images")

  return { props: { gallery: gallery.items }, revalidate: 10 }
}

export default function Home({ gallery }) {
  const { setContent } = useContent()
  useEffect(() => {
    setContent((...previous) => ({ ...previous, gallery }))
  }, [setContent, gallery])

  return (
    <Fragment>
      <Head>
        <meta charset="utf-8" />
        <title>I and B Asbestos Removal Company - Home</title>
        <meta
          name="keywords"
          content="Asbestos Removal Company, Asbestos, Removal"
        />
        <meta
          name="description"
          content="I and B is an asbestos removal services experienced team providing
              a comprehensive and professional asbestos removal and disposal
              service, we know what to look for when we inspect the areas of
              your home, which includes the kitchen, bathroom, and laundry"
        />
      </Head>
      <Header />
      <Contact />
      <Services />
      <Gallery />
      <About />
      <Removal />
      <Inspection />
    </Fragment>
  )
}
