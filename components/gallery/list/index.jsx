import { animate, inView, stagger } from "motion"
import Image from "next/image"
import { useEffect } from "react"
import { classes, url } from "../../../utils/utils"

export default function List({ gallery }) {
  useEffect(() => {
    inView(".gallery-animation", ({ target }) => {
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

  const items =
    gallery &&
    gallery.map((item, index) => (
      <div key={index} className={classes("relative aspect-square w-full")}>
        <Image
          src={url(item.fields.image.fields.file.url)}
          alt={item.fields.image.fields.title}
          layout="fill"
          className={classes(
            "item-animation h-full w-full",
            "transform object-cover object-center",
            "translate-y-4 translate-x-0 opacity-0"
          )}
        />
      </div>
    ))

  return (
    <div
      className={classes(
        "gallery-animation grid grid-cols-1 gap-5",
        "md:grid-cols-2 xl:grid-cols-3"
      )}>
      {items}
    </div>
  )
}
