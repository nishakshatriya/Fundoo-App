import React from 'react';
import RegisterPage from './components/register.jsx';
import ResetPage from './components/reset.jsx';
import LoginPage from './components/login.jsx';
import LoginPageNext from './components/forgotPassword';
import Dashboard from './components/dashboard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Switch>
						<Route path={'/dashboard'} exact component={Dashboard}></Route>
						<Route path={'/resetpassword/:token'}  component={ResetPage}></Route>
						<Route path={'/createAccount'}  component={RegisterPage}></Route>
						<Route path={'/forgotPassword'}  component={LoginPageNext}></Route>
						<Route path={'/'} exact component={LoginPage}></Route>
					</Switch>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
