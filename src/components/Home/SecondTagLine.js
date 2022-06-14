import React from "react"
import Logo from "../Commons/Logo"
import { spanSystems } from "../Utils/ColumnSpan"

const Header = () => {
  return (
    <div
      className={`text-slate-800 ${spanSystems} flex flex-col gap-4 items-end font-bold`}
    >
      <Logo />

      <h2 className="text-5xl text-amber-500 font-bold font-truculenta uppercase mt-10">
        DON'T WORRY
      </h2>
      <span className="w-10 border-amber-400 border-b-2  animate-pulse"> </span>
      <p className="text-lg text-slate-400 font-thin w-full sm:w-2/3 text-right">
        Whether you're after an old favourite or inspiration for something new,
        we have the perfect recipe. All it takes is few simple recipes (and a
        sunny day!) for laid-back barbecues and breezy al fresco family meals to
        come together with ease.
      </p>
    </div>
  )
}

export default Header
