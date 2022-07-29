import { classes } from "../../utils/utils"
import List from "./list"

function Gallery({ gallery }) {
  return (
    <section
      id="gallery"
      className={classes(
        "gallery-animation my-4 py-8",
        "lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div className={classes("wrapper")}>
        <List gallery={gallery} />
      </div>
    </section>
  )
}

export default Gallery
