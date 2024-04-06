import {Link} from 'react-router-dom'
import './index.css'

const SixthPage = () => (
    <Link to='/seventh-page' className='link-item'><div className='sixth-page-container'>
        <img className='loading-ring' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzobjLYrWMAbzomYmoMCusBzuAX4Rz8Kk8epwGJ4b-so_HVF9n' alt='loading' />
        <h1 className='sixth-page-title'>
            Finding learning path recommendations for you based on your responses
        </h1>
    </div>
    </Link>
)

export default SixthPage