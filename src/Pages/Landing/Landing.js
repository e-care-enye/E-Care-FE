import './Landing.css';
import {Link} from 'react-router-dom';

const Landing = () => {
    return ( 
        <div className="landing">
            <h1>Welcome to E-CARE</h1>
            <h2>Your health is Our number 1</h2>

            <div className="landingbtns">
                <button><Link to="/signin">HOSPITAL</Link></button>
                <button><Link to="/signin">CONSULTS</Link></button>
            </div>
        </div>
     );
}
 
export default Landing;