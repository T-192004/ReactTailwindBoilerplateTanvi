import {Component} from 'react'
import SkillItem from '../SkillItem'
import './index.css'

const inititalzeInterestsList = [
    {
        'id': 0,
        'interestsIcon': '',
        'interestsName': 'Learning specific skills to advance my carrer'
    },
    {
        'id': 1,
        'interestsIcon': '',
        'interestsName': "Exploring new topics I'm interested in"
    },
    {
        'id': 2,
        'interestsIcon': '',
        'interestsName': 'Refreshing my math foundations'
    },
    {
        'id': 3,
        'interestsIcon': '',
        'interestsName': 'Exercising my brain to stay sharp'
    },
    {
        'id': 4,
        'interestsIcon': '',
        'interestsName': 'Something else'
    }
]

class SecondPage extends Component {
    state={interestsList: inititalzeInterestsList, isClicked:false}

    changedClickedBtnStatus = () => {
        this.setState({isClicked: true})
    }
    render() {
        const {interestsList, isClicked} = this.state
        const clicked = isClicked ? 'clicked-btn' : ''
        return (
            <div className='second-page-container'>
                <div className='page-progress'>
                    <hr className='progress2' />
                    <hr className='no-progress2' />
                </div>
                <div className='second-page-content'>
                    <h1 className='second-page-title'>Which are you most interested in?</h1>
                    <p className='second-page-description'>Choose just one. This will help us get you started (but won't limit your experience).</p>
                    <ul className='second-page-profile-list'>
                    {interestsList.map(eachInterests => <SkillItem eachInterests={eachInterests} />)}
                    </ul>
                    <button className={`continue-btn ${clicked}`} onClick={this.changedClickedBtnStatus} type="button">Continue</button>
                </div>
            </div>
        )
    }
}

export default SecondPage