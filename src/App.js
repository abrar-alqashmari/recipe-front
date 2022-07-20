import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
// import Account from "./components/Account/Account";
import SignIn from "./components/Account/SignIn";
import {SignUp} from "./components/Account/SignUp"
import SignOut from "./components/Account/LogOut";
import AddRecipe from "./components/Account/user/AddRecipe";
import CatRecipe from "./components/recipes/CatRecipe";
import EditRecipe from "./components/Account/user/EditRecipe";
import UserRecipes from "./components/Account/user/UserRecipes";
import { AuthContext } from "..//src/contexts/AuthContext"
import { useContext } from "react"
import SingleRecipe from "./components/recipes/SingelRecipe"
import Account from "./components/Account/Account";
import AllRecipes from "./components/recipes/AllRecipes";

function App() {
	const appCtx = useContext(AuthContext)
	console.log(appCtx.isAuthenticated, "bybas")
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/category/:id' element={<CatRecipe />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signout" element={<SignOut />} />
				<Route path="/recipes/:id" element={<SingleRecipe />}  />
				<Route path="/AllRecipes" element={<AllRecipes/>} />

				<Route path="/myaccount" element={<Account />}>
				<Route path="/myaccount/recipes" element={<UserRecipes />} />
				<Route path="/myaccount/recipes/add" element={<AddRecipe />} />
				<Route path="/myaccount/recipes/:id" element={<EditRecipe />} />
				<Route path="/myaccount/favorites" element={<>Not made yet</>} />

			</Route>
				{/* <Route path='/user/recipe' element={<Recipes />} />
				<Route path='/user/recipe/:id' element={<CatRecipe />} />
				<Route path="/user/addrecipe" element={<AddRecipe />} />
				<Route  path="/user/Myrecipe" element={<MyRecipe />} />
				  <Route path="/user/editrecipe/:id" element={<EditRecipe/>} />
				  <Route path="/user/UserRecipes" element={<UserRecipes/>} />
				  <Route path="/user" element={<User />} /> 
				  <Route path="/recipes/:id" element={<SingleRecipe />}  />

{/* 				 
				<Route exact path="/" element={<Account />}>
				<Route path="/Account/edit/:id" element={<EditRecipe/>} /> */}

				


			 {/* </Route>  */}
			</Routes>

			<Footer />

		</>
	);
}

export default App;
