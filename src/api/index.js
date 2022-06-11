import axios from "axios"

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
})

/*
  number 	number 	1 	The number of random recipes to be returned (between 1 and 100).
 */
export const getRandomRecipes = (number) =>
  API.get(`/recipes/random?number=${number}`)

/*
  id 	number 	716429 	The id of the recipe.
  includeNutrition 	boolean 	false 	Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.
  https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
*/
export const getRecipe = (id) => API.get(`/recipes/${id}/information`)

/*
  id 	number 	715538 	The id of the source recipe for which similar recipes should be found.
  number 	number 	1 	The number of random recipes to be returned (between 1 and 100).
  limitLicense 	boolean 	true 	Whether the recipes should have an open license that allows display with proper attribution.
  https://api.spoonacular.com/recipes/715538/similar
*/
export const getSimilarRecipes = (id, number) =>
  API.get(`/recipes/${id}/similar?number=${number}`)

/*
  query 	string 	burger 	The query to be autocompleted.
  number 	number 	10 	The number of results to return (between 1 and 25).
  https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick
*/
export const getSearchSuggestion = (query) =>
  API.get(
    `https://api.spoonacular.com/recipes/autocomplete?number=10&query=${query}`
  )

/*
  query 	string 	pasta 	The (natural language) recipe search query.
  tags 	string 	myCustomTag 	User defined tags that have to match. The author param has to be set.
  offset 	number 	0 	The number of results to skip (between 0 and 900).
  number 	number 	10 	The number of expected results (between 1 and 100).
  addRecipeInformation 	boolean 	false 	If set to true, you get more information about the recipes returned.
  https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
*/
export const getSearchResult = (query) =>
  API.get(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=20&addRecipeInformation=true`
  )
