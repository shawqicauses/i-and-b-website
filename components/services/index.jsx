import { animate, inView } from "motion"
import { useEffect } from "react"
import { classes } from "../../utils/utils"
import List from "./list"

export default function Services() {
  useEffect(() => {
    const animation = { opacity: 1, transform: "none" }
    const duration = 0.4
    const easing = "ease-in-out"

    inView(".services-animation", ({ target }) => {
      animate(target.querySelectorAll(".heading-animation"), animation, {
        delay: 0.2,
        duration,
        easing
      })

      animate(target.querySelectorAll(".sub-heading-animation"), animation, {
        delay: 0,
        duration,
        easing
      })
    })
  })

  return (
    <section
      id="services"
      className={classes(
        "services-animation my-4 py-8",
        "lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div className={classes("wrapper")}>
        <div
          className={classes(
            "flex flex-col items-start justify-start",
            "md:items-center md:justify-center",
            "mb-10 md:mb-[3.75rem] lg:mb-20"
          )}>
          <p
            className={classes(
              "sub-heading-animation text-base font-medium leading-none",
              "mb-3 uppercase tracking-[0.3em] text-zinc-500",
              "translate-y-4 transform opacity-0 md:mb-5 md:text-lg"
            )}>
            Company Services
          </p>
          <h2
            className={classes(
              "heading-animation title-2 non-italic no-underline",
              "text-left text-zinc-900 md:text-center",
              "translate-y-4 transform opacity-0"
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
