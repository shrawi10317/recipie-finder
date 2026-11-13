
import React, { useState } from 'react'

import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import RecipeDetails from './pages/RecipeDetails'

import {
  getRecipie,
  getRecipeDetails
} from './services/recipeApi'

const App = () => {

  const [recipies, setRecipies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [detailsLoading, setDetailsLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)
    setError('')
    setRecipies([])
    setSelectedRecipe(null)
    setSearched(true)

    try {
      const data = await getRecipie(query)
      setRecipies(data.meals || [])
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleRecipeClick = async (id) => {
    setDetailsLoading(true)
    setError('')
    setSelectedRecipe(null)

    try {
      const data = await getRecipeDetails(id)

      if (!data) {
        throw new Error('Recipe not found')
      }

      setSelectedRecipe(data)
    } catch (err) {
      setError('Unable to load recipe details.')
    } finally {
      setDetailsLoading(false)
    }
  }

  return (
    <div className="container">

      <Navbar />

      {!selectedRecipe && (
        <SearchBar id="search" onSearch={handleSearch}  />
      )}

      {detailsLoading && (
        <p className="message">Loading recipe details...</p>
      )}

      {error && (
        <p className="error">{error}</p>
      )}

      {selectedRecipe && (
        <RecipeDetails
          meal={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      )}

      {!selectedRecipe && !detailsLoading && !error && (
        <>
          {loading && (
            <p className="message">Loading recipes...</p>
          )}

          {!loading && !searched && (
            <p className="message">
              Search for your favourite recipes!
            </p>
          )}

          {!loading && searched && recipies.length === 0 && (
            <p className="message">
              No recipes found. Try another search!
            </p>
          )}

          <div id='recipes' className="recipie_list" >
            {recipies.map((recipie) => (
              <div
                key={recipie.idMeal}
                className="recipie_card"
                onClick={() => handleRecipeClick(recipie.idMeal)}
              >
                <img
                  src={recipie.strMealThumb}
                  alt={recipie.strMeal}
                />

                <h3>{recipie.strMeal}</h3>

                <button className="view_btn">
                  View Recipe
                </button>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  )
}

export default App
