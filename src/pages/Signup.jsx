import {useState, useEffect } from 'react';
import axios from 'axios';


function Signup() {

    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

	const handleChange = (event) => {
		
		let name = event.target.name;
		// console.log(name);
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
				console.log('crp');
				break;
		}
	}

	const handleSubmit = (e)=> {
		// console.log(image);
		e.preventDefault();
        let url = 'http://localhost:8848/api/auth/signup';
        axios.post(url, {
            name: name,
            username: username,
			email: email,
			password: password
		  })
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });

	} 


    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange}/>
                    <small  class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter Username" onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
                {/* <button type="submit" >Create</button> */}
            </form>
        
        </div>
    )
}


export default Signup;