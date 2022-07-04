import { Routes, Route } from "react-router-dom";
import Recipes from "./Recipes";
import AddRecipe from "./newRecipe";
// import EditPost from "./EditPost";
// import Settings from "./Settings";
// import UserSidebar from "./UserSidebar";
const User = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <UserSidebar /> */}
          <div className="col-lg-9">
            <Routes>
              <Route exact path="/" element={<Recipes />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
              {/* <Route path="/edit/:id" element={<EditPost />} /> */}
               {/* <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;