import Dropdown from 'react-bootstrap/Dropdown';
import TheFooter from "../footer/TheFooter";
import TheNav from "../navbar/TheNav";
import "./style.css"
import { Link as RouterLink } from "react-router-dom";



const Profile = () => {

    return(
        <div >
      <TheNav/>
       <div  style={{ marginTop: '120px', marginBottom: '20px', marginLeft: '40px', marginRight: '40px'}}>
            <form>
                <h1>Login For Employee Register</h1><br/>

                <div className ="paddingspace">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                </div>
                
                <div className ="paddingspace">
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                </div>
                
<h1> </h1>

                <div className="form-group row">
                    <div className="col-sm-10">
                       <RouterLink
                        to="/regemp"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        >

                        <button type="submit" className="btn btn-primary">Log in</button>
                    </RouterLink>
                    
                    </div>
                </div>
            </form>
            </div>
            
        <TheFooter />
        </div>
        
    )
}

export default Profile;