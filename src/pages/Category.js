import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import { Preloader } from '../components/Preloader'
import { MealList } from '../components/MealList'

function Category() {
  const [meals, setMeals] = useState([])
  const { name } = useParams()

  useEffect(() => {
    getFilteredCategory(name)
      .then(data => setMeals(data.meals))
  }, [name])

  const { goBack } = useHistory()

  return (
    <>
      <button className="btn" onClick={goBack}>Go Back</button>
      {
        !meals.length ? <Preloader/> : <MealList meals={meals}/>
      }
    </>
  )
}

export {
  Category
}