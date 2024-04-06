import { BrowserRouter,Routes, Route } from 'react-router-dom';

// import DemoComponent from "./DemoComponent";
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage  from './components/ThirdPage'
import FourthPage from './components/FourthPage'
import FifthPage from './components/FifthPage'
import './App.css'
import SixthPage from './components/SixthPage'
import SeventhPage from './components/SeventhPage'


const  App = () => (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/second-page" element={ <SecondPage /> } />
          <Route exact path='/third-page' element={ <ThirdPage />} />
          <Route exact path='/fourth-page' element={<FourthPage />} />
          <Route exact path='/fifth-page' element={<FifthPage />} />
          <Route exact path='/sixth-page' element={<SixthPage />} />
          <Route exact path='/seventh-page' element={<SeventhPage />} />
        </Routes>
      </BrowserRouter>
)

export default App;
