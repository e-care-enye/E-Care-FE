import './SignInBtn.css';
import { Link } from 'react-router-dom';

const SignInBtn = () => {
    return ( 
        <div className="signinbtn">
            <Link to ="/select"><button>Log In</button></Link>
        </div>
     );
}
 
export default SignInBtn;