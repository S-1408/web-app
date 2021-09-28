import logo from './logo.svg';
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
          <Route path="/linkpage">
          <LinkPages/>
          </Route>
          <Route path="/postpage">
     <PostPages/>

          </Route>
          <Route path="/dashboard">
     <Dashboard/>

          </Route>

        </Switch>
     </Router>
    
    </div>
  );
}

export default App;
