import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/nav/nav"
import Body from "./component/body/body"
import Footer from './component/footer/footer'
import Erdiagram from './component/body/erdiagram';
import Database from './component/body/database';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='head'>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Body/>
            </Route>
            <Route exact path="/er">
              <Erdiagram/>
            </Route>
            <Route exact path="/db">
              <Database/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>

    </div>
  );
}

export default App;
