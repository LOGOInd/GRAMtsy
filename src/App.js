import logo from './logo.svg';
// import './styles/App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Product from './Product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Header/>

      <Switch>

        <Route path="/checkout" >
          <div className="App">
            <Checkout/>
          </div>
        </Route>

        <Route path="/" >
          <div className="App">
            <Home/>
          </div>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
