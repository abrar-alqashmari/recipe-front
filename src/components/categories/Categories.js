import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

export default function categories() {
  return (
    
    <div className="col-12 mt-5 mb-3">
<h3 className="center">Browse by Category</h3>
<div className="recipe-categories justify-content-center">
<Link to="demos/recipes/recipes.html" data-animate="fadeInUp" className="recipe-category">
<div className="recipe-category-inner">
<div className="recipe-category-icon"><img src="" alt="Breakfast" /></div>
<div className="recipe-category-info">Breakfast</div>
</div>
</Link>
<Link to="demos/recipes/recipes.html" data-animate="fadeInUp" data-delay="100" className="recipe-category" >
<div className="recipe-category-inner">
<div className="recipe-category-icon"><img src="demos/recipes/images/icons/lunch.svg" alt="Lunch" /></div>
<div className="recipe-category-info">Lunch</div>
</div>
</Link>
<Link to="demos/recipes/recipes.html" data-animate="fadeInUp" data-delay="200" className="recipe-category" >
<div className="recipe-category-inner">
<div className="recipe-category-icon"><img src="demos/recipes/images/icons/dinner.svg" alt="Dinner" /></div>
<div className="recipe-category-info">Dinner</div>
</div>
</Link>
<Link to="demos/recipes/recipes.html" data-animate="fadeInUp" data-delay="300" className="recipe-category" >
<div className="recipe-category-inner">
<div className="recipe-category-icon"><img src="demos/recipes/images/icons/desserts.svg" alt="Desserts" /></div>
<div className="recipe-category-info">Desserts</div>
</div>
</Link>
<Link to="demos/recipes/recipes.html" data-animate="fadeInUp" data-delay="400" className="recipe-category" >
<div className="recipe-category-inner">
<div className="recipe-category-icon"><img src="demos/recipes/images/icons/vegan.svg" alt="Vegan" /></div>
<div className="recipe-category-info">Vegan</div>
</div>
</Link>
<Link to="demos/recipes/recipes.html" data-animate="fadeInUp" data-delay="500" className="recipe-category" >
<div className="recipe-category-inner">
<div className="recipe-category-icon"><img src="demos/recipes/images/icons/seafood.svg" alt="Seafood" /></div>
<div className="recipe-category-info">Seafood</div>
</div>
</Link>
<Link to="demos/recipes/recipes.html" data-animate="fadeInUp" data-delay="600" className="recipe-category" >
<div className="recipe-category-inner">
<div className="recipe-category-icon"><img src="demos/recipes/images/icons/drinks.svg" alt="Beverages" /></div>
<div className="recipe-category-info">Beverages</div>
</div>
</Link>
</div>
</div>

  )
}