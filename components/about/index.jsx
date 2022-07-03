import { classes } from "../../utils/utils"

function About() {
  return (
    <section className={classes("my-10 py-10 md:my-16 md:py-16")}>
      <div className={classes("wrapper")}>
        <div
          className={classes(
            "grid grid-cols-1 gap-10",
            "xl:grid-cols-2 xl:gap-20"
          )}>
          <div className={classes("flex flex-col items-start justify-start")}>
            <p
              className={classes(
                "text-base font-medium leading-none lg:text-lg",
                "mb-3 uppercase tracking-[0.3em] text-zinc-500"
              )}>
              What we do
            </p>
            <h2 className={classes("title-2 mb-6 max-w-sm")}>
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
          <div>
            <h3
              className={classes(
                "text-xl font-medium leading-tight",
                "mb-3 text-zinc-900 lg:text-xl-2"
              )}>
              We are skilled enough to ...
            </h3>
            <p
              className={classes(
                "text-base font-normal leading-relaxed lg:text-lg",
                "mb-10 text-left not-italic text-zinc-500 no-underline"
              )}>
              We are skilled enough to access and remove asbestos in all
              ceilings, internal walls, and floor coverings. We also target
              outside areas, like external cladding, eaves, roofing, downpipes,
              flues, and fences
            </p>
            <h3
              className={classes(
                "text-xl font-medium leading-tight",
                "mb-3 text-zinc-900 lg:text-xl-2"
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
