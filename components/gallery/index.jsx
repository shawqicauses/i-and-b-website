import { classes } from "../../utils/utils"
import List from "./list"

function Gallery({ gallery }) {
  return (
    <section
      id="gallery"
      className={classes("my-4 py-8 md:my-8 md:py-12 lg:my-10 lg:py-16")}>
      <div className={classes("wrapper")}>
        <List gallery={gallery} />
      </div>
    </section>
  )
}

export default Gallery
