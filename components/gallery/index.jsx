import { classes } from "../../utils/utils"
import List from "./list"

export default function Gallery() {
  return (
    <section
      id="gallery"
      className={classes(
        "gallery-animation my-4 py-8",
        "lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div className={classes("wrapper")}>
        <List />
      </div>
    </section>
  )
}
