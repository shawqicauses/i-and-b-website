import { Fragment } from "react"
import { Provider } from "../../context"
import { Footer, Navbar } from "../components"

export default function Layout({ children }) {
  return (
    <Fragment>
      <Provider>
        <Navbar />
        {children}
        <Footer />
      </Provider>
    </Fragment>
  )
}
