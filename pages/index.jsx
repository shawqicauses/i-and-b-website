import { Fragment } from "react"
import {
  Contact,
  Gallery,
  Header,
  Navbar,
  Services
} from "../components/components"

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Contact />
      <Services />
      <Gallery />
    </Fragment>
  )
}

export default Home
