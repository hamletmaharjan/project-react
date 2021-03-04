import {
  
    Link,
    useHistory
    
  } from "react-router-dom";
import userImg from '../assets/user.png';
// import {useEffect} from 'react';

import { connect } from 'react-redux';
import { logout } from '../actions/authAction';


function Header(props) {
    const history = useHistory();

    const handleLogout = (e)=> {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        props.logout();
        console.log(history);
        history.push('/login');
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">MyApp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                
                </ul>

                <div className="nav-item dropdown">
                    {/* <!-- <router-link className="nav-link" to=""><img src="../assets/lady.png" height="30px" width="30px"></router-link> --> */}

                    <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={userImg} height="30px" width="30px"/>
                    </Link>
                    
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {/* <Link className="dropdown-item" to="myProfileLink">My Profile</Link>
                        <Link className="dropdown-item" to="/settings">Settings</Link> */}
                        {/* <div className="dropdown-divider"></div> */}
                        <Link className="dropdown-item" onClick={handleLogout} >Logout</Link>
                    </div>

                </div>
                
              
                <Link className="btn btn-primary" to="/articles/create">Create Article</Link>
              
            </div>
            </nav>
        </div>
    )
}

// export default Header;
const mapStateToProps = (state) => {
	return {
	  authState: state
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
        logout: () => dispatch(logout())
	}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);