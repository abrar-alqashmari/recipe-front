import { useContext, useEffect } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import PageTitle from "../shared/PageTitle"
import AddRecipe from "./user/AddRecipe"
import EditRecipe from "./user/EditRecipe"
import UserRecipes from "./user/UserRecipes"

const Account = () => {

    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!authCtx.isAuthenticated) {
            navigate('/signin')
        }
    }, [])

    return (
        <>
            <PageTitle title={'My Account'} />
            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/myaccount/recipes">My Recipes</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/myaccount/favorites">My Favorits</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/signout">Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-9">
                            <Routes>
                                <Route path="recipes" element={<UserRecipes />} />
                                <Route path="recipes/add" element={<AddRecipe />} />
                                <Route path="recipes/:id" element={<EditRecipe />} />                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Account