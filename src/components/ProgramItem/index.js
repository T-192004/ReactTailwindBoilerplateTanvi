import './index.css'

const ProgramItem = props => {
    const {eachProgram} = props
    const {programName, programDescription,programLogoUrl,isPopular} = eachProgram
    const popularButton = (
        <p className='popular'>
        Most Popular
    </p>
    )
    const popularClass = isPopular ? 'popularClass' : ''
    return (
        <li className={`program-list-item ${popularClass}`}>
            {isPopular && popularButton}
            <div className='content'>
                <p className='description'><span className='title'>{programName}</span> {programDescription}</p>
                <img className='program-logo' alt='program-logo' src={programLogoUrl} />
            </div>
        </li>
    )
}

export default ProgramItem