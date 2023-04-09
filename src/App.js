import './App.css';
import './index.css';
import Home from './Home';
import Quotes from './Quotes.jsx';
import NavBar from './NavBar';
import Wallpapers from './Wallpapers';
import Music from './Music';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quotes" element={<Quotes/>}/>
      <Route path="/wallpapers" element={<Wallpapers/>}/>
      <Route path="/music" element={<Music/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
