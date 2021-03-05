import {useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as userService from '../services/user';

function Signup() {
  let history = useHistory();

  const [name, setName] = useState('');
	const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

	const handleChange = (event) => {
		let name = event.target.name;
    let val = event.target.value;
		switch(name) {
			case 'name':
				setName(val);
				break;
			case 'email':
				setEmail(val);
				break;
      case 'username':
          setUsername(val);
          break;
      case 'password':
          setPassword(val);
          break;
			default:
				console.log('invalid');
				break;
		}
	}

	const handleSubmit = (e)=> {
		e.preventDefault();
    userService.register({
      name: name,
      username: username,
			email: email,
			password: password
		})
		.then(function (response) {
      history.push('/login');
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
            <label>Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange} required/>
            <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="username" placeholder="Enter Username" onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required/>
          </div>
          <input type="submit" className="btn btn-primary" value="Signup" />
        </form>
      </div>
      <div className="col-sm-3">
      </div>
    </div>
  )
}


export default Signup;
