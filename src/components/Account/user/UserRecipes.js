import React, { useEffect, useState } from "react"
import { useRequest } from "../../../hooks/useRequest"
import { Link } from "react-router-dom"
const UserRecipes = () => {
    const sendRequest = useRequest()
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}users/getUserRecipes`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setRecipes(response.data)
            }
        })
    }, [])

    const deletRecipe = (id) => {
        if (window.confirm('Do you want to delete this post')) {
            sendRequest(`${process.env.REACT_APP_API_URL}/recipes/${id}`, {}, {}, {
                auth: true,
            }, 'DELETE').then((response) => {
                console.log(response)
                if (response?.success) {
                    const currentRecipes = [...recipes]
                    const filteredRecipes = currentRecipes.filter((recipe) => recipe.id != id)
                    setRecipes(filteredRecipes)
                }
            })
        }
    }

    return (
        <div className="container-fluid">
            <div className="row mb-5">
                <div className="col">
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="m-0">My Recipes</h2>
                        <Link to="/myaccount/recipes/add" className="btn btn-primary">Add New Recipe</Link>
                        <Link to="/myaccount/recipes/:id" className="btn btn-primary">Edit Recipe</Link>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <div className="d-flex align-items-center justify-content-between">
                        {/* <Link to="/myaccount/recipes/:id" className="btn btn-primary">Edit Recipe</Link> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="w-100 table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>description</th>
                                {/* <th>Date</th>
                    <th>Options</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{recipe?.name}</td>
                                        <td>{recipe?.Category?.map((c, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    <span key={i}>{c.title}</span>
                                                    {(i < recipe.Category.length - 1) && <>, </>}
                                                </React.Fragment>
                                            )
                                        })}</td>
                                        <td>{recipe?.verified ? 'Yes' : 'No'}</td>
                                        <td>{recipes?.createdAt}</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>
                                            <button onClick={() => { deletRecipe(recipe.id) }} className="btn btn-primary" >Delete</button>
                                            <Link to={`/account/edit/${recipe.id}`}>
                                                <button className="btn btn-primary" style={{ marginLeft: "2px" }}>Edit</button >
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserRecipes