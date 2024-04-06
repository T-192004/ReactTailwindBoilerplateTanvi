import ProgramItem from '../ProgramItem'
import './index.css'

const programList = [
    {
        'id': 0,
        'programName': 'Foundational Math',
        'programDescription': 'Build your foundational skills in algebra, geometry, and probability.',
        'programLogoUrl': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bztEqEldcMpmZba_29lavQ4oPyhfRvciNvl03W13JAInNNEv',
        'isPopular': true,
    },
    {
        'id': 1,
        'programName': 'Mathematical Thinking',
        'programDescription': 'Build your foundational skills in algebra, geometry, and probability',
        'programLogoUrl': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bztEqEldcMpmZba_29lavQ4oPyhfRvciNvl03W13JAInNNEv',
        'isPopular': false,
    }
]

const SeventhPage = () => (
    <div className='seventh-page-container'>
        <h1 className='seventh-page-title'>
            Learning paths based on your answers
        </h1>
        <p className='seventh-page-description'>
            Choose one to get started. You can switch anytime
        </p>
        <ul className='program-list-container'>
            {programList.map(eachProgram => <ProgramItem eachProgram={eachProgram} key={eachProgram.id} />)}
        </ul>
    </div>
)

export default SeventhPage