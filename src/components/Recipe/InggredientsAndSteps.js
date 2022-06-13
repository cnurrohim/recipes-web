import React from "react"
import { useSelector } from "react-redux"
import { spanSystems } from "../Utils/ColumnSpan"

const InggredientsAndSteps = () => {
  const recipe = useSelector((state) => state.recipeReducer.recipe)
  const columnType = Math.floor(Math.random() * (2.5 - 1) + 1)
  const ingredientsSpan =
    columnType == 1
      ? "col-span-1 xl:col-span-5 lg:col-span-5 md:col-span-3 sm:col-span-4"
      : "col-span-1 xl:col-span-12 lg:col-span-12 md:col-span-8 sm:col-span-4 "
  const instructionsSpan =
    columnType != 1
      ? "col-span-1 sm:col-span-4 md:col-span-8 px-5 lg:col-span-12 px-5 sm:px-5 lg:px-10 xl:px-10 py-10"
      : "col-span-1 sm:col-span-4 px-5 lg:col-span-6 md:px-0 lg:px-0 xl:px-0 py-10"
  const instructionsSpanStart =
    columnType != 1
      ? "col-start-1"
      : "md:col-start-5 sm:col-start-1 lg:col-start-7 col-start-1"
  const ingredientWidth =
    columnType != 1
      ? "w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4"
      : "w-2/4 md:1/2 "

  return (
    <>
      <div
        className={`${ingredientsSpan}  bg-slate-900  py-10 px-5 lg:px-10 xl:py-10 mb-10`}
      >
        <h2 className="text-amber-400 text-3xl uppercase mb-10">ingredients</h2>
        <ul className=" flex flex-row flex-wrap">
          {recipe.extendedIngredients.map((ingredient, id) => {
            return (
              <li className="flex flex-row w-full" key={id}>
                <p
                  className={` text-slate-400 ${ingredientWidth}  capitalize`}
                  data-tooltip-target={`tooltip-${id}`}
                >
                  {ingredient.name}
                </p>
                <p className=" text-slate-300 w-2/4 md:1/2 ">
                  {ingredient.amount + " " + ingredient.unit}
                </p>

                <div
                  id={`tooltip-${id}`}
                  role="tooltip"
                  className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                >
                  {ingredient.original}
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className={`${instructionsSpan} ${instructionsSpanStart}  bg-slate-800 py-10 `}
      >
        <h2 className="text-amber-400 text-3xl uppercase mb-10">
          instructions
        </h2>
        {recipe.analyzedInstructions.map((subStep, id) => {
          return (
            <div className="flex flex-col gap-2 mb-5" key={id}>
              <h3 className="text-slate-300">
                STEP {id + 1} {subStep.name}
              </h3>
              {subStep.steps.map((step, idStep) => {
                return (
                  <div
                    className="flex flex-row gap-2 text-slate-300"
                    key={idStep}
                  >
                    <p>{step.number}.</p>
                    <p>{step.step}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default InggredientsAndSteps
