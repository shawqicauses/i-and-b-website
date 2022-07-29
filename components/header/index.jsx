import { LinkIcon, PaperClipIcon } from "@heroicons/react/outline"
import { animate, inView } from "motion"
import Link from "next/link"
import { useEffect } from "react"
import { classes, url } from "../../utils/utils"

function Header({ gallery }) {
  useEffect(() => {
    const animation = { opacity: 1, transform: "none" }
    const duration = 0.4
    const easing = "ease-in-out"

    inView(".header-animation", ({ target }) => {
      animate(target.querySelectorAll(".title-animation"), animation, {
        delay: 1,
        duration,
        easing
      })

      animate(target.querySelectorAll(".paragraph-animation"), animation, {
        delay: 1.2,
        duration,
        easing
      })

      animate(target.querySelectorAll(".buttons-animation"), animation, {
        delay: 1.4,
        duration,
        easing
      })
    })
  })

  const color = `rgba(0, 0, 0, 0.7)`
  const image = gallery && url(gallery[6].fields.image.fields.file.url)
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
        "header-animation h-full min-h-screen py-40",
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
            "title-1 title-animation",
            "not-italic text-white no-underline",
            "mb-5 text-left sm:text-center",
            "translate-y-4 transform opacity-0"
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
            "paragraph paragraph-animation",
            "not-italic text-zinc-300 no-underline",
            "mb-10 text-left sm:text-center",
            "translate-y-4 transform opacity-0"
          )}>
          The asbestos removal services in I and B is an experienced team
          providing a comprehensive and professional asbestos removal and
          disposal service
        </p>
        <div
          className={classes(
            "buttons-animation flex w-full flex-col",
            "items-center justify-center gap-3",
            "sm:w-max sm:flex-row",
            "translate-y-4 transform opacity-0"
          )}>
          {items}
        </div>
      </div>
    </header>
  )
}

export default Header
