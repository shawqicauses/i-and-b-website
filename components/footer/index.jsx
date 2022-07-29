import { animate, inView } from "motion"
import { useEffect } from "react"
import { classes } from "../../utils/utils"

function Footer() {
  useEffect(() => {
    const animation = { opacity: 1, transform: "none" }
    const duration = 0.4
    const easing = "ease-in-out"

    inView(".footer-animation", ({ target }) => {
      animate(target.querySelectorAll(".copyright-animation"), animation, {
        delay: 0,
        duration,
        easing
      })

      animate(target.querySelectorAll(".developer-animation"), animation, {
        delay: 0.5,
        duration,
        easing
      })
    })
  })

  return (
    <section
      id="inspection"
      className={classes(
        "footer-animation my-4 py-8",
        "lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div
        className={classes(
          "wrapper flex h-auto w-full flex-col",
          "items-start justify-start gap-10",
          "lg:items-center lg:justify-center"
        )}>
        <h2
          className={classes(
            "copyright-animation text-xl font-medium leading-normal",
            "max-w-md transform text-left text-zinc-900",
            "translate-y-4 opacity-0 lg:text-center lg:text-xl-2"
          )}>
          2022 © All rights reserved for I and B asbestos removal company
        </h2>
        <p
          className={classes(
            "developer-animation text-base font-medium leading-none",
            "transform uppercase tracking-[0.3em] text-zinc-500",
            "translate-y-4 opacity-0 lg:text-lg"
          )}>
          Developed By{" "}
          <a
            href="https://github.com/shawqicauses"
            target="blank"
            className={classes(
              "text-zinc-900 decoration-teal-500",
              "underline decoration-2 underline-offset-4"
            )}>
            shawqicauses
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
