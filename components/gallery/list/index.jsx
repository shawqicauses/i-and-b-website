import { animate, inView, stagger } from "motion"
import Image from "next/image"
import { useEffect } from "react"
import { classes } from "../../../utils/utils"

function List() {
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

  const data = [
    { image: "photo-1435575653489-b0873ec954e2", alt: "Photo-01" },
    { image: "photo-1486175060817-5663aacc6655", alt: "Photo-02" },
    { image: "photo-1528810289438-283f885c31ef", alt: "Photo-03" },
    { image: "photo-1508231446074-fdd3a1c51d53", alt: "Photo-04" },
    { image: "photo-1507027244114-60f73c1a85ee", alt: "Photo-05" },
    { image: "photo-1522743358649-311c79004e9a", alt: "Photo-06" }
  ]

  const items = data.map(({ image, alt }, index) => (
    <div key={index} className={classes("relative aspect-square w-full")}>
      <Image
        src={"https://images.unsplash.com/" + image}
        alt={alt}
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
