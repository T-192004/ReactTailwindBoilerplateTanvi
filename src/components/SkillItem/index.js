import './index.css'

const SkillItem = props => {
    const {eachInterests} = props
    const {interestsIcon, interestsName} = eachInterests
    return (
        <li className='interests-list-item'>
            <img className='interests-icon' src={interestsIcon} alt="interests icon" />
            <p className='interests-name'>{interestsName}</p>
        </li>
    )
}

export default SkillItem
