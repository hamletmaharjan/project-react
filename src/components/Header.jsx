import { Link, useHistory, NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import userImg from '../assets/user.png';
import { logout } from '../actions/authAction';

function Header(props) {
  const history = useHistory();

  const handleLogout = (e)=> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.logout();
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
              <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>

            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={userImg} height="30px" width="30px" alt="user"/>
              </Link>
              
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={handleLogout} >Logout</a>
              </div>
            </div>
          <Link className="btn btn-primary" to="/articles/create">Create Article</Link>
        </div>
      </nav>
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
    logout: () => dispatch(logout())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
