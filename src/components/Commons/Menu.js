import React from "react"
import { Link } from "react-router-dom"

const menu = () => {
  return (
    <div className="flex flex-row mb-10 text-lg ">
      <Link
        to="/"
        className="mr-5 hover:border-b-2 hover:border-amber-400 border-b-2 box-border  hover:text-amber-400 text-amber-400 border-amber-400 text-slate-500"
      >
        home
      </Link>
      <Link
        to="/about"
        className="mr-5 hover:border-b-2 hover:border-amber-400 border-b-2 box-border border-transparent hover:text-amber-400 text-slate-500"
      >
        about
      </Link>
      <Link
        to="/contact"
        className="mr-5 hover:border-b-2 hover:border-amber-400 border-b-2 box-border border-transparent hover:text-amber-400 text-slate-500"
      >
        contact us
      </Link>
    </div>
  )
}

export default menu
