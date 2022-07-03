import Image from "next/image"
import { classes } from "../../utils/utils"

function Removal() {
  return (
    <section
      className={classes("my-4 py-8 md:my-8 md:py-12 lg:my-10 lg:py-16")}>
      <div className={classes("wrapper")}>
        <div>
          <div
            className={classes(
              "relative mb-10 aspect-square max-w-full",
              "md:mb-20 md:aspect-video"
            )}>
            <Image
              src="https://images.unsplash.com/photo-1564182842834-681b7be6de4b"
              alt="Asbestos Removal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={classes(
              "grid grid-cols-1 gap-10",
              "lg:grid-cols-2 lg:gap-20"
            )}>
            <div className={classes("flex flex-col items-start justify-start")}>
              <h2 className={classes("title-2 mb-3 max-w-xs")}>
                Was your home built before 1987?
              </h2>
              <p
                className={classes(
                  "text-base font-normal leading-relaxed lg:text-lg",
                  "mb-6 text-left not-italic text-zinc-500 no-underline"
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
            <div>
              <p
                className={classes(
                  "text-base font-normal leading-relaxed lg:text-lg",
                  "mb-6 text-left not-italic text-zinc-500 no-underline"
                )}>
                If your house was constructed or reconditioned before the
                mid-1980s, it potentially contains asbestos products. As a
                guide, the probability of your home containing asbestos depends
                on when it was constructed or reconditioned:
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
      </div>
    </section>
  )
}

export default Removal
