import './Sidebar.css';


const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="up">
                <div className="top">
                    <h1>E-Care</h1>
                </div>
                <div className="mid">
                    <h3 className="highlight">Dashboard</h3>
                    <h3>Profile</h3>
                    <h3>Appointments</h3>
                    <h3>Prescriptions</h3>
                    <h3>Medical History</h3>
                </div>
            </div>
            <div className="bottom">
            <h3>Settings</h3>
            <h3>Logout</h3>
            <h3>Privacy Policy</h3>
            </div>
        </div>
     );
}
 
export default Sidebar;