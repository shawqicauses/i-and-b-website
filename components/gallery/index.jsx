import { classes } from "../../utils/utils"
import List from "./list"

function Gallery() {
  return (
    <section className={classes("my-20 py-16")}>
      <div className={classes("wrapper")}>
        <List />
      </div>
    </section>
  )
}

export default Gallery
