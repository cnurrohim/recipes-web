import React from "react"
import { Link } from "react-router-dom"

const menu = () => {
  return (
    <div className="flex flex-row mb-10 text-lg ">
      <Link
        to="/"
        className="mr-5 hover:border-amber-400 box-border  hover:text-amber-400 text-amber-400"
      >
        <span className="bg-slate-800 text-yellow-300 border-2 border-yellow-300">
          C
        </span>
        <span className="bg-yellow-300 text-slate-800 border-2 border-yellow-300">
          K
        </span>
      </Link>
      <Link
        to="/about"
        className="mr-5  box-border hover:text-yellow-300 text-slate-500"
      >
        about
      </Link>
    </div>
  )
}

export default menu
