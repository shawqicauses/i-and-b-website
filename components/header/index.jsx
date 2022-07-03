import { LinkIcon, PaperClipIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { classes } from "../../utils/utils"

function Header() {
  const color = `rgba(0, 0, 0, 0.7)`
  const id = `photo-1587582423116-ec07293f0395`
  const image = `https://images.unsplash.com/${id}`
  const background = `linear-gradient(to right bottom, ${color}, ${color}), url("${image}")`

  const buttons = [
    {
      name: "Learn more",
      to: "#about",
      icon: <PaperClipIcon className={classes("h-5 w-5")} strokeWidth={1.5} />,
      primary: true
    },
    {
      name: "Contact us",
      to: "#contact",
      icon: <LinkIcon className={classes("h-5 w-5")} strokeWidth={1.5} />,
      primary: false
    }
  ]

  const items = buttons.map(({ name, to, icon, primary }, index) => (
    <Link key={index} href={to}>
      <a
        className={classes(
          primary ? "button-primary" : "button-white",
          "button flex items-center justify-center gap-3",
          "w-full text-center sm:w-max"
        )}>
        {icon}
        <span>{name}</span>
      </a>
    </Link>
  ))

  return (
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
          {items}
        </div>
      </div>
    </header>
  )
}

export default Header
