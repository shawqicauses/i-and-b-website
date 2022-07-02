import { Fragment } from "react"
import { Contact, Header, Navbar, Services } from "../components/components"

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Contact />
      <Services />
    </Fragment>
  )
}

export default Home
