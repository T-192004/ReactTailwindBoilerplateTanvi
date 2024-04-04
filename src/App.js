import { BrowserRouter,Routes, Route } from 'react-router-dom';

// import DemoComponent from "./DemoComponent";
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import './App.css'


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/secondPage" element={ <SecondPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
