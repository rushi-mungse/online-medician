import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Home from './pages/Home';
import  Login  from './pages/Login';
import Menu from './pages/Menu';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/register' >
            <Register />
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/menu' >
            <Menu />
          </Route>
          <Route path='/cart' >
            <Cart />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
