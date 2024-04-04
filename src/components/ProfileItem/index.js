import './index.css'

const ProfileItem = props => {
    const {eachProfile} = props
    const {profileIconUrl,status, additionalStatus} = eachProfile
    const isAdditionalStatus = additionalStatus !== '' ? additionalStatus : ''
    return (
        <li className='profile-list-item'>
            <img className='profile-icon' src={profileIconUrl} alt="profile icon" />
            <p className='profile-status'>{status}</p>
            <p className='profile-additional-status'>{isAdditionalStatus}</p>
        </li>
    ) 
}

export default ProfileItem