import './index.css'


const SkillItem = props => {
    const {eachItem, getTheInterestsClickedItem} = props
    const {id, interestsIcon, interestsName, isClicked} = eachItem
    const clickedBtnClass = isClicked ? 'clicked' : ''
    const onClickTheInterestsListItem = () => {
        getTheInterestsClickedItem(id)
    }
    return (
        <li className='interests-list-item'>
            <button className={`interests-list-item-btn ${clickedBtnClass}`} onClick={onClickTheInterestsListItem}>
               <img className='interests-icon' src={interestsIcon} alt='interests icon' />
               <p className='interests-name'>{interestsName}</p>
             </button>
        </li>
    ) 
}


export default SkillItem
