import { useState } from 'react';
import axios from 'axios';



function Login (){

	
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
			// localStorage.setItem('user', )
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	} 

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<input type="text" name="email" onChange={handleChange}></input> <br></br>
				<label>Password</label>
				<input type="password" name="password" onChange={handleChange}></input> <br></br>
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}


export default Login;