
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header';
import LandingPageComponent from './components/LandingPage/Intro';
import DashboardPage from './pages/DashboardPage';
import Home from './pages/Home';




function App() {
  return (

    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
