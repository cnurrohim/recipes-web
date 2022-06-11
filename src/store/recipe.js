import { createSlice } from "@reduxjs/toolkit"
import * as api from "../api"
//import data from "./MockUpData/recipes.json"
import recipe from "./MockUpData/recipe.json"
//import similar from "./MockUpData/similar.json"

const initialState = {
  recipes: [],
  recipe: {},
  error: null,
  loading: true,
  similarRecipes: [],
  searchSuggestion: [],
  isSearching: false,
}

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload
    },
    setMoreRecipes: (state, action) => {
      state.recipes = [...state.recipes, ...action.payload]
    },
    setRecipe: (state, action) => {
      state.recipe = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setSimilarRecipes: (state, action) => {
      state.similarRecipes = action.payload
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload
    },
    setSearchResult: (state, action) => {
      state.recipes = action.payload
      state.isSearching = true
    },
    unSetSearchSuggestion: (state, action) => {
      state.searchSuggestion = initialState.searchSuggestion
    },
    notSearching: (state, action) => {
      state.isSearching = false
    },
  },
})

export default recipeSlice.reducer

//ACTION
const {
  setRecipes,
  setMoreRecipes,
  setRecipe,
  setError,
  setSimilarRecipes,
  setSearchSuggestion,
  setSearchResult,
  unSetSearchSuggestion,
  notSearching,
} = recipeSlice.actions

export const resetSearchSuggestion = () => async (dispatch) => {
  try {
    dispatch(unSetSearchSuggestion())
    dispatch(notSearching())
  } catch (error) {
    console.error(error.message)
  }
}

export const getSimilarRecipes = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSimilarRecipes(id, 4)

    dispatch(setSimilarRecipes(data))
  } catch (error) {
    console.error(error.message)
  }
}
export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await api.getRandomRecipes(20)

    dispatch(setRecipes(data.recipes))
  } catch (error) {
    dispatch(setError(error.message))
  }
}

export const fetchMore = () => async (dispatch) => {
  try {
    const { data } = await api.getRandomRecipes(10)

    dispatch(setMoreRecipes(data.recipes))
  } catch (error) {
    dispatch(setError(error.message))
  }
}

export const getRecipeDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.getRecipe(id)

    dispatch(setRecipe(data))
  } catch (error) {
    dispatch(setError(error.message))
  }
}

export const getSearchSuggestion = (query) => async (dispatch) => {
  try {
    const { data } = await api.getSearchSuggestion(query)

    dispatch(setSearchSuggestion(data))
  } catch (error) {
    dispatch(setError(error.message))
  }
}

export const getSearchResult = (query) => async (dispatch) => {
  try {
    const { data } = await api.getSearchResult(query)

    dispatch(setSearchResult(data.results))
  } catch (error) {
    dispatch(setError(error.message))
  }
}
