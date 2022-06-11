import React from "react"
import Footer from "../Commons/Footer"
import Details from "./RecipeDetails"
import SecondaryHero from "../Commons/SecondaryHero"
import { gridSystems, gapSystems } from "../Utils/ColumnSpan"

const Recipe = () => {
  return (
    <>
      <SecondaryHero />
      <Details />
      <div
        className={`grid ${gridSystems} ${gapSystems} gap-6 w-full bg-slate-800  pl-20 pr-20 font-sans text-white`}
      >
        <Footer />
      </div>
    </>
  )
}

export default Recipe
