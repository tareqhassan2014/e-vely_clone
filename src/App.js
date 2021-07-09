import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import SigninSignup from './Components/SigninSignup/SigninSignup';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <SigninSignup />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
