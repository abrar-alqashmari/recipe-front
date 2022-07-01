import React from 'react'
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";
import './Recipe.css'
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
            <div className="section recipe-items p-0 overflow:visible;background-color: #f9f9f9">
                <div className="row align-items-stretch align-content-stretch g-0">
                        <div className="recipe min-vh-60 min-vh-md-100 d-flex flex-column justify-content-center top:0 center center / cover">
                    <div className="col-lg-4 light">
                            <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80" alt=""/>
                            <h2 className="display-5 px-3 center fw-bold d-block">Latest Recipes</h2>
                            <Link to="demos/recipes/recipes.html" className="button button-large button-light button-white button-circle m-0 px-5">View All</Link>
                        </div>
                    </div>
                </div>
                {allRecipes && allRecipes.map((data, i) => {
                    return ( 
                        <div className={`recipe`} key={i} >
                        <div className="col-lg-8">
                            <div className="row g-0">
                                <div className="col-sm-4 col-6">
                                    <div className="recipe-photo">
                                        <img src={data.photo} width= "60" height="60" alt="" />
                                    </div>
                                    </div>
                                    <div className="recipe-bg-photo">
                                        <img src={data.background} width= "60" height="60" alt="" />
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
