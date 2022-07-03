import { Fragment } from "react"
import {
  About,
  Contact,
  Gallery,
  Header,
  Navbar,
  Removal,
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
      <Removal />
    </Fragment>
  )
}

export default Home
