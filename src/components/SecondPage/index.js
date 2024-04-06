import {Component} from 'react'
import SkillItem from '../SkillItem'
import {Link} from 'react-router-dom'
import './index.css'

const inititalzeInterestsList = [
    {
        'id': 0,
        'interestsIcon': 'https://miro.medium.com/max/102/1*Lt7HVoKY-Y8qgSiVDHH0lQ.png',
        'interestsName': 'Learning specific skills to advance my carrer',
        'isClicked': false,
    },
    {
        'id': 1,
        'interestsIcon': 'https://th.bing.com/th/id/OIP.sOfe2uwCZcAdqM90X5wPTgAAAA?w=50&h=50&rs=1&pid=ImgDetMain',
        'interestsName': "Exploring new topics I'm interested in",
        'isClicked': false,
    },
    {
        'id': 2,
        'interestsIcon': 'https://th.bing.com/th/id/OIP.t9hSzRqhZ-pZJfoK84SlrgAAAA?pid=ImgDet&w=110&h=110&c=7&dpr=1.3',
        'interestsName': 'Refreshing my math foundations',
        'isClicked': false,
    },
    {
        'id': 3,
        'interestsIcon': 'https://th.bing.com/th/id/OIP.jqyoSoK0qCH28ZWwaFiLzgAAAA?pid=ImgDet&w=110&h=110&c=7&dpr=1.3',
        'interestsName': 'Exercising my brain to stay sharp',
        'isClicked': false,
    },
    {
        'id': 4,
        'interestsIcon': 'https://www.bing.com/images/blob?bcid=S6kLuqZzJd8GcBKHDbfc5FqDylRS.....ws',
        'interestsName': 'Something else',
        'isClicked': false,
    }
]

class SecondPage extends Component {
    state={interestsList: inititalzeInterestsList, isClicked:false}

    onSubmitForm = event => {
        event.preventDefault()
    }

    changedClickedPageBtnStatus = () => {
        this.setState({isClicked: true})
    }

    getTheInterestsClickedItem = id => {
        const {interestsList} = this.state
        const updatedInterestsList = interestsList.map(eachInterests => {
            if(eachInterests.id ===id){
                eachInterests.isClicked = true
            } else {
                eachInterests.isClicked = false
            }
            return eachInterests
        })
        this.setState({interestsList: updatedInterestsList, isClicked:false})
    }

    render() {
        const {interestsList, isClicked} = this.state
        const clicked = isClicked ? 'clicked-btn' : ''
        return (
            <div className='second-page-container'>
                <div className='page-progress'>
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" viewBox="0 0 320 512" className='m-5'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </Link>
                    <hr className='progress2' />
                    <hr className='no-progress2' />
                </div>
                <form className='second-page-content' onSubmit={this.onSubmitForm}>
                    <h1 className='second-page-title'>Which are you most interested in?</h1>
                    <p className='second-page-description'>Choose just one. This will help us get you started (but won't limit your experience).</p>
                    <ul className='second-page-profile-list'>
                    {interestsList.map(
                        eachItem => <SkillItem
                                            eachItem={eachItem}
                                            key={eachItem.id}
                                            getTheInterestsClickedItem={this.getTheInterestsClickedItem}/>)}
                    </ul>
                    <Link to='/third-page'>
                        <button className={`continue-btn ${clicked}`} onClick={this.changedClickedPageBtnStatus} type="button">
                            Continue
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default SecondPage