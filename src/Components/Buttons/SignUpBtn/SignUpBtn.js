import './SignUpBtn.css';
import { Link } from 'react-router-dom';


const SignUpBtn = () => {
    return ( 
        <div className="signupbtn">
            <Link to ="/select">
            <button>Register</button>
            </Link>
        </div>
     );
}
 
export default SignUpBtn;