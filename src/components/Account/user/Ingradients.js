import { useState } from "react"

const Ingradients = ({ recipeIngradients = [] }) => {
    const [ingradients, setIngradients] = useState(recipeIngradients)
    const addNewIngradient = () => {
        const ingradientsCopy = [...ingradients]
        ingradientsCopy.push({
            name: '',
            description: ''
        })
        setIngradients(ingradientsCopy)

    
    }
    const [selectedingradient, setSelectedingradient] = useState([])
    const handleIngradientToggle = (e) => {
		const ingradientClone = [...selectedingradient]
		if (e.target.checked) {
			ingradientClone.push(e.target.value)
		} else {
			ingradientClone.splice(ingradientClone.indexOf(e.target.value), 1)
		}
		setSelectedingradient(ingradientClone)
	}
    const deleteIngradient = (i) => {
        const ingradientsCopy = [...ingradients]
        ingradientsCopy.splice(i, 1)
        setIngradients(ingradientsCopy)
    }

    return (
        <>
            {
                ingradients.map((ingradient, i) => {
                    return (
                        <div className="row mb-2" key={i} >
                            <div className="col-5" >
									<input  onChange={handleIngradientToggle} type={'text'} className='form-control'  placeholder={'Name'} value={ingradient?.id} id={`ingradient-${ingradient.id}`} />
									&nbsp;<label htmlFor={`ingradient-${ingradient.id}`} >{ingradient.name}</label>
								</div>
                                <div className="col-5" >
									<input  onChange={handleIngradientToggle} type={'text'} className='form-control'   placeholder={'Description'}value={ingradient?.id} id={`ingradient-${ingradient.id}`} />
									&nbsp;<label htmlFor={`ingradient-${ingradient.id}`} >{ingradient.description}</label>
								</div>



                            <div className="col-2 d-flex justify-content-center">
                                <button className="btn btn-danger" onClick={() => {deleteIngradient(i)}}>x</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="row mt-4">
                <div className="col">
                    <button className="btn btn-sm btn-primary" onClick={addNewIngradient}>Add New Ingradient</button>
                </div>
            </div>

        </>
    )
}

export default Ingradients