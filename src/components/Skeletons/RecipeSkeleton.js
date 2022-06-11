import React from "react"
import { gridSystems, spanSystems } from "../Utils/ColumnSpan"

const RecipeSkeleton = () => {
  return (
    <div
      className={`grid ${gridSystems} gap-y-0 xl:gap-x-6 lg:gap-x-6 md:gap-x-3 sm:gap-x-1 gap-x-1 pl-20 pr-20 bg-slate-800`}
    >
      <div
        className={`col-span-1 lg:col-span-5 xl:col-span-5 md:col-span-3 sm:col-span-4 col-start-1`}
      >
        <div className="animate-pulse rounded-md  bg-slate-500 h-80 overflow-hidden flex flex-col justify-center items-center"></div>
        <div className={`h-28  flex flex-row`}>
          {[...Array(3)].map((a, i) => {
            const bg = ["bg-slate-600", "bg-slate-700", "bg-slate-800"]
            return (
              <div
                key={i}
                className={`w-1/3 h-[100%] text-center flex justify-center items-center ${bg[i]} animate-pulse rounded-md flex-col items-center p-4`}
              >
                <span className="animate-pulse rounded-md w-full h-10 bg-slate-500 mb-2"></span>
                <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
              </div>
            )
          })}
        </div>
      </div>

      <div
        className={`bg-slate-800 col-start-1 lg:col-start-7 xl:col-start-7 md:col-start-5 sm:col-start-1 col-span-1 lg:col-span-5 xl:col-span-5 md:col-span-4 sm:col-span-4 row-span-3 pt-16 pb-10 px-10 flex flex-col justify-center `}
      >
        <span className="animate-pulse rounded-md w-full h-16 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-2/3 h-16 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-1/3 h-8 bg-slate-500 mb-10"></span>
        <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-full h-6 bg-slate-500 mb-2"></span>
        <span className="animate-pulse rounded-md w-3/4 h-6 bg-slate-500 mb-2"></span>
      </div>

      <div className={`bg-slate-800 ${spanSystems}`}></div>
      <div className={`bg-slate-800 ${spanSystems}`}></div>

      <div
        className={`${spanSystems} col-start-1 w-full bg-slate-900  py-10 px-10 mb-10 flex flex-col`}
      >
        <span className="animate-pulse rounded-md w-56 h-12 bg-slate-500 mb-5"></span>
        <ul className=" flex flex-row flex-wrap">
          {[...Array(10)].map((_, id) => {
            return (
              <li className="flex flex-row w-full" key={id}>
                <p className=" bg-slate-500 w-1/4 h-4 animate-pulse rounded-md mb-2 mr-5"></p>
                <p className=" bg-slate-600 w-24 h-4 animate-pulse rounded-md mb-2"></p>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className={`${spanSystems} w-full bg-slate-800 py-10 px-10 flex flex-col`}
      >
        <span className="animate-pulse rounded-md w-60 h-12 bg-slate-500 mb-5"></span>
        {[...Array(2)].map((a, id) => {
          return (
            <div className="flex flex-col gap-2 mb-5" key={id}>
              <span className="bg-slate-500 h-8 w-24 animate-pulse rounded-md"></span>
              {[...Array(5)].map((b, i) => {
                return (
                  <span
                    className="flex flex-row gap-2 bg-slate-500 h-5 animate-pulse rounded-md"
                    key={i}
                  ></span>
                )
              })}
              <span className="flex flex-row gap-2 bg-slate-500 h-5 animate-pulse rounded-md w-1/4"></span>
            </div>
          )
        })}
      </div>

      <div className={`${spanSystems} col-start-1  bg-slate-900 p-10`}>
        <div className="flex flex-col lg:flex-row sm:flex-row md:flex-row xl:flex-row gap-2 justify-between">
          {[...Array(3)].map((_, id) => {
            return (
              <span
                className="w-full lg:w-1/5 md:w-2/4 bg-slate-600 animate-pulse rounded-md"
                key={id}
              >
                <span className="overflow-hidden flex flex-col justify-center items-center">
                  <span className="w-[100%] h-auto aspect-[1/1]"></span>
                </span>

                <span className="flex flex-row gap-2 bg-slate-500 h-5 animate-pulse rounded-md w-full"></span>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RecipeSkeleton
