import React from "react"

const heroImage = () => {
  const clipPath = [
    "lg:[clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_100%)]  md:[clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_100%)]  sm[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]",
    "lg:[clip-path:polygon(0%_0%,100%_0%,100%_88%,0%_98%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_88%,0%_98%)] sm:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]",
    "lg:[clip-path:polygon(0%_0%,100%_0%,100%_70%,0%_80%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_70%,0%_80%)] sm:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]",
    "lg:[clip-path:polygon(0%_0%,100%_0%,100%_65%,0%_75%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_65%,0%_75%)] sm:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]",
  ]

  /* take random images from asset */
  const randomHeroImage = Math.floor(Math.random() * (7 - 1) + 1)
  return (
    <div className="flex min-h-[40vh] sm:h-auto md:h-auto lg:h-[100vh] xl:h-[100vh] flex-row w-full justify-center">
      {clipPath.map((clip, i) => {
        const marginRight = i == clipPath.length - 1 ? "" : "mr-1"
        return (
          <div key={i} className={`h-auto w-1/4 ${marginRight} ${clip}`}>
            <img
              className="w-[100%] h-[40vh] sm:h-auto md:h-auto absolute sm:top-0 bottom-0 md:bottom-0 lg:bottom-0 xl:bottom-0 right-0"
              src={`./hero/main-page/hero (${randomHeroImage}).jpg`}
              alt="nope"
            />
          </div>
        )
      })}
      <span className="w-[2px] h-[65%] bg-amber-400">&nbsp;</span>
    </div>
  )
}

export default heroImage
