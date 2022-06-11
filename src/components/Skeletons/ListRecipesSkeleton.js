import React from "react"
import { createColumnSpanSequences } from "../Utils/ColumnSpan"

const ListRecipesSkeleton = () => {
  const columnSpan = createColumnSpanSequences(0)

  return [...Array(10)].map((n, i) => {
    return (
      <div
        key={i}
        className={`${columnSpan[i]}  animate-pulse min-h-[400px] bg-slate-700 bg-cover bg-no-repeat bg-center relative rounded-3xl`}
      >
        <div className="flex flex-col absolute bottom-2 w-full px-3">
          <h1 className="bg-slate-600 p-2 mb-2 rounded-md animate-pulse">
            <span>&nbsp;</span>
          </h1>
          <div className="flex flex-row mb-1 sm:mb-5 lg:mb-5 gap-2 justify-between">
            <span className="bg-slate-600 w-20 flex flex-row items-center p-3 rounded-md animate-pulse"></span>
            <span className="bg-slate-600 w-20 flex flex-row items-center p-3 rounded-md animate-pulse"></span>
            <span className="bg-slate-600 w-20 flex flex-row items-center p-3 rounded-md animate-pulse"></span>
          </div>
        </div>
      </div>
    )
  })
}

export default ListRecipesSkeleton
