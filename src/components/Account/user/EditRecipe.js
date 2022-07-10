import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRequest } from "../../../hooks/useRequest";
import './AddRecipe.css'

const EditRecipe = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const sendRequest = useRequest()
	const [recipe, setRecipe] = useState({
		name: '',
		video: '',
		description: ''
	})
	useEffect(() => {
		sendRequest(`${process.env.REACT_APP_API_URL}/recipes/${id}`, {}, {}, { auth: true })
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
	const photoRef = useRef()
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
    
    sendRequest(`${process.env.REACT_APP_API_URL}/categories`).then(
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
		
		formdata.append('photo', photoRef.current.files[0])
        formdata.append('background', backgroundRef.current.files[0])
		sendRequest(`${process.env.REACT_APP_API_URL}/recipes/${id}`, {}, formdata, { auth: true }, 'put')
			.then((response) => {
				window.alert(response?.messages?.join(' '))
				if (response?.success) {
					navigate('/account/recipes')
				}
			})
	}
	return (
		<div className="box1">
			<div className="box">
			<h3 className="recipee">Edit recipe</h3>
			<div className="row">
				<div className="col-lg-12">
					<div className="form">
						<input type={"text"}
							onChange={(e) => { setRecipe({ ...recipe, name: e.target.value }) }}
							value={recipe?.name} ref={nameRef} className="form-control" placeholder="name" />
						<input type={"text"}
							onChange={(e) => { setRecipe({ ...recipe, video: e.target.value }) }}
							value={recipe?.video} ref={videoRef} className="form-control" placeholder="video Link" />
						

						<h4>Select recipe Categories</h4>
						<div className="container">
							<div className="row mb-4">
								{
									categories?.map((category, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
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
						{
							recipe?.photo && <img src={recipe?.photo} width='100' style={{ height: 'auto' }} />
						}
						<input type={"file"} ref={photoRef} className="form-control" placeholder="photo" />
                        <input type={"file"} ref={backgroundRef} className="form-control" placeholder="background photo" />
						<textarea ref={descriptionRef} className="form-control" placeholder="Your Article" defaultValue={recipe?.description}></textarea>
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

export default EditRecipe;