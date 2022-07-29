import { animate, inView, stagger } from "motion"
import Image from "next/image"
import { useEffect } from "react"
import { classes, url } from "../../../utils/utils"

function List({ gallery }) {
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
          objectFit="cover"
          className={classes(
            "item-animation object-cover object-center",
            "translate-y-4 transform opacity-0"
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

export default List
