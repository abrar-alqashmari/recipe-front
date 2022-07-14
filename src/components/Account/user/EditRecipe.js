import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRequest } from "../../../hooks/useRequest";
import './AddRecipe.css'
import Ingradients from "./Ingradients"

const EditRecipe = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const sendRequest = useRequest()
	const [recipe, setRecipe] = useState({
		name: '',
		youtube_video: '',
		description: '',
		recipe_photo: '',
		background_photo: ''
	})
	useEffect(() => {
		sendRequest(`${process.env.REACT_APP_API_URL}recipes/${id}`, {}, {}, { auth: true })
			.then(response => {
				if (response?.success) {
					setRecipe(response?.data)
					const recipeCategories = response?.data?.Categories?.map((c) => c.id)
					setSelectedCategories(recipeCategories)
				}
			})
	}, [])

	const descriptionRef = useRef()
	const videoRef = useRef()
	const recipe_photoRef = useRef()
	const backgroundRef = useRef()
	const nameRef = useRef()
	const [categories, setCategories] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])

	const handleCategoryToggle = (e) => {
		const categoriesClone = [...selectedCategories]
		const value = parseInt(e.target.value)
		if (categoriesClone.indexOf(value) == -1) {
			categoriesClone.push(value)
		} else {
			categoriesClone.splice(categoriesClone.indexOf(value), 1)
		}
		setSelectedCategories(categoriesClone)
	}

	useEffect(() => {

		sendRequest(`${process.env.REACT_APP_API_URL}categories`).then(
			(response) => {
				setCategories(response?.data);
			}
		);
	}, []);

	const addrecipe = () => {
		const formdata = new FormData();
		formdata.append('name', nameRef.current.value)
		formdata.append('video', videoRef.current.value)
		formdata.append('description', descriptionRef.current.value)
		for (var i = 0; i < selectedCategories.length; i++) {
			formdata.append('categories[]', selectedCategories[i])
		}

		formdata.append('recipe_photo', recipe_photoRef.current.files[0])
		formdata.append('background_photo', backgroundRef.current.files[0])
		sendRequest(`${process.env.REACT_APP_API_URL}recipes/${id}`, {}, formdata, { auth: true }, 'put')
			.then((response) => {
				window.alert(response?.messages?.join(' '))
				if (response?.success) {
					navigate('/user/UserRecipes')
				}
			})
	}
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<h2>Edit Recipe</h2>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label>Recipe Name</label>
						<input type="text" onChange={(e) => { setRecipe({ ...recipe, name: e.target.value }) }}
							value={recipe.name} ref={nameRef} className='form-control' />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label>Recipe Description</label>
						<textarea ref={descriptionRef} onChange={(e) => { setRecipe({ ...recipe, description: e.target.value }) }}
							value={recipe?.description} className='form-control' cols="7"></textarea>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label>Recipe Video</label>
						<input type={'text'} onChange={(e) => { setRecipe({ ...recipe, youtube_video: e.target.value }) }}
							value={recipe?.youtube_video} ref={videoRef} className="form-control" placeholder="video Link" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label>Recipe Photo</label>
						<div>
							<img src={recipe.recipe_photo} style={{ width: "200px" }} />
							<input type={'file'} onChange={(e) => { setRecipe({ ...recipe, recipe_photo: e.target.value }) }}
								ref={recipe_photoRef} className='form-control' />
						</div>

					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label>Recipe Background</label>
						<div>
							<img src={recipe.background_photo} style={{ width: "200px" }} />
							<input type={'file'} onChange={(e) => { setRecipe({ ...recipe, background_photo: e.target.value }) }}
								ref={backgroundRef} className='form-control' cols="7" />
						</div>

					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label>Recipe Categoreis</label>
						<div className="row">
							{categories?.map((category, i) => {
								return (
									<div className="col-4" key={i}>
										<input
											checked={selectedCategories.includes(category.id)}
											onChange={handleCategoryToggle} type='checkbox' value={category.id} id={`category-${category.id}`} />&nbsp;
										<label htmlFor={`category-${category.id}`}>{category.name}</label>
									</div>
								)
							})
							}
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

export default EditRecipe;