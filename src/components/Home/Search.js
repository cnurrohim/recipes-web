import React, { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import {
  resetSearchSuggestion,
  getSearchSuggestion,
  getSearchResult,
} from "../../store/recipe"
import { spanSystems } from "../Utils/ColumnSpan"

const Search = () => {
  const searchSuggestion = useSelector(
    (state) => state.recipeReducer.searchSuggestion
  )

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState("")
  const inputRef = useRef(null)
  const formRef = useRef(null)

  const handleChange = (e) => {
    if (e.target.value.length) {
      dispatch(getSearchSuggestion(e.target.value))
    }
    if (e.target.value.length == 0) {
      dispatch(resetSearchSuggestion())
    }
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearchResult(searchQuery))
    dispatch(resetSearchSuggestion())
  }

  const handleClick = (e) => {
    setSearchQuery(e.target.innerText)
    dispatch(getSearchResult(searchQuery))
    dispatch(resetSearchSuggestion())
    inputRef.current.focus()
  }

  const handleClickOutsideSearchBar = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      dispatch(resetSearchSuggestion())
    }
    return false
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSearchBar)

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearchBar)
    }
  }, [searchQuery, inputRef])

  return (
    <div className={`${spanSystems} text-slate-400 relative`}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          id="searchInput"
          type="text"
          className="w-full h-8 p-3 pl-16 placeholder:text-slate-300 text-slate-200 border-0 focus:border-0 outline-0 focus:outline-0 bg-slate-700"
          placeholder="Search recipes"
          onChange={handleChange}
          value={searchQuery}
          ref={inputRef}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute inset-y-2 left-5 text-slate-400"
        />
        <div
          className={`w-full bg-slate-800 text-slate-200 absolute top-[100%] left-0 z-10`}
        >
          {searchSuggestion.map((suggestion, i) => {
            return (
              <p
                key={i}
                className="p-3 pl-16 hover:text-slate-800 hover:bg-amber-500"
                onClick={handleClick}
              >
                {suggestion.title}
              </p>
            )
          })}
        </div>
      </form>
    </div>
  )
}

export default Search
