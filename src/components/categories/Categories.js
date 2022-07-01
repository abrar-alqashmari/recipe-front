import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchData = async (err) => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}categories`)
      const resJson = await response.json()
      setAllCategories(resJson.data)
      if (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])


  return (
    <>
      { allCategories && allCategories.map((data, i) => {
       return (
        
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
                    <img src={data.icon} alt="Breakfast" />
                  </div>
                  <div className="recipe-category-info">Breakfast</div>
                </div>
              </Link>
            </div>
          </div>
       );
       })};
    </> 
  )
}
 export default Categories;