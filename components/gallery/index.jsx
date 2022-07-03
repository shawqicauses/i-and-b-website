import { classes } from "../../utils/utils"
import List from "./list"

function Gallery() {
  return (
    <section className={classes("my-10 py-10 md:my-16 md:py-16")}>
      <div className={classes("wrapper")}>
        <List />
      </div>
    </section>
  )
}

export default Gallery
