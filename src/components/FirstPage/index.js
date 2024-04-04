import {Component} from 'react'
import ProfileItem from '../ProfileItem'
import {Link} from 'react-router-dom'
import './index.css'

const inititalzeProfileList = [
    {
        'id': 0,
        'profileIconUrl': 'https://th.bing.com/th/id/OIP.YnUfVc0SOqtHAdWBfO6uoQAAAA?pid=ImgDet&w=110&h=110&c=7&dpr=1.3',
        'status': 'Student',
        'additionalStatus': 'or soon to be called' ,
    },
    {
        'id': 1,
        'profileIconUrl': 'https://oldschool.runescape.wiki/images/7/71/Meredith_chathead.png?84d05',
        'status': 'Professional',
        'additionalStatus': 'pursuing a career' ,
    },
    {
        'id': 2,
        'profileIconUrl': 'https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG/Life-Stage%3DParent_6858243195481246.png',
        'status': 'Parent',
        'additionalStatus': 'of a school-age child' ,
    },
    {
        'id': 3,
        'profileIconUrl': 'https://th.bing.com/th/id/OIP.XGobbGbSdDBeGfZVHXBpxAAAAA?pid=ImgDet&w=84&h=84&c=7&dpr=1.3',
        'status': 'Lifelong learner',
    },
    {
        'id': 4,
        'profileIconUrl': 'https://th.bing.com/th/id/OIP.TMyuRiNSWnnTZAunMxAADwAAAA?pid=ImgDet&w=129&h=129&c=7&dpr=1.3',
        'status': 'Teacher',
    },
    {
        'id': 5,
        'profileIconUrl': 'https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG/Life-Stage%3DOther_39497974702587735.png',
        'status': 'Other',
    }
]

class FirstPage extends Component {
    state={profileList: inititalzeProfileList, isClicked:false}

    changedClickedBtnStatus = () => {
        this.setState({isClicked: true})
    }
    render() {
        const {profileList, isClicked} = this.state
        const clicked = isClicked ? 'clicked-btn' : ''
        return (
            <div className='first-page-container'>
                <div className='page-progress'>
                    <hr className='progress1' />
                    <hr className='no-progress1' />
                </div>
                <div className='first-page-content'>
                    <h1 className='first-page-title'>Which describes you the best?</h1>
                    <p className='first-page-description'>This will help us personalize your experience</p>
                    <ul className='first-page-profile-list'>
                    {profileList.map(eachProfile => <ProfileItem eachProfile={eachProfile} />)}
                    </ul>
                    <Link to="/secondPage"><button className={`continue-btn ${clicked}`} onClick={this.changedClickedBtnStatus} type="button">Continue</button>
                </Link>
                </div>
            </div>
        )
    }
}

export default FirstPage