
import React from 'react'
import { ArrowLeft, Play } from 'lucide-react'

const RecipeDetails = ({ meal, onBack }) => {

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const i = index + 1

    return {
      name: meal[`strIngredient${i}`],
      measure: meal[`strMeasure${i}`]
    }
  }).filter(item => item.name?.trim())

  return (
    <div className="recipe_details">

      <button className="back_btn" onClick={onBack}>
        <ArrowLeft size={18} />
        Back to Recipes
      </button>

      <div className="details_header">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="details_info">
          <h1>{meal.strMeal}</h1>

          <p>Category: {meal.strCategory}</p>
          <p>Cuisine: {meal.strArea}</p>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="youtube_btn"
            >
              <Play size={18} />
              Watch Recipe
            </a>
          )}
        </div>
      </div>

      <div className="ingredients_section">
        <h2>Ingredients</h2>

        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.measure}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="instructions_section">
        <h2>Cooking Instructions</h2>

        <p>{meal.strInstructions}</p>
      </div>

    </div>
  )
}

export default RecipeDetails
