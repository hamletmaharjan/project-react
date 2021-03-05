
import { connect } from 'react-redux';
import {  useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Signup from './pages/Signup';
import ShowArticle from './pages/ShowArticle';
import EditArticle from './pages/EditArticle';
import CreateArticle from './pages/CreateArticle';
import Header from './components/Header';

import { login, logout } from './actions/authAction';
import * as authService from './services/auth';
import * as userService from './services/user';
import ROUTES from './constants/routes';
import PrivateRoute from './privateRoute';

// import 'bootstrap';

import './public.js';
import './App.css';


// const PrivateRoute = ({ component:Component, ...rest }) => {
//   let token = localStorage.getItem('token');
//   return <Route {...rest} render={(props)=> (
//     token ? <Component {...props} /> : <Redirect to='/login' />
//   )} />
// }

function App(props) {
  useEffect(() => {
    let token = authService.getAccessToken();
    let userInfo = authService.getUserInfo();
    if(token && userInfo){
      userService.validateToken()
      .then(function (response) {
        // console.log(response);
        response.data.token = token;
        props.login(response.data);
      })
      .catch(function (error) {
        console.log(error);
        props.logout();
        authService.clearLocalAuth();
      });
    }
    else{
      props.logout();
    }
    
  },[]);

  return (
    <div className="App">
      <Router>
        {props.authState.isLoggedIn &&
        <Header />}
        <div className="container">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <PrivateRoute exact path={ROUTES.ABOUT} component={About}/>
          <PrivateRoute exact path={ROUTES.CREATE_ARTICLE} component={CreateArticle}/>
          <PrivateRoute exact path={ROUTES.EDIT_ARTICLE} component={EditArticle}/>
          <PrivateRoute exact path={ROUTES.SHOW_ARTICLE} component={ShowArticle}/>
          
          <PrivateRoute path={ROUTES.HOME} component={Home}/>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

// export default App;



const mapStateToProps = (state) => {
  return {
    authState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (auth) => dispatch(login(auth)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
