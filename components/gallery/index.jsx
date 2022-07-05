import { classes } from "../../utils/utils"
import List from "./list"

function Gallery() {
  return (
    <section
      id="gallery"
      className={classes("my-4 py-8 md:my-8 md:py-12 lg:my-10 lg:py-16")}>
      <div className={classes("wrapper")}>
        <List />
      </div>
    </section>
  )
}

export default Gallery
