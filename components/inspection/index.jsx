import Image from "next/image"
import { classes, url } from "../../utils/utils"

function Inspection({ gallery }) {
  return (
    <section
      id="inspection"
      className={classes(
        "removal-animation my-4 py-8",
        "lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div
        className={classes(
          "wrapper flex h-auto w-full flex-col",
          "items-center justify-center gap-20",
          "lg:flex-row lg:gap-10"
        )}>
        <div className={classes("relative aspect-square w-full flex-1")}>
          <Image
            src={gallery && url(gallery[8].fields.image.fields.file.url)}
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
            "item-animation w-full flex-1",
            "translate-y-4 transform opacity-0"
          )}>
          <h2 className={classes("title-2 mb-5 max-w-xs lg:mb-10")}>
            Worried you may have asbestos removal?
          </h2>
          <h3
            className={classes(
              "text-xl font-medium leading-tight",
              "mb-3 text-zinc-900 lg:mb-5 lg:text-xl-2"
            )}>
            Honest site inspection
          </h3>
          <p
            className={classes(
              "text-base font-normal leading-relaxed",
              "text-left text-zinc-500 no-underline",
              "mb-6 not-italic lg:mb-10 lg:text-lg"
            )}>
            At I and B Asbestos Removal Service. We flatter ourselves on
            providing our customers with a comprehensive and honest site
            inspection to assess your property for the presence of
            asbestos-containing materials
          </p>
          <h3
            className={classes(
              "text-xl font-medium leading-tight",
              "mb-3 text-zinc-900 lg:mb-5 lg:text-xl-2"
            )}>
            For your Melbourne home
          </h3>
          <p
            className={classes(
              "text-base font-normal leading-relaxed",
              "text-left text-zinc-500 no-underline",
              "not-italic lg:text-lg"
            )}>
            Asbestos products can destroy your health and the broader community
            if they are not properly maintained or removed and disposed of
            correctly
          </p>
        </div>
      </div>
    </section>
  )
}

export default Inspection
