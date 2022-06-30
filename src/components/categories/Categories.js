import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export default function Categories() {
  const [categories,setCategories]=useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}categories`)
            .then(response => {
                response.json().then(categories => {
                    if (categories?.success) {
                        setCategories(categories.data)
                    }
                })
            })
            .catch(e => console.log(e))
    }, [])
  
  return (
    <>
    {categories && categories.map((category, i) => {
      return (
        <>
        <div className="col-12 mt-5 mb-3">
      <h3 className="center">Browse by Category</h3>
      <div className="recipe-categories justify-content-center">
      
        <Link
          to="demos/recipes/recipes.html"
          data-animate="fadeInUp"
          data-delay="100"
          className="recipe-category"
        >
          <div className="recipe-category-inner">
            <div className="recipe-category-icon">
              <img src="" alt="Breakfast" />
            </div>
            <div className="recipe-category-info">Breakfast</div>
          </div>
        </Link>
      </div>
    </div>
        </>

    </>
  );