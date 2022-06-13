import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { spanSystems } from "../Utils/ColumnSpan"

const SimilarSuggestions = () => {
  const similarRecipes = useSelector(
    (state) => state.recipeReducer.similarRecipes
  )
  return (
    <div className={`${spanSystems} col-start-1  bg-slate-900 p-10`}>
      <h2 className="text-amber-400 text-3xl uppercase mb-10">Try this too!</h2>
      <div className="flex items-center flex-col md:flex-row lg:flex-row xl:flex-row  gap-2 text-amber-400 justify-between">
        {similarRecipes.map((similarRecipe, id) => {
          return (
            <Link
              to={`/recipe/${similarRecipe.id}`}
              className="w-3/4 md:w-1/5 lg:w-1/5 xl:w-1/5 bg-slate-800"
              key={id}
            >
              <span className="overflow-hidden flex flex-col justify-center items-center">
                <img
                  className="w-[100%] h-auto aspect-[1/1]"
                  src={`https://spoonacular.com/recipeImages/${similarRecipe.id}-480x360.${similarRecipe.imageType}`}
                />
              </span>

              <h3 className="capitalize">{similarRecipe.title}</h3>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SimilarSuggestions
