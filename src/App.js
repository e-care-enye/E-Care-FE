import './App.css';
import Landing from './Pages/Landing/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Pages/SignInAll/SignIn';
import PatDash from './Pages/Dashboards/PatDash/PatDash';
import HosDash from './Pages/Dashboards/HosDash/HosDash';
import PractDash from './Pages/Dashboards/PractDash/PractDash';

function App() {
  return (
    <Router>
      <div className="App">
     <Switch>
       <Route exact path ="/">
          <Landing />
       </Route>
       <Route exact path ="/signin">
          <SignIn />
       </Route>
       <Route exact path ="/patdash">
          <PatDash />
       </Route>
       <Route exact path ="/hosdash">
          <HosDash />
       </Route>
       <Route exact path ="/pracdash">
          <PractDash />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
