import {
  
    Link,
    Redirect,
    useHistory
    
  } from "react-router-dom";
import userImg from '../assets/user.png';
import {useEffect} from 'react';



function Header(props) {
    const history = useHistory();

    const handleLogout = (e)=> {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log(history);
        history.push('/login');
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="#">MyApp</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                </li>
                
                </ul>

                <div class="nav-item dropdown">
                    {/* <!-- <router-link class="nav-link" to=""><img src="../assets/lady.png" height="30px" width="30px"></router-link> --> */}

                    <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={userImg} height="30px" width="30px"/>
                    </Link>
                    
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link class="dropdown-item" to="myProfileLink">My Profile</Link>
                        <Link class="dropdown-item" to="/settings">Settings</Link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" onClick={handleLogout} >Logout</a>
                    </div>

                </div>
                
              
                <Link class="btn btn-primary" to="/articles/create">Create Article</Link>
              
            </div>
            </nav>
        </div>
    )
}

export default Header;