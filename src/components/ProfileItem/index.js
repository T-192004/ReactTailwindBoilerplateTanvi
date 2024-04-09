import './index.css'

const ProfileItem = props => {
    const {eachProfile, getTheClickedListProfile} = props
    const {id,profileIconUrl,status, additionalStatus, isClicked} = eachProfile
    const isAdditionalStatus = additionalStatus !== '' ? additionalStatus : ''
    const clickedBtnClass = isClicked ? 'clicked' : ''
    const buttonItemClicked = () => {
        getTheClickedListProfile(id)
    }
    return (
        <li className={`profile-list-item ${clickedBtnClass}`} onClick={buttonItemClicked}>
            <img className='profile-icon' src={profileIconUrl} alt='profile icon' />
            <div className='profile-content'>
                <p className='profile-status'>{status}</p>
                <p className='profile-additional-status'>{isAdditionalStatus}</p>
            </div>
                
        </li>
    ) 
}

export default ProfileItem