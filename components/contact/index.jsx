import Link from "next/link"
import { classes } from "../../utils/utils"

function Contact() {
  const information = [
    {
      name: "Phone Number",
      to: "tel:00970598182008",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes("h-5 w-5 stroke-current", "md:h-6 md:w-6")}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={[
              "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502",
              "1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493",
              "1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ].join(" ")}
          />
        </svg>
      )
    },
    {
      name: "Company E-mail",
      to: "mailto:shawqicause@outloook.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes("h-5 w-5 stroke-current", "md:h-6 md:w-6")}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={[
              "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0",
              "002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ].join(" ")}
          />
        </svg>
      )
    },
    {
      name: "Location",
      to: "https://maps.google.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes("h-5 w-5 stroke-current", "md:h-6 md:w-6")}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={[
              "M17.657 16.657L13.414 20.9a1.998 1.998 0",
              "01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ].join(" ")}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      )
    }
  ]

  const items = information.map(({ name, to, icon }, index) => (
    <Link key={index} href={to}>
      <a
        className={classes(
          "group flex items-center justify-center gap-5",
          "border-2 border-zinc-100 px-8 py-6",
          "text-zinc-900 outline-none transition-all",
          "hover:-translate-y-1 hover:text-zinc-900",
          "focus:translate-y-0.5 focus:text-zinc-900",
          "lg:border-0 lg:border-transparent lg:px-0 lg:py-0"
        )}>
        <div
          className={classes(
            "flex items-center justify-center text-teal-500",
            "lg:h-12 lg:w-12 lg:rounded-full lg:bg-teal-50 lg:transition",
            "lg:group-hover:bg-teal-500 lg:group-hover:text-white"
          )}>
          {icon}
        </div>
        <span
          className={classes(
            "text-lg font-medium leading-none md:text-xl",
            "not-italic text-current no-underline",
            "group-focus:underline group-focus:decoration-2",
            "group-focus:decoration-teal-500 group-focus:underline-offset-2"
          )}>
          {name}
        </span>
      </a>
    </Link>
  ))

  return (
    <section
      className={classes(
        "flex items-center justify-center",
        "bg-white py-10 md:py-12 lg:py-16"
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
