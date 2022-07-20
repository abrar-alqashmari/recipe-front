import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Recipe.css";
import PageTitle from "../shared/PageTitle";
const AllRecipes = () => {
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
  console.log(recipes);
  return (
    <>
       <PageTitle title={'All Recipes'} />
    
    <div
    
      className="section recipe-items p-0 m-1v"
      style={{ overflow: "visible", background: "#f9f9f9" }}
    >
      <div className="row align-items-stretch align-content-stretch g-0">
        <div className="col-lg-4 dark">
          <div
            className="position-sticky min-vh-60 min-vh-md-100 d-flex flex-column align-items-center center justify-content-center"
            style={{
              top: 0,
              background:
                "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), url('https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80') center center / cover",
            }}
          >
            
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row g-2">
            {recipes.map((recipe, i) => {
              return (
                <div className="col-sm-4 col-6" key={i}>
                  <div className="homepage-card">
                
                      <img src={recipe?.recipe_photo} alt={recipe?.name} />
                      <div className="d-flex justify-content-between align-items-center mt-4 mb-2"></div>
                      <h3 className="card-title">
                        <Link
                          to={`/recipes/${recipe.id}`}
                          className="stretched-link "  >
                          {recipe.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
     </div>
    </div>
    </>
  );
};

export default AllRecipes;
