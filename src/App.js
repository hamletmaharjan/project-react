
import axios from 'axios';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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

import './public.js';
import './App.css';


const PrivateRoute = ({ component:Component, ...rest }) => {
  let token = localStorage.getItem('token');
  // token = false;
  return <Route {...rest} render={(props)=> (
    token ? <Component {...props} /> : <Redirect to='/login' />
  )} />
}

function App(props) {
  // let {id} = useParams();
  useEffect(() => {
    let token = localStorage.getItem('token');
    let userInfo = JSON.parse(localStorage.getItem('user'));
    if(token && userInfo){
      let url = 'http://localhost:8848/api/users/' + userInfo.id;
      axios.get(url,
          {
          headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
              'Authorization': token
          }
      })
      .then(function (response) {
        console.log(response);
        response.data.data.token = token;
        props.login(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/about" component={About}></PrivateRoute>
          <PrivateRoute path="/articles/create" component={CreateArticle}></PrivateRoute>
          <PrivateRoute path="/articles/:id/edit" component={EditArticle}></PrivateRoute>
          <PrivateRoute path="/articles/:id" component={ShowArticle}></PrivateRoute>
          
          <PrivateRoute path="/" component={Home}></PrivateRoute>
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