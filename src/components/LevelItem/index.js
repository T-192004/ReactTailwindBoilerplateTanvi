import './index.css'

const LevelItem = props => {
    const {eachLevel, getTheClickedListLevel} = props
    const {id, equationImageUrl,topicName,level, isClicked} = eachLevel
    const clickedClass = isClicked ? 'click' : ''
    const onClickTheLevelListItem = () => {
        getTheClickedListLevel(id)
    }
    return (
        <li className={`level-list-item ${clickedClass}`} onClick={onClickTheLevelListItem}>
            <img className='eqaution-image' src={equationImageUrl} alt={topicName} />
            <p className='topic-name'>{topicName}</p>
            <p className='level'>{level}</p>
        </li>
    )
}

export default LevelItem