import { HeartIcon } from "@heroicons/react/outline"
import { animate, inView, stagger } from "motion"
import { useEffect } from "react"
import { classes } from "../../../utils/utils"

export default function List() {
  useEffect(() => {
    inView(".services-animation", ({ target }) => {
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
      className={classes(
        "item-animation group flex",
        "flex-col items-start justify-start",
        "translate-y-4 transform opacity-0"
      )}>
      <span
        className={classes(
          "mb-5 h-16 w-16",
          "flex items-center justify-center",
          "bg-white text-teal-600",
          "rounded-xl-2 shadow-lg transition-all",
          "group-hover:bg-teal-500 group-hover:text-white",
          "md:h-[4.5rem] md:w-[4.5rem] xl:mb-7"
        )}>
        <HeartIcon
          className={classes(
            "h-7 w-7 stroke-current",
            "transition-all group-hover:-translate-y-0",
            "md:h-8 md:w-8 md:group-hover:-translate-y-0.5"
          )}
          strokeWidth={1.5}
        />
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
          "max-w-xl text-base font-normal leading-relaxed",
          "text-left not-italic no-underline",
          "text-zinc-500 md:text-lg"
        )}>
        {description}
      </p>
    </div>
  ))

  return (
    <div
      className={classes(
        "services-animation grid grid-cols-1 gap-10",
        "md:grid-cols-2 md:gap-16",
        "xl:grid-cols-3 xl:gap-20"
      )}>
      {items}
    </div>
  )
}
