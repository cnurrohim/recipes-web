import React from "react"
import Home from "./components/Home/Home"
import Recipe from "./components/Recipe/Recipe"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
