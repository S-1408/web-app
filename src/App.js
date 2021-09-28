
import './App.css';
import LinkPages from './pages/LinkPage/LinkPages';
import PostPages from './pages/PostPages/PostPages';
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
        <Switch>
            <Route path="/" component={Dashboard}/>
    

          
          <Route path="/linkpage" component={LinkPages}/>
         
          <Route path="/postpage" component={PostPages}/>
    
        

        </Switch>
     </Router>
    
    </div>
  );
}

export default App;
