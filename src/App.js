import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import MyList from "./components/mylist/MyList";
import SignUp from "./components/userAccount/SignUp";
import SignIn from "./components/userAccount/SignIn";
import { useContext } from 'react';
import { AppContext } from './contexts/AppContext';




function App() {
	
	const appCtx = useContext(AppContext);
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
				<Route exact path='/aboutUs' element={<AboutUs />} />
				<Route exact path='/mylist' element={<MyList />} />
			</Routes>
			
			<Footer />
		</>
	);
}

export default App;
