import React from 'react'
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";

const Recipes = () => {
    const [allRecipes, setallRecipes] = useState([]);
    useEffect(() => {
        const fetchData = async (err) => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}recipes`)
            const resJson = await response.json()
            setallRecipes(resJson.data)
            if (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="section-recipe-items">
                <div className="row align-items-stretch align-content-stretch g-0">
                    <div className="col-lg-4 light">
                        <div className="recipe min-vh-60 min-vh-md-100 d-flex flex-column justify-content-center top:0 center center / cover;">
                            <h2 className="display-5 px-3 center fw-bold d-block">Latest Recipes</h2>
                            <Link to="demos/recipes/recipes.html" className="button button-large button-light button-white button-circle m-0 px-5">View All</Link>
                        </div>
                    </div>
                </div>
                {allRecipes && allRecipes.map((data, i) => {
                    return (
                        <div className="col-lg-8">
                            <div className="row g-0">
                                <div className="col-sm-4 col-6">
                                    <div className="recipe-photo">
                                        <img src={data.photo} alt="" />
                                    </div>
                                    <div className="recipe-bg-photo">
                                        <img src={data.background} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    )

                })
                }
           
           </div>
        </>
        )
}
export default Recipes;
