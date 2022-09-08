import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddStudentComponent from './components/AddStudentComponent';



function App() {
  
  return (
    <div>
       <Router>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = {<ListStudentComponent />}></Route>
              <Route path = "/students" element = {<ListStudentComponent />}></Route>
              <Route path = "/add-student" element = {<AddStudentComponent />} ></Route>
              <Route path = "/edit-student/:id" element = {<AddStudentComponent />}></Route>
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>

    
  );
  
}

export default App;
