
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Coin from './pages/Coin';
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
        <Route path='/coin/:id' element={<Coin/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
