import './Banner.css'
import dish from '../../../assets/images/dish.png'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='banner-content col-12 col-lg-5 offset-lg-1'>
                        <h1>Avocado and figs toast</h1>
                        <p>Lorem ipsum manar dolor abrar sit amit hammodi and Feras Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem ipsum manar dolor abrar sit</p>
                        <span>
                            <Link to='/recipes' className='button button-large m-0  fw-bold button-circle button-light'>Check Recipes</Link>
                        </span>
                    </div>
                    <div className='col-12 col-lg-6 text-center'>
                        <img src={dish} className='dish' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner