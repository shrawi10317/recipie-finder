 export const getRecipie =async (search)=>{
    const RECIPIE_URL = 'https://www.themealdb.com/api/json/v1/1'

    const response = await fetch(`${RECIPIE_URL}/search.php?s=${search}`)
    if(!response.ok){

        throw new Error("Failed to fetch the repcipies")
    }
    // console.log(re)

    return await response.json()
    
}


export const getRecipeDetails = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch recipe details')
  }

  const data = await response.json()

  return data.meals ? data.meals[0] : null
}
