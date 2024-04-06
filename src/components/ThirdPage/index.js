import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class ThirdPage extends Component {
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
            <div className='third-page-container'>
                <div className='page-progress'>
                    <Link to='/second-page'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" viewBox="0 0 320 512" className='m-5'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </Link>
                    <hr className='progress3' />
                    <hr className='no-progress3' />
                </div>
                <form className='third-page-content' onSubmit={this.onSubmitForm}>
                    <div className='third-page-main-content'>
                        <img className='third-page-image'
                             src='https://th.bing.com/th/id/OIP.1hexarUooF52GR9uyPSBtAAAAA?pid=ImgDet&w=161&h=209&c=7'
                             alt='third page main' 
                        />
                        <div className='third-page-content-card'>
                            <h1 className='card-title'>You're in the right place</h1>
                            <p className='card-paragraph'>
                                Brilliant gets you hand-on help improve your professional 
                                skills and knowledge. You'll interact with concepts and 
                                solve fun problems in math, science, and computer science.
                            </p>
                        </div>
                    </div>
                    <Link to='/fourth-page'>
                        <button className={`continue-btn ${clicked}`} onClick={this.changedClickedPageBtnStatus} type="button">
                             Continue
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default ThirdPage