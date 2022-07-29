import { classes } from "../../utils/utils"
import List from "./list"

function Gallery({ gallery }) {
  return (
    <section
      id="gallery"
      className={classes(
        "gallery-animation my-4 py-8",
        "lg:my-8 lg:py-12 xl:my-10 xl:py-16"
      )}>
      <div className={classes("wrapper")}>
        <List gallery={gallery} />
      </div>
    </section>
  )
}

export default Gallery
