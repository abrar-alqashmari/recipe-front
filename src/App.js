import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import SignUp from "./userAccount/SignUp";
import SignIn from "./userAccount/SignIn";



function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/signup' element={<SignUp />} />
				<Route exact path='/signin' element={<SignIn />} />
			</Routes>
			<Routes>	
				<Route exact path='/' element={<Home />} />
				<Route path='/category/:id' element={<Home />} />
				<Route path="*" element={<>Not found</>} />
			</Routes>
			<Footer />

		</>
	);
}

export default App;
