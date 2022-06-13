import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faBellConcierge,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchAll, fetchMore } from "../../store/recipe"
import { createColumnSpanSequences, spanSystems } from "../Utils/ColumnSpan"
import Skeleton from "../Skeletons/ListRecipesSkeleton"

const ListRecipes = () => {
  const recipes = useSelector((state) => state.recipeReducer.recipes)

  const isSearching = useSelector((state) => state.recipeReducer.isSearching)
  const dispatch = useDispatch()
  const isLoadMoreHidden = isSearching ? "hidden" : ""

  useEffect(() => {
    if (!isSearching) dispatch(fetchAll())
  }, [dispatch])

  const columnSpan = createColumnSpanSequences(recipes.length)
  const isRecipesRecordExists = Object.keys(recipes).length > 0

  if (!isRecipesRecordExists) return <Skeleton />

  return (
    <>
      {recipes.map((recipe, i) => {
        return (
          <Link
            key={recipe.id}
            to={`/Recipe/${recipe.id}`}
            className={`${columnSpan[i]}  min-h-[400px] text-white bg-cover bg-no-repeat bg-center relative rounded-3xl`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%), url(${recipe.image})`,
            }}
          >
            <div className="flex flex-col absolute bottom-5 lg:bottom-0 xl:bottom-0 w-full px-10 md:px-3 lg:px-3 xl:px-3 ">
              <h1 className="text-lg md:text-sm lg:text-xl font-regular mb-2">
                <span>{recipe.title}</span>
              </h1>

              <div className="flex flex-row mb-1 sm:mb-5 lg:mb-5 justify-between ">
                <span className="text-md md:text-dm lg:text-lg flex flex-row items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  <small>
                    {recipe.readyInMinutes}{" "}
                    <span className="hidden lg:inline-block xl:inline-block">
                      mins
                    </span>
                  </small>
                </span>
                <span className="text-md md:text-md lg:text-lg flex flex-row items-center">
                  <FontAwesomeIcon icon={faBellConcierge} className="mr-1" />
                  <small>
                    {recipe.servings}{" "}
                    <span className="hidden lg:inline-block xl:inline-block">
                      servings
                    </span>
                  </small>
                </span>
                <span className="text-md md:text-md lg:text-lg flex flex-row  items-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-500 mr-1"
                  />
                  <small>
                    {recipe.aggregateLikes}{" "}
                    <span className="hidden lg:inline-block xl:inline-block">
                      likes
                    </span>
                  </small>
                </span>
              </div>
            </div>
          </Link>
        )
      })}

      {isRecipesRecordExists && (
        <div className={`${spanSystems} flex flex-col items-center mb-20`}>
          <button
            className={`bg-amber-500 px-[32px] py-2 ${isLoadMoreHidden}`}
            onClick={() => dispatch(fetchMore())}
          >
            Load More
          </button>
        </div>
      )}
    </>
  )
}

export default ListRecipes
