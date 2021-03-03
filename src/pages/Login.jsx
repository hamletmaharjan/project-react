import { useState } from 'react';
import axios from 'axios';

import {Link, useHistory} from 'react-router-dom';

import { connect } from 'react-redux';
import { login, logout } from '../actions/authAction';

function Login (props){
	const history = useHistory();

	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = (event) => {
		
		let name = event.target.name;
		// console.log(name);
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
		console.log(email, password);
		e.preventDefault();

		axios.post('http://localhost:8848/api/auth/login', {
			email: email,
			password: password
		  })
		  .then(function (response) {
			console.log(response);
			localStorage.setItem('token', response.data.token);
			let userInfo = {
				id: response.data.id,
				name: response.data.name,
				username: response.data.username
			}
			localStorage.setItem('user', JSON.stringify(userInfo));
			props.login(response.data);
			console.log(history);
			history.push('/');
			
			// localStorage.setItem('user', )
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	} 

	return (
		<div>
            <form  onSubmit={handleSubmit}>
                
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange}/>
                    {/* <small  class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
               
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
				<Link className="btn btn-success" to="/signup">Signup</Link>
                {/* <button type="submit" >Create</button> */}
            </form>
        
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