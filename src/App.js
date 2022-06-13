import React from "react"
import Home from "./components/Home/Home"
import Recipe from "./components/Recipe/Recipe"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
