import Link from "next/link"
import { classes } from "../../utils/utils"

function Navbar() {
  const links = [
    { name: "About", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Products", to: "#products" },
    { name: "Inspection", to: "#inspection" },
    { name: "Removal", to: "#removal" }
  ]

  const items = links.map(({ name, to }, index) => (
    <Link key={index} href={to}>
      <a
        className={classes(
          "text-base font-medium leading-none",
          "uppercase tracking-[0.2em] text-white",
          "transform outline-none transition-all",
          "hover:-translate-y-1 hover:text-teal-300",
          "focus:translate-y-0.5 focus:text-teal-500"
        )}>
        {name}
      </a>
    </Link>
  ))

  return (
    <nav
      className={classes(
        "w-full py-10",
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
            "text-lg font-medium leading-none",
            "not-italic no-underline",
            "tracking-wider text-white md:text-xl"
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

export default Navbar
