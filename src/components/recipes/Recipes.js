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
        <div className="section recipe-items p-0 overflow:visible;background-color: #f9f9f9">
            <div className="row align-items-stretch align-content-stretch g-0">
                {/* <div className="recipe min-vh-60 min-vh-md-100 d-flex flex-column justify-content-center top:0 center center / cover"> */}
                <div className="col-lg-4 light">
                    <div class="position-sticky min-vh-60 min-vh-md-100 d-flex flex-column align-items-center center justify-content-center top:0; background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), center center / cover;">
                        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80" alt="" />
                        <h2 className="display-5 px-3 center fw-bold d-block">Latest Recipes</h2>
                        <Link to='/' className="button button-large button-light button-white button-circle m-0 px-5">View All</Link>
                    </div>
                    {/* </div> */}
                </div>
                <div className="col-lg-8">
                    <div className="row g-0">
                        <div className="col-sm-4 col-6">
                            {recipes.map((recipe, i) => {
                                return (
                                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                                    <div className={`recipe`} key={i} >
                                        <Link to={`/recipe/${recipe.id}`} ></Link>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className={`recipe-info`}>
                                                    <h4>{recipe.name}</h4>
                                                    <h5>{recipe.description}</h5>
                                                    <h5>{recipe.category}</h5>
                                                    <h5>{recipe.youtube_video}</h5>
                                                <div className="recipe-photo">
                                                    <img src={recipe.recipe_photo} alt="" />
                                                </div>
                                            </div>
                                            <div className="recipe-bg-photo">
                                                <img src={recipe.background_photo} alt="" />
                                                </div>
                                                    {/* <p class="card-author">By <a href="#">Gunther Beard</a></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}




export default Recipes;
