import React from "react"
import Menu from "../Commons/Menu"
import HeroImage from "../Commons/HeroImage"
import { spanSystems } from "../Utils/ColumnSpan"

const Hero = () => {
  return (
    <div
      className={`${spanSystems} flex flex-col h-auto sm:flex-row md:flex-row lg:flex-row font-sans mb-10 gap-4 relative`}
    >
      <div className="w-full md:w-1/2 lg:w-1/2 h-auto text-slate-400 font-regular flex flex-col pt-2 md:pr-9 lg:pr-9 mb-5">
        <Menu />

        <div className="flex flex-col mb-4 gap-4">
          <h2 className="text-5xl text-amber-500 font-bold font-truculenta uppercase">
            Welcome to recipes heaven
          </h2>
          <span className="w-10 border-amber-400 border-b-2 animate-pulse">
            {" "}
          </span>
          <p className="text-lg text-slate-400 font-thin ">
            Find the perfect food and drink recipes for every occasion, from
            weeknight dinners to holiday feasts.
          </p>
        </div>
      </div>

      <HeroImage />
    </div>
  )
}

export default Hero
