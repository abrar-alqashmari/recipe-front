import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
// import Account from "./components/Account/Account";
import  SignIn from "./components/Account/SignIn";
import  SignUp from "./components/Account/SignUp"
import SignOut from "./components/Account/LogOut";
import AddRecipe from "./components/Account/user/AddRecipe";
import Recipes from "./components/Account/user/Recipes";
// import EditRecipe from "./components/Account/user/EditRecipe";
import User from "./components/Account/user/user";

function App() {
	return (
		<>
			<Header />
			<Routes>

				<Route exact path='/' element={<Home />} />
				<Route path='/category/:id' element={<Home />} />
				 <Route path="/signin" element={<SignIn />} /> 
				<Route path="/signup" element={<SignUp />} />
				 <Route path="/signout" element={<SignOut />} />
				 <Route path='/user/recipe' element={<Recipes />} />
				<Route path="/user/add-recipe" element={<AddRecipe />} />

				  <Route path="/user" element={<User />} /> 
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
