import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Recipe.css'
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}recipes`)
            .then((response) => {
                response.json().then((recipeData) => {
                    if (recipeData?.success) {
                        setRecipes(recipeData.data);
                    }
                });
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <div className="section recipe-items p-0" style={{ overflow: "visible", "backgroundColor": "#f9f9f9" }}>
            <div className="row align-items-stretch align-content-stretch g-0">
                <div className="col-lg-4 dark">
                    <div className="position-sticky min-vh-60 min-vh-md-100 d-flex flex-column align-items-center center justify-content-center" style={{ top: 0, background: "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), url('https://i.pinimg.com/736x/e1/25/4d/e1254dcb032c0a5cae84831bae96ef78.jpg') center center / cover" }}>
                         <h2 className="display-4 px-3 center fw-bold d-block">Latest<br />Recipes</h2>
                        <Link to="demos/recipes/recipes.html" className="button button-large button-light button-white button-circle m-0 px-5">View All</Link> 
                        
                        
                       
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row g-0">
                    {recipes.map((recipe, i) => {
                        return (
                            <div className="col-sm-4 col-6" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <img src={recipe.recipe_photo} alt={recipe?.name} />
                                        <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                                        </div>
                                        <h3 className="card-title"><Link to={`/recipes/${recipe.id}`} className="stretched-link">{recipe.name}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                     
                    </div>
                </div>
            </div>
         </div>
    )
}




export default Recipes;
