import './MyRecipe.css'
// import walll from '../../assets/images/walll.jpg'
import { Link } from 'react-router-dom'

const MyRecipe = () => {
    return (
        <div className='MyRecipe'>
            <div className='containerb '>
                <div className='row'>
                <div className='col-9 col-lg-9 text-center'>
                    <div className='MyRecipe-content col-12 col-lg-5 offset-lg-1'>
                    <h1 className="display-6 px-4 center fw-bold d-block">Here is your space to share your awsome Recipes</h1>
                        <p > Healthy digestion is crucial for a strong immune system and for a long life. Our modern reality, however, shows that almost all people are affected by different types of digestive disorders. </p>
    
                        <div className='container2 '>
                        <Link to='/user/UserRecipes' className='button button-large m-0  fw-bold button-circle button-light'>My Recipes </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRecipe
