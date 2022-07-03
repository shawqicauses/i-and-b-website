import { Fragment } from "react"
import {
  About,
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
      <About />
    </Fragment>
  )
}

export default Home
