import { animate, inView, stagger } from "motion"
import Link from "next/link"
import { useEffect } from "react"
import { classes } from "../../utils/utils"

export default function Navbar() {
  useEffect(() => {
    const animation = { opacity: 1, transform: "none" }
    const duration = 0.4
    const easing = "ease-in-out"

    inView(".navbar-animation", ({ target }) => {
      animate(target.querySelectorAll(".logo-animation"), animation, {
        delay: 0,
        duration,
        easing
      })

      animate(target.querySelectorAll(".link-animation"), animation, {
        delay: stagger(0.2),
        duration,
        easing
      })
    })
  })

  const links = [
    { name: "About", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Gallery", to: "#gallery" },
    { name: "Inspection", to: "#inspection" },
    { name: "Removal", to: "#removal" }
  ]

  const items = links.map(({ name, to }, index) => (
    <li
      key={index}
      className={classes(
        "link-animation cursor-pointer",
        "translate-y-4 transform opacity-0"
      )}>
      <Link href={to}>
        <a
          href={to}
          className={classes(
            "inline-block text-base font-medium leading-none",
            "uppercase tracking-[0.2em] text-white",
            "underline underline-offset-8",
            "decoration-transparent decoration-2",
            "transform outline-none transition-all",
            "hover:text-teal-300 hover:decoration-teal-500"
          )}>
          {name}
        </a>
      </Link>
    </li>
  ))

  return (
    <nav
      className={classes(
        "navbar-animation w-full py-10",
        "absolute top-0 left-0",
        "flex items-center justify-center"
      )}>
      <div
        className={classes(
          "wrapper flex flex-col gap-10",
          "items-start justify-center",
          "sm:items-center lg:flex-row lg:justify-between"
        )}>
        <span
          className={classes(
            "logo-animation text-lg font-medium leading-none",
            "not-italic no-underline",
            "tracking-wider text-white md:text-xl",
            "translate-y-4 transform opacity-0"
          )}>
          I and B
        </span>
        <ul
          className={classes(
            "hidden w-3/4 flex-wrap",
            "items-center justify-center gap-5",
            "sm:flex md:w-max md:gap-10"
          )}>
          {items}
        </ul>
      </div>
    </nav>
  )
}
