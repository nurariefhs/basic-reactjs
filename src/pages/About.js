import {useLocation, useNavigate} from 'react-router-dom'
function About(){
    const location = useLocation();
    const navigate = useNavigate();

    console.log('location', location);
    console.log('navigate', navigate);

    return (
        <div>About</div>
    );
}
export default About;