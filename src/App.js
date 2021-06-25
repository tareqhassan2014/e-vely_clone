import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SigninSignup from './Components/SigninSignup/SigninSignup';

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Router>
                <Switch>
                    <Route path="/">
                        <SigninSignup />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
