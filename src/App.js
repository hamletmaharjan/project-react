import { connect } from 'react-redux';
import {  useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Signup from './pages/Signup';
import ShowArticle from './pages/articles/ShowArticle';
import EditArticle from './pages/articles/EditArticle';
import CreateArticle from './pages/articles/CreateArticle';
import Header from './components/Header';

import { login, logout } from './actions/authAction';
import * as authService from './services/auth';
import * as userService from './services/user';
import ROUTES from './constants/routes';
import PrivateRoute from './privateRoute';

import './public.js';
import './App.css';

function App(props) {
  useEffect(() => {
    let token = authService.getAccessToken();
    let userInfo = authService.getUserInfo();
    if(token && userInfo){
      userService.validateToken()
      .then(function (response) {
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
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.SIGN_UP} component={Signup}/>
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
