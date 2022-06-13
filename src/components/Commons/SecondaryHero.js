import React from "react"
import Logo from "./Logo"
import { Link } from "react-router-dom"
import { gapSystems, gridSystems, spanSystems } from "../Utils/ColumnSpan"

const SecondaryHero = () => {
  return (
    <div
      className={`grid ${gridSystems} ${gapSystems} min-h-screen gap-x-2 px-5 md:px-20 lg:px-20 xl:px-20 sm:px-20 bg-neutral-800 text-slate-200 relative`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%), url('../hero/hero-bg (13).jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className={`${spanSystems}`}></div>
      <div className={`${spanSystems}`}></div>
      <span className="lg:col-span-5 sm:col-span-2 md:col-span-3 col-span-1 col-start-1 bg-slate-800 flex flex-col items-center justify-center">
        <Logo />
      </span>
      <div
        className="h-full bg-contain bg-center bg-no-repeat absolute bottom-0 w-96 left-2/4 z-0"
        style={{
          backgroundImage: `url('../hero/chef.png')`,
        }}
      ></div>
    </div>
  )
}

export default SecondaryHero
