// import { Routes, Route } from "react-router-dom";
 import Recipes from "./UserRecipes";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditRecipe";

const User = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <UserSidebar /> */}
          <div className="col-lg-9">
             
          <AddRecipe/>
           <Recipes />
           <EditRecipe/>

          </div>
        </div>
      </div>
    </>
  );
};

export default User;