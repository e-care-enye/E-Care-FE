import './App.css';
import Landing from './Pages/Landing/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
     <Switch>
       <Route exact path ="/landing">
          <Landing />
       </Route>
       <Route exact path ="/signin">
          
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
