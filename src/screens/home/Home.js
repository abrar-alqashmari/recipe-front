import Banner from "./banner/Banner"
import Main from "./main/Main"
import Categories from "../../components/categories/Categories"
import Recipes from "../../components/recipes/Recipes"
const Home = () => {
    return (
        <>
            <Banner />
            <Main />
            <Categories/>		
            <Recipes/>		

        </>
    )
}

export default Home