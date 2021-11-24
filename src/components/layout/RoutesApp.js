import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import User from '../../pages/User';
import Table from '../../pages/Table';

function RoutesApp() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/table" element={<Table />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/user/:firstName/:lastName" element={<User />} />
            </Routes>
        </>
    );
}
export default RoutesApp;