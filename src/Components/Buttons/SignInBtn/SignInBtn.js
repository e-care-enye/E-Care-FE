import './SignInBtn.css';
import { Link } from 'react-router-dom';

const SignInBtn = () => {
    return ( 
        <div className="signinbtn">
            <Link to ="/patdash"><button>Log In as Patient</button></Link>
            <Link to ="/hosdash"><button>Log In as Admin</button></Link>
            <Link to ="/pracdash"><button>Log In as Practitioner</button></Link>
        </div>
     );
}
 
export default SignInBtn;