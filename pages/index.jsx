import Link from "next/link"
import { Fragment } from "react"
import { classes } from "../utils/utils"

function Home() {
  const color = `rgba(0, 0, 0, 0.7)`
  const id = `photo-1587582423116-ec07293f0395`
  const image = `https://images.unsplash.com/${id}`
  const background = `linear-gradient(to right bottom, ${color}, ${color}), url("${image}")`

  const links = [
    { name: "About", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Products", to: "#products" },
    { name: "Inspection", to: "#inspection" },
    { name: "Removal", to: "#removal" }
  ]

  const buttons = [
    { name: "Learn more", to: "#about", primary: true },
    { name: "Contact us", to: "#contact", primary: false }
  ]

  return (
    <Fragment>
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
            {links.map(({ name, to }, index) => (
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
            ))}
          </ul>
        </div>
      </nav>
      <header
        style={{ background }}
        className={classes(
          "h-full min-h-screen py-40",
          "flex items-center justify-center",
          "!bg-cover !bg-center !bg-no-repeat"
        )}>
        <div
          className={classes(
            "wrapper flex flex-col",
            "items-start justify-center",
            "sm:items-center"
          )}>
          <h1
            className={classes(
              "title-1 not-italic no-underline",
              "mb-5 text-white",
              "text-left sm:text-center"
            )}>
            We are{" "}
            <span
              className={classes(
                "inline not-italic",
                "underline underline-offset-2",
                "decoration-teal-500 decoration-4"
              )}>
              professionals
            </span>{" "}
            in asbestos removal
          </h1>
          <p
            className={classes(
              "paragraph not-italic no-underline",
              "mb-10 text-zinc-300",
              "text-left sm:text-center"
            )}>
            I & B is an asbestos removal services experienced team providing a
            comprehensive and professional asbestos removal and disposal service
          </p>
          <div
            className={classes(
              "flex w-full flex-col",
              "items-center justify-center gap-3",
              "sm:w-max sm:flex-row"
            )}>
            {buttons.map(({ name, to, primary }, index) => (
              <Link key={index} href={to}>
                <a
                  className={classes(
                    primary ? "button-primary" : "button-white",
                    "button inline-block w-full",
                    "text-center sm:w-max"
                  )}>
                  {name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Home
