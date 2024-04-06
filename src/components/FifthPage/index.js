import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class FifthPage extends Component {
    state={ isClicked:false}

    onSubmitForm = event => {
        event.preventDefault()
    }

    changedClickedPageBtnStatus = () => {
        this.setState({isClicked: true})
    }

    render() {
        const {isClicked} = this.state
        const clicked = isClicked ? 'clicked-btn' : ''
        return (
            <div className='fifth-page-container'>
                <div className='page-progress'>
                    <Link to='/fourth-page'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" viewBox="0 0 320 512" className='m-5'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </Link>
                    <hr className='progress5' />
                    <hr className='no-progress5' />
                </div>
                <form className='fifth-page-content' onSubmit={this.onSubmitForm}>
                    <div className='fifth-page-main-content'>
                        <img className='third-page-image'
                             src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWyXAcshbFVzF3gebss40tenNhNkt2Hv5JNXzm_N_GUf9-EU-a'
                             alt='fifth page main' 
                        />
                        <div className='fifth-page-content-card'>
                            <h1 className='card-title'>You're on your way!</h1>
                            <img className='card-rating-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__5dKpEsqsujbOF4SzsQ-ff8RE1_JBoa-TuZnhYzcEyHYuxOa' alt='stars'/>
                            <p className='card-paragraph'>
                            "Through its engaging and well-structured courses, 
                            Brilliant has taught me mathematical concepts that 
                            I previously struggled to understand. I now feel 
                            confident approaching both technical job interviews 
                            and real world problem solving situations."
                            </p>
                            <p className='card-paragraph'> - Jacob S.</p>
                        </div>
                    </div>
                    <Link to='/sixth-page'>
                        <button className={`continue-btn ${clicked}`} onClick={this.changedClickedPageBtnStatus} type="button">
                             Continue
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default FifthPage