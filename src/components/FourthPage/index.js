import {Component} from 'react'
import {Link} from 'react-router-dom'
import LevelItem from '../LevelItem'
import './index.css'

const initializeLevelList = [
    {
        'id' :0,
        'equationImageUrl': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzazxPkxI1VGEMQWUv04mTxZ07VNzVm1Zaa3O6UARY7IQKZlNt',
        'topicName': 'Arithmetic',
        'level': 'Introductory',
        'isClicked': false,
    },
    {
        'id': 1,
        'equationImageUrl': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYzluF_VRFotFuuosMdKhebDe2jSJJXOBRC5hZ03mzQ3MVyWaL',
        'topicName': 'Basic Algebra',
        'level': 'Foundational',
        'isClicked': false,
    },
    {
        'id': 2,
        'equationImageUrl': 'http://jacksnotes.com/wp-content/uploads/2022/12/Screen-Shot-2022-12-10-at-11.58.25-PM-840x450.png',
        'topicName': 'Intermediate Algebra',
        'level': 'Intermediate',
        'isClicked': false,
    },
    {
        'id': 3,
        'equationImageUrl': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcVRF6vdpOxCMFJqDQ9sB377pEv2WqRXD8GV2tZAAmECikH2-P',
        'topicName': 'Calculus',
        'level': 'Advanced',
        'isClicked': false,
    }
]

class FourthPage extends Component {
    state={ isClicked:false, levelsList: initializeLevelList}

    onSubmitForm = event => {
        event.preventDefault()
    }

    changedClickedPageBtnStatus = () => {
        this.setState({isClicked: true})
    }

    getTheClickedListLevel = id => {
        const {levelsList} = this.state
        const updatedLevelsList = levelsList.map(eachLevel => {
            if (eachLevel.id ===id){
                eachLevel.isClicked = true
            } else {
                eachLevel.isClicked = false
            }
            return eachLevel
        })
        this.setState({levelsList: updatedLevelsList, isClicked: false})
    }

    render() {
        const {isClicked, levelsList} = this.state
        const clicked = isClicked ? 'clicked-btn' : ''
        return (
            <div className='fourth-page-container'>
                <div className='page-progress'>
                    <Link to='/third-page'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" viewBox="0 0 320 512" className='m-5'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </Link>
                    <hr className='progress4' />
                    <hr className='no-progress4' />
                </div>
                <form className='fourth-page-content' onSubmit={this.onSubmitForm}>
                    <h1 className='fourth-page-title'>What is your math comfort level?</h1>
                    <p className='fourth-page-description'>
                        Choose the highest level you feel confident in - you can always adjust later.
                    </p>
                    <ul className='fourth-page-level-list'>
                        {levelsList.map(
                            eachLevel => <LevelItem
                                            eachLevel={eachLevel}
                                            key={eachLevel.id}
                                            getTheClickedListLevel={this.getTheClickedListLevel}
                                            />
                            )}
                    </ul>
                    <Link to='/fifth-page'>
                        <button className={`continue-btn ${clicked}`} onClick={this.changedClickedPageBtnStatus} type="button">
                             Continue
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default FourthPage