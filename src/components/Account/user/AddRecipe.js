
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRequest } from "../../../hooks/useRequest"
import './AddRecipe.css'
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"



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
				setCategories(response.data)
			})
	}, [])

	const sendRequest = useRequest()
	const ctx = useContext(AuthContext)
	const addrecipe = () => {
		const formdata = new FormData();
		formdata.append('name', nameRef.current.value)
		formdata.append('youtube_video', videoRef.current.value)
		formdata.append('description', descriptionRef.current.value)
		// for (var i = 0; i < selectedCategories.length; i++) {
			formdata.append('categories', selectedCategories)
		
		formdata.append('recipe_photo', photoRef.current.files[0])
		console.log(photoRef.current.files[0],"photoRef")
		formdata.append('background_photo', backgroundRef.current.files[0])
		fetch(`${process.env.REACT_APP_API_URL}recipes/addrecipe`, {
			method:"POST",
            headers: {
                'Authorization': 'Bearer ' + ctx.token
            },
			body: formdata,
        }).then(response => {
            response.json().then((response) => {
				window.alert(response?.messages?.join(' '))
				console.log(response,"response")
				if (response?.success) {
					navigate('/user/UserRecipes')
				}
			})
        .catch(e => e)
    }, [])
	// 	sendRequest(`${process.env.REACT_APP_API_URL}recipes/addrecipe`, {}, formdata, { auth: true }, 'POST')
	// 		.then((response) => {
	// 			window.alert(response?.messages?.join(' '))
	// 			console.log(response,"response")
	// 			if (response?.success) {
	// 				navigate('/user/UserRecipes')
	// 			}
	// 		})
	  }
	return (
		<div className="box1">
			<div className="box">
				<h3 className="recipee">CREAT RECIPE</h3>
				<div className="row">
					<div className="col-lg-12">
						<div className="form">
						<div class="form-outline">
							<input type={"text"} ref={nameRef} className="form-control" placeholder="Recipe Name" /></div>
							<div class="form-outline">
							<input type={"text"} ref={videoRef} className="form-control" placeholder="video url" /></div>

							<h4>Select recipe Categories</h4>
							<div className="container">
								<div className="row mb-4">
									{
										categories?.map((category, i) => {
											return (
												<div key={i} className='secim col-md-4 col-lg-3  '>
													<input onChange={handleCategoryToggle} type='checkbox' value={category.id} id={`category-${category.id}`} />&nbsp;
													<label htmlFor={`category-${category.id}`}>{category.name}</label>
												</div>
											)
										})
									}
								</div>
							</div>
							<div class="form-outline datepicker w-100">
							<input type={"file"} ref={photoRef} className="form-control" placeholder="photo" /></div>
							<div class="form-outline">
							<input type={"file"} ref={backgroundRef} className="form-control" placeholder="Background photo" /></div>
							<textarea ref={descriptionRef} className="form-control" placeholder="description"></textarea>
							<div className="button1">
							<button onClick={addrecipe} type="button" className="button button-large m-0  fw-bold button-circle button-light">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddRecipe 