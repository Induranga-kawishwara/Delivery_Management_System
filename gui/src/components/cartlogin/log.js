import Dropdown from 'react-bootstrap/Dropdown';
import TheFooter from "../../components/Footer/TheFooter";
import TheNav from "../../components/Header/TheNav";
import "./stylelog.css";
import { Link as RouterLink } from "react-router-dom";

const Profile = () => {
    
  
    return (
      <div>
        <TheNav/>
        <div className="form-box" style={{ marginTop: '120px' , marginBottom: '20px'}}>
          <form>
            <h1 className="form-title">Login</h1>
            
            
            <div className="form-group paddingspace">
              <label htmlFor="inputEmail3" className="col-form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>

            <div className="form-group paddingspace">
              <label htmlFor="inputPassword3" className="col-form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
            
            <div className="form-group remember-me-checkbox">
              <input type="checkbox" id="rememberPassword"/>
              <label htmlFor="rememberPassword" className="col-form-label"> Remember password</label>
            </div>
            
            <RouterLink
                        to="/cart"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        >
            <button type="button" className="btn btn-login">Log in</button>
            
        </RouterLink>
        
            <button type="button" className="btn btn-google">Sign in with Google</button>
            
            
            <div className="sign-up-text">
            <RouterLink
                        to="/cartreg"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        >
        Don't have an account? Register
        </RouterLink>
    </div>
    </form>
    </div>
    <TheFooter />
    </div>
    );
    };

export default Profile;