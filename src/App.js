
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Tableform from './Tableform'
import Counterf from './Counterf';
import Login from './Login'
import Employee from './Employee'
import Datafetching from './Datafetching';
import Axiosfunction from './Axiosfunction';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/nothing" element={<Tableform />}></Route>
        <Route path="/cort" element={<Counterf />}></Route>
          <Route  path="/registration" element={<Login/>}></Route>
          <Route path="/Emp/:id" element = {<Employee/>}></Route>
          <Route path = "/fetch" element = {<Datafetching/>}></Route>
          <Route path = "/sr" element = {<Axiosfunction/>}></Route>
          
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
