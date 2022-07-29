import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon
} from "@heroicons/react/outline"
import { animate, inView, stagger } from "motion"
import Link from "next/link"
import { useEffect } from "react"
import { classes } from "../../utils/utils"

function Contact() {
  useEffect(() => {
    inView(
      ".contact-animation",
      ({ target }) => {
        animate(
          target.querySelectorAll(".item-animation"),
          { opacity: 1, transform: "none" },
          {
            delay: stagger(0.2),
            duration: 0.4,
            easing: "ease-in-out"
          }
        )
      },
      { amount: 1 }
    )
  })

  const information = [
    {
      name: "Phone Number",
      to: "tel:00970598182008",
      icon: (
        <PhoneIcon
          className={classes("h-6 w-6 stroke-current")}
          strokeWidth={1.5}
        />
      )
    },
    {
      name: "Company E-mail",
      to: "mailto:shawqicause@outloook.com",
      icon: (
        <MailIcon
          className={classes("h-6 w-6 stroke-current")}
          strokeWidth={1.5}
        />
      )
    },
    {
      name: "Location",
      to: "https://maps.google.com",
      icon: (
        <LocationMarkerIcon
          className={classes("h-6 w-6 stroke-current")}
          strokeWidth={1.5}
        />
      )
    }
  ]

  const items = information.map(({ name, to, icon }, index) => (
    <Link key={index} href={to}>
      <a
        className={classes(
          "item-animation group outline-none",
          "flex flex-row items-center justify-center",
          "rounded-lg bg-teal-400 px-8 py-6 text-white",
          "translate-y-4 transform gap-5 opacity-0",
          "lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0"
        )}>
        <div
          className={classes(
            "flex items-center justify-center text-white",
            "lg:h-12 lg:w-12 lg:rounded-full lg:bg-teal-600 lg:transition",
            "lg:group-hover:bg-teal-700 lg:group-hover:text-white"
          )}>
          {icon}
        </div>
        <span
          className={classes(
            "text-lg font-medium leading-none md:text-xl",
            "not-italic text-current text-white no-underline",
            "group-focus:decoration-teal-700 group-focus:decoration-2"
          )}>
          {name}
        </span>
      </a>
    </Link>
  ))

  return (
    <section
      className={classes(
        "contact-animation flex bg-teal-500",
        "mb-12 items-center justify-center py-10",
        "lg:mb-20 lg:py-12 xl:mb-[5.75rem] xl:py-16"
      )}>
      <div
        className={classes(
          "wrapper grid grid-cols-1 gap-5",
          "md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        )}>
        {items}
      </div>
    </section>
  )
}

export default Contact
