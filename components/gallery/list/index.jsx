import Image from "next/image"
import { classes } from "../../../utils/utils"

function List() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2",
      alt: "Photo-01"
    },
    {
      image: "https://images.unsplash.com/photo-1486175060817-5663aacc6655",
      alt: "Photo-02"
    },
    {
      image: "https://images.unsplash.com/photo-1528810289438-283f885c31ef",
      alt: "Photo-03"
    },
    {
      image: "https://images.unsplash.com/photo-1508231446074-fdd3a1c51d53",
      alt: "Photo-04"
    },
    {
      image: "https://images.unsplash.com/photo-1507027244114-60f73c1a85ee",
      alt: "Photo-05"
    },
    {
      image: "https://images.unsplash.com/photo-1522743358649-311c79004e9a",
      alt: "Photo-05"
    }
  ]

  const items = data.map(({ image, alt }, index) => (
    <div key={index} className={classes("relative aspect-square w-full")}>
      <Image src={image} alt={alt} layout="fill" objectFit="cover" />
    </div>
  ))

  return (
    <div
      className={classes(
        "grid grid-cols-1 gap-5",
        "md:grid-cols-2 xl:grid-cols-3"
      )}>
      {items}
    </div>
  )
}

export default List
