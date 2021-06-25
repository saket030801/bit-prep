import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Statistics from './Navbar/Statistics';
import InterviewExperience from './Navbar/InterviewExperience';
import Carousal from './Carousal/carousal';
import Particles from 'react-particles-js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App()  {
  return(
    <div>
    <Router>
    <Route path='/' exact component={Navbar} />
    <Route path='/interviewexperience' exact component={InterviewExperience} />

    <Route path='/statistics' exact component={Statistics} />

    <Route path='/' exact component={Carousal} />



    </Router>
    
    
      
     
      
      
    </div>
    
  );
}

export default App;
