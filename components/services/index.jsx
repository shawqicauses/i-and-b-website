import { classes } from "../../utils/utils"

function Services() {
  const data = [
    {
      title: "Asbestos Abatement",
      description: [
        "Asbestos issues can range from an inconvenience",
        "to a major environmental liability on many construction projects"
      ].join(" ")
    },
    {
      title: "Selective Demolition",
      description: [
        "The combination of these two disciplines allows for",
        "elimination of duplication and provides significant cost and schedule savings"
      ].join(" ")
    },
    {
      title: "Environmental Remediation",
      description: [
        "Our ability to handle an array of environmental clean-up",
        "issues makes I and B one of the premier environmental firms in the region"
      ].join(" ")
    },
    {
      title: "Floor & Surface Preparation",
      description: [
        "I and B provides removal and surface preparation of",
        "all types of new and existing floor finishes"
      ].join(" ")
    },
    {
      title: "Specialty Services",
      description: [
        "The creativity and diverse skill set of our personnel",
        "allows us to take on new challenges as they are presented"
      ].join(" ")
    }
  ]

  const items = data.map(({ title, description }, index) => (
    <div
      key={index}
      className={classes("flex flex-col items-start justify-start")}>
      <span
        className={classes(
          "mb-5 h-16 w-16",
          "flex items-center justify-center",
          "rounded-xl-2 bg-teal-50 text-teal-600",
          "md:h-[4.5rem] md:w-[4.5rem] xl:mb-7"
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes("h-7 w-7 stroke-current", "mb:h-8 mb:w-8")}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={[
              "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0",
              "00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ].join(" ")}
          />
        </svg>
      </span>
      <h3
        className={classes(
          "text-xl font-medium leading-normal",
          "not-italic no-underline",
          "mb-2 text-zinc-900"
        )}>
        {title}
      </h3>
      <p
        className={classes(
          "text-base font-normal leading-relaxed",
          "text-left not-italic no-underline",
          "text-zinc-500 md:text-lg"
        )}>
        {description}
      </p>
    </div>
  ))

  return (
    <section className={classes("my-16 py-16")}>
      <div className={classes("wrapper")}>
        <div
          className={classes(
            "grid grid-cols-1 gap-10",
            "md:grid-cols-2 md:gap-16",
            "xl:grid-cols-3 xl:gap-20"
          )}>
          {items}
        </div>
      </div>
    </section>
  )
}

export default Services
