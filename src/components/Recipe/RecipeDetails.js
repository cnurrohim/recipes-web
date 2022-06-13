import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faBellConcierge,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"
import { getRecipeDetails, getSimilarRecipes } from "../../store/recipe"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import DOMpurify from "dompurify"
import Skeleton from "../Skeletons/RecipeSkeleton"
import SimilarSuggestions from "./SimilarSuggestions"
import InggredientsAndSteps from "./InggredientsAndSteps"
import { gridSystems, spanSystems } from "../Utils/ColumnSpan"

const DetailS = () => {
  const recipe = useSelector((state) => state.recipeReducer.recipe)

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getRecipeDetails(id))
    dispatch(getSimilarRecipes(id))
  }, [dispatch, id])

  return recipe &&
    Object.keys(recipe).length === 0 &&
    Object.getPrototypeOf(recipe) === Object.prototype ? (
    <>
      <Skeleton />
    </>
  ) : (
    <>
      <div
        className={`grid ${gridSystems} gap-y-0 xl:gap-x-6 lg:gap-x-6 md:gap-x-3 sm:gap-x-1 gap-x-1 px-5 md:px-20 lg:px-20 xl:px-20 sm:px-20 bg-slate-800 text-slate-200`}
      >
        <div
          className={`h-max col-span-1 lg:col-span-5 xl:col-span-5 md:col-span-3 sm:col-span-4 col-start-1`}
        >
          <img className="w-[100%] h-full" src={`${recipe.image}`} />
          <div className="col-span-5 col-start-1 h-28  bg-slate-600 flex flex-row">
            <div className="bg-slate-600 w-1/3 h-[100%] text-center flex justify-center items-center">
              <span className="text-xl flex flex-col items-center">
                <FontAwesomeIcon icon={faClock} className="text-3xl" />
                <small>{recipe.readyInMinutes} mins</small>
              </span>
            </div>
            <div className="bg-slate-700 w-1/3 text-center flex justify-center items-center">
              <span className="text-xl flex flex-col items-center">
                <FontAwesomeIcon icon={faBellConcierge} className="text-3xl" />
                <small>{recipe.servings} servings</small>
              </span>
            </div>
            <div className="bg-slate-800 w-1/3 text-center flex justify-center items-center">
              <span className="text-xl flex flex-col  items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-white text-3xl"
                />
                <small>{recipe.aggregateLikes} likes</small>
              </span>
            </div>
          </div>
        </div>

        <div
          className={`bg-slate-800col-start-1 lg:col-start-7 xl:col-start-7 md:col-start-5 sm:col-start-1 col-span-1 lg:col-span-5 xl:col-span-5 md:col-span-4 sm:col-span-4 row-span-3 pt-16 pb-10 flex flex-col justify-center `}
        >
          <h1 className="text-5xl font-bold font-anton uppercase text-amber-400">
            {recipe.title}
          </h1>
          <p className="text-3xl text-amber-600 mb-8 ">
            <a href={recipe.sourceUrl} target="_blank">
              {recipe.sourceName}
            </a>
          </p>
          <p
            className="text-lg text-slate-300 "
            dangerouslySetInnerHTML={{
              __html: DOMpurify.sanitize(recipe.summary),
            }}
          ></p>
        </div>

        <div className={`bg-slate-800 ${spanSystems}`}></div>
        <div className={`bg-slate-800 ${spanSystems}`}></div>

        <InggredientsAndSteps />
        <SimilarSuggestions />
      </div>
    </>
  )
}

export default DetailS
