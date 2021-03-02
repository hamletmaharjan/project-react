import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';

import Header from './components/Header';
import CreateArticle from './pages/CreateArticle';

const PrivateRoute = ({ component:Component, ...rest }) => {
  let token = localStorage.getItem('token');
  // token = false;
  return <Route {...rest} render={(props)=> (
    token ? <Component {...props} /> : <Redirect to='/login' />
  )} />
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/about" component={About}></PrivateRoute>
          <PrivateRoute path="/articles/create" component={CreateArticle}></PrivateRoute>
          <PrivateRoute path="/" component={Home}></PrivateRoute>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
