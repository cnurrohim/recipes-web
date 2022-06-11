import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import Logo from "./Logo"
import { Link } from "react-router-dom"
import { spanSystems } from "../Utils/ColumnSpan"

const Thumbnails = () => {
  return (
    <>
      <div
        className={`lg:col-span-4 md:col-span-3 sm:col-span-2 xl:col-span-4 col-span-1 col-start-1 text-slate-400 pt-16 mb-10`}
      >
        <p className="font-bold mb-2">Go Cook Something Awesome</p>
        <p className="mb-2">
          <Link to="/">wwww.cooking.com</Link> is online recipes library used by
          millions of mothers, chefs, and hobbist who love cooking.
        </p>
        <div className="flex flex-row gap-5">
          <Link to="">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-3xl text-blue-700"
            />
          </Link>

          <Link to="">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="text-3xl text-sky-500"
            />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-3xl text-pink-500"
            />
          </Link>
        </div>
      </div>

      <div
        className={`${spanSystems} text-slate-800 flex flex-row items-end justify-end pb-10`}
      >
        <Logo className="mb-10" />
      </div>
    </>
  )
}

export default Thumbnails
