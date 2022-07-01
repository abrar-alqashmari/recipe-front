import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}categories`)
      .then((response) => {
        response.json().then((serverData) => {
          if (serverData?.success) {
            setCategories(serverData.data);
          }
        });
      })
      .catch((e) => console.log(e));
  }, []);
  console.log("hello1");
  return (
    <div className="col-12 mt-5 mb-3">
      <h3 className="center">Browse by Category</h3>
      
      <div className="recipe-categories justify-content-center">
        {categories.map((category, i) => {
          return (
            <div className={`category`} key={i}>
              <Link
                to={`/category/${category.id}`}
                data-animate="fadeInUp"
                data-delay={i * 1000}
                className="recipe-category"
              >
              <div className="col-12 mt-5 mb-3"></div>
                <div className="recipe-category-inner">
                <div className={`categoryName`}>
                <h5>{category.name}</h5>
                </div>
                  <div className={`categoryIcon`}>
                    <img src={category?.icon} alt={category.name} />
                  </div>
                  <div className={`categoryPhoto`}>
                    <img src={category?.photo} alt={category.name} />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
