import { animate, inView, stagger } from "motion"
import Image from "next/image"
import { useEffect } from "react"
import { classes, url } from "../../utils/utils"

export default function Removal({ gallery }) {
  useEffect(() => {
    const animation = { opacity: 1, transform: "none" }
    const duration = 0.4
    const easing = "ease-in-out"

    inView(".removal-animation", ({ target }) => {
      animate(target.querySelectorAll(".image-animation"), animation, {
        delay: 0,
        duration,
        easing
      })

      animate(target.querySelectorAll(".item-animation"), animation, {
        delay: stagger(0.2),
        duration,
        easing
      })
    })
  })

  return (
    <section
      id="removal"
      className={classes(
        "removal-animation my-4 py-8",
        "lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div className={classes("wrapper")}>
        <div
          className={classes(
            "relative aspect-square max-w-full",
            "mb-20 md:aspect-video lg:mb-[7.5rem] xl:mb-[8.75rem]"
          )}>
          <Image
            src={gallery && url(gallery[5].fields.image.fields.file.url)}
            alt="Asbestos Removal"
            layout="fill"
            className={classes(
              "image-animation h-full w-full",
              "transform object-cover object-center",
              "translate-y-4 translate-x-0 opacity-0"
            )}
          />
        </div>
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
            <h2 className={classes("title-2 mb-5 max-w-xs lg:mb-10")}>
              Was your home built before 1987?
            </h2>
            <p
              className={classes(
                "text-base font-normal leading-relaxed",
                "text-left not-italic text-zinc-500 no-underline",
                "mb-3 lg:mb-5 lg:text-lg"
              )}>
              Approximately, there is one-third of all homes in Australia
              contain some asbestos products
            </p>
            <span
              className={classes(
                "text-base font-medium leading-none lg:text-lg",
                "text-zinc-900 underline underline-offset-4",
                "decoration-teal-500 decoration-2"
              )}>
              Australian Government
            </span>
          </div>
          <div
            className={classes(
              "item-animation flex",
              "flex-col items-start justify-center",
              "translate-y-4 transform opacity-0"
            )}>
            <p
              className={classes(
                "text-base font-normal leading-relaxed",
                "text-left not-italic text-zinc-500 no-underline",
                "mb-5 lg:mb-10 lg:text-lg"
              )}>
              If your house was constructed or reconditioned before the
              mid-1980s, it potentially contains asbestos products. As a guide,
              the probability of your home containing asbestos depends on when
              it was constructed or reconditioned:
            </p>
            <div
              className={classes(
                "flex w-full flex-col",
                "items-start justify-start gap-4"
              )}>
              <p
                className={classes(
                  "text-base font-medium leading-none",
                  "text-zinc-900 lg:text-lg"
                )}>
                Before mid-1980s -{" "}
                <span
                  className={classes(
                    "text-zinc-900 underline underline-offset-4",
                    "decoration-teal-500 decoration-2"
                  )}>
                  Highly Probable
                </span>
              </p>
              <p
                className={classes(
                  "text-base font-medium leading-none",
                  "text-zinc-900 lg:text-lg"
                )}>
                From mid-1980s to 1990 -{" "}
                <span
                  className={classes(
                    "text-zinc-900 underline underline-offset-4",
                    "decoration-teal-500 decoration-2"
                  )}>
                  Probable
                </span>
              </p>
              <p
                className={classes(
                  "text-base font-medium leading-none",
                  "text-zinc-900 lg:text-lg"
                )}>
                After 1990 -{" "}
                <span
                  className={classes(
                    "text-zinc-900 underline underline-offset-4",
                    "decoration-teal-500 decoration-2"
                  )}>
                  Isn't Probable
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
