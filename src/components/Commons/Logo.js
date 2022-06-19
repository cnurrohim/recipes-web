import React from "react"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="text-2xl z-50">
      <span className="border-yellow-300 border-2 border-r-0 py-2 pl-2 text-slate-400">
        COO
      </span>
      <span className="border-yellow-300 border-2 border-l-0 py-2 pr-2 bg-yellow-300 text-slate-800">
        KING.COM
      </span>
    </Link>
  )
}

export default Logo
