import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../actions/authAction';
import * as userService from '../services/user';
import * as authService from '../services/auth';

function Login (props){
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = (event) => {
		let name = event.target.name;
    let val = event.target.value;
		switch(name) {
			case 'email':
				setEmail(val);
				break;
			case 'password':
				setPassword(val);
				break;
			default:
				console.log('crp');
				break;
		}
	}

	const handleSubmit = (e)=> {
		e.preventDefault();
		userService.login({email: email, password: password})
		.then((response) => {
      authService.setAccessToken(response.token);
			let userInfo = {
				id: response.id,
				name: response.name,
				username: response.username
			}
			localStorage.setItem('user', JSON.stringify(userInfo));
			props.login(response);
			history.push('/');
		})
		.catch(function (error) {
			console.log(error);
		});

	} 

	return (
    <div className="row">
      <div className="col-sm-3">
      </div>
      <div className="col-sm-6 mt-4">
        <form  onSubmit={handleSubmit} className="py-4 px-4 cool">
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange}/>
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
          <Link className="btn btn-success" style={{marginLeft: 15}} to="/signup">Signup</Link>  
        </form>
        
      </div>
      <div className="col-sm-3">
      </div>
    </div>
     
	)
}


const mapStateToProps = (state) => {
	return {
	  authState: state
	}
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    login: (auth) => dispatch(login(auth))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
