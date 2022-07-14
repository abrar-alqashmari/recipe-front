import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRequest } from "../../../hooks/useRequest"
import './AddRecipe.css'
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import Ingradients from "./Ingradients"
const AddRecipe = () => {
    const navigate = useNavigate()
    const descriptionRef = useRef()
    const videoRef = useRef()
    const photoRef = useRef()
    const backgroundRef = useRef()
    const nameRef = useRef()
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const handleCategoryToggle = (e) => {
        const categoriesClone = [...selectedCategories]
        if (e.target.checked) {
            categoriesClone.push(e.target.value)
        } else {
            categoriesClone.splice(categoriesClone.indexOf(e.target.value), 1)
        }
        setSelectedCategories(categoriesClone)
    }
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}categories`)
            .then((response) => {
                setCategories(response?.data)
            })
    }, [])
    const sendRequest = useRequest()
    const ctx = useContext(AuthContext)
    const addrecipe = () => {
        const formdata = new FormData();
        formdata.append('name', nameRef.current.value)
        formdata.append('youtube_video', videoRef.current.value)
        formdata.append('description', descriptionRef.current.value)
        for (var i = 0; i < selectedCategories.length; i++) {
            formdata.append('categories[]', selectedCategories)
        }
        formdata.append('recipe_photo', photoRef.current.files[0])
        formdata.append('background_photo', backgroundRef.current.files[0])
        sendRequest(`${process.env.REACT_APP_API_URL}recipes/addrecipe`, {}, formdata, {
            auth: true
        }, 'POST').then((response) => {
            console.log(response)
        })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2>Add New Recipe</h2>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Recipe Name</label>
                        <input type={'text'} ref={nameRef} className='form-control' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Recipe Details</label>
                        <textarea ref={descriptionRef} className='form-control' cols="7"></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Recipe Video</label>
                        <input type={'url'} ref={videoRef} className='form-control' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Recipe Photo</label>
                        <input type={'file'} ref={photoRef} className='form-control' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Recipe Background</label>
                        <input type={'file'} ref={backgroundRef} className='form-control' cols="7" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Recipe Categoreis</label>
                        <div className="row">
                        {categories?.map((category, i) => {
                            return (
                                <div className="col-4" key={i}>
                                    <input  onChange={handleCategoryToggle} type={'checkbox'} value={category?.id} id={`category-${category.id}`} />
                                    &nbsp;<label htmlFor={`category-${category.id}`}>{category.name}</label>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Recipe Ingradients</label>
                        <Ingradients />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col d-flex justify-content-center">
                    <button onClick={addrecipe} type="button" className="button button-large m-0 fw-bold button-circle button-light">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddRecipe