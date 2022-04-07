import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './components/Landing/LandingPage'
import {Home} from './components/Home/Home'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/home" component={}/> */}
        </Routes>
      </div>
      </Router>
  );
}

export default App;
