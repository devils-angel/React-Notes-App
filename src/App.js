import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Important from './pages/Important';
import Archive from './pages/Archive';
import Bin from './pages/Bin';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div >
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/important" element={<Important />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/bin" element={<Bin />} />

      </Routes>
    </div>
  );
}

export default App;
