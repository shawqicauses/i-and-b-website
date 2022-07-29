import { animate, inView, stagger } from "motion"
import { useEffect } from "react"
import { classes } from "../../utils/utils"

function About() {
  useEffect(() => {
    inView(".about-animation", ({ target }) => {
      animate(
        target.querySelectorAll(".item-animation"),
        { opacity: 1, transform: "none" },
        {
          delay: stagger(0.2),
          duration: 0.4,
          easing: "ease-in-out"
        }
      )
    })
  })

  return (
    <section
      id="about"
      className={classes(
        "about-animation my-4 py-8",
        "lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div className={classes("wrapper")}>
        <div
          className={classes(
            "grid grid-cols-1 gap-10",
            "lg:grid-cols-2 lg:gap-20"
          )}>
          <div
            className={classes(
              "item-animation flex",
              "flex-col items-start justify-start",
              "translate-y-4 transform opacity-0"
            )}>
            <p
              className={classes(
                "text-base font-medium leading-none",
                "uppercase tracking-[0.3em] text-zinc-500",
                "mb-3 lg:mb-5 lg:text-lg"
              )}>
              Hmm, who are we
            </p>
            <h2
              className={classes("title-2 mb-5 max-w-xs md:max-w-sm lg:mb-10")}>
              We are professional in asbestos removal
            </h2>
            <p
              className={classes(
                "text-base font-normal leading-relaxed lg:text-lg",
                "text-left not-italic text-zinc-500 no-underline"
              )}>
              I and B is an asbestos removal services experienced team providing
              a comprehensive and professional asbestos removal and disposal
              service, we know what to look for when we inspect the areas of
              your home, which includes the kitchen, bathroom, and laundry
            </p>
          </div>
          <div
            className={classes(
              "item-animation flex",
              "flex-col items-start justify-center",
              "translate-y-4 transform opacity-0"
            )}>
            <h3
              className={classes(
                "text-xl font-medium leading-tight",
                "mb-3 text-zinc-900 lg:mb-5 lg:text-xl-2"
              )}>
              We are skilled enough to ...
            </h3>
            <p
              className={classes(
                "text-base font-normal leading-relaxed",
                "text-left not-italic text-zinc-500 no-underline",
                "mb-6 lg:mb-10 lg:text-lg"
              )}>
              Remove and access asbestos in all ceilings, internal walls, and
              floor coverings. We also target outside areas, like external
              cladding, eaves, roofing, downpipes, flues, and fences
            </p>
            <h3
              className={classes(
                "text-xl font-medium leading-tight",
                "mb-3 text-zinc-900 lg:mb-5 lg:text-xl-2"
              )}>
              We perform for your safety
            </h3>
            <p
              className={classes(
                "text-base font-normal leading-relaxed lg:text-lg",
                "text-left not-italic text-zinc-500 no-underline"
              )}>
              If asbestos is present, we will find it, decontaminate the entire
              site and remove it safely, so you can live and work in an
              asbestos-free environment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
