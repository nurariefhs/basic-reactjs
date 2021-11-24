import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import RoutesApp from './components/layout/RoutesApp';

function App() {
    return (

        <div>
            <Router>
                <Navigation />
                <div style={{ background: '#ffffd1' }}>
                    <h4>Content Here: </h4>
                    <RoutesApp />
                </div>
            </Router>
        </div>

    );
}

export default App;
