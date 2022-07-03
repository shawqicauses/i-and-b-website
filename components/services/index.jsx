import { classes } from "../../utils/utils"
import List from "./list"

function Services() {
  return (
    <section
      className={classes("my-4 py-8 md:my-8 md:py-12 lg:my-10 lg:py-16")}>
      <div className={classes("wrapper")}>
        <div
          className={classes(
            "flex flex-col items-start justify-start",
            "mb-12 md:mb-16 md:items-center md:justify-center lg:mb-20"
          )}>
          <p
            className={classes(
              "text-base font-medium leading-none",
              "mb-5 uppercase tracking-[0.3em] text-zinc-500",
              "md:text-lg"
            )}>
            Company Services
          </p>
          <h2
            className={classes(
              "title-2 non-italic no-underline",
              "text-left text-zinc-900 md:text-center"
            )}>
            Let us introduce the things we can do in{" "}
            <span
              className={classes(
                "underline underline-offset-2",
                "decoration-teal-500 decoration-2"
              )}>
              I and B
            </span>{" "}
            company
          </h2>
        </div>
        <List />
      </div>
    </section>
  )
}

export default Services
