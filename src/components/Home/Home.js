import React from "react"
import Hero from "./Hero"
import SecondTagLine from "./SecondTagLine"
import ListRecipes from "./ListRecipes"
import Footer from "../Commons/Footer"
import { gridSystems, gapSystems } from "../Utils/ColumnSpan"

const Home = () => {
  return (
    <>
      <div
        className={`grid ${gridSystems} ${gapSystems}  min-h-screen w-full  px-2 px-5 sm:px-5 md:px-10 lg:px-20 bg-slate-800 font-sans text-white`}
      >
        <Hero />
        <SecondTagLine />
        <ListRecipes />
        <Footer />
      </div>
    </>
  )
}

export default Home
