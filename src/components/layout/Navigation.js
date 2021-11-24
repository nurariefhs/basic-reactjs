import { Link } from 'react-router-dom';
function Navigation() {
    return (

        <div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/table">
                    <li>Table</li>
                </Link>

                <Link to={{
                    pathname: '/about',
                    state: { from: 'root' }
                }}>
                    <li>About</li>
                </Link>

                <Link to="/user/Miko/Moka">
                    <li>User</li>
                </Link>
            </ul>
        </div>

    );
}

export default Navigation;