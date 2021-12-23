// To use this, need to install => npm i react-router-dom@5.3.0
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Detail from './routes/Detail';
import Home from './routes/Home';
import './App.css';
function App() {
  return (
    <Router> 
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
