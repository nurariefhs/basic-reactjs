import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import changeName from '../actions/changeName';

function About() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log('location', location);
    console.log('navigate', navigate);

    const name = useSelector(state => state.name)
    const dispatch = useDispatch();
    return (
        <div>
            <div>About {name}</div>
            <button onClick={() => dispatch(changeName('Moka'))}>Change Name with Moka</button>
        </div>

    );
}
export default About;