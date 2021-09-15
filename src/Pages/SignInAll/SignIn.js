import SignInBtn from '../../Components/Buttons/SignInBtn/SignInBtn';
import './SignIn.css';
import {Link} from 'react-router-dom';

const SignIn = () => {
    return ( 
        <div className="signin">
            <div className="signinform">
                <h2>E-Care</h2>
                <form action="">
                    <input type="email" name="Email" id="" placeholder="Email Address" />

                    <input type="password" name="Password" id="" placeholder="Password" />

                    <div className="signinbtns">
                    <SignInBtn />
                    </div>
                </form>
                <h4>Don’t have an account? <Link to ="/signup">Sign Up</Link></h4>
            </div>
        </div>
     );
}
 
export default SignIn;