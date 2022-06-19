import React from "react"
import { gridSystems, gapSystems } from "../Utils/ColumnSpan"
import { Link } from "react-router-dom"
import SocialMediaLink from "../Commons/SocialMediaLink"

const About = () => {
  return (
    <div
      className={`grid ${gridSystems} ${gapSystems} bg-slate-800 text-slate-200 min-h-screen`}
    >
      <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-center sm:items-end md:items-end lg:items-end xl:items-end">
        <img
          src="./hero/hero (7).png"
          alt="food image"
          className="w-96  mr-20 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0"
        />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 flex flex-col justify-center mx-20 sm:m-0 md:m-0 lg:m-0 xl:m-0">
        <h1 className="text-4xl text-slate-800 flex flex-row mb-8">
          <span className="bg-yellow-300 mr-1 mb-1 p-1 w-fit">about</span>
          <span className="bg-yellow-300 mb-1 p-1 w-fit">this site</span>
        </h1>
        <p className="mb-3">
          This site is made for portofolio purpose. build with reactJS with the
          help of{" "}
          <a
            href="https://spoonacular.com/food-api/"
            className="text-blue-400 hover:underline"
          >
            spoonacular API{" "}
          </a>
          which provide us with a lots of great recipes.
        </p>
        <Link to="/" className="text-yellow-300 mb-1">
          www.cooking.com
        </Link>
        <div className="flex flex-row gap-2">
          <SocialMediaLink />
        </div>
      </div>
    </div>
  )
}

export default About
