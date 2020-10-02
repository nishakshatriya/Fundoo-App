import React from 'react';
import RegisterPage from './components/register.jsx';
import ResetPage from './components/reset.jsx';
import LoginPage from './components/login.jsx';
import LoginPageNext from './components/forgotPassword';
import Dashboard from './components/dashboard';
import { Switch, Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import Drawer from './components/drawer';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<StaticRouter>
					<Switch>
					<Route path={'/drawer'} exact component={Drawer}></Route>
						<Route path={'/dashboard'} exact component={Dashboard}></Route>
						<Route path={'/resetpassword/:token'} exact component={ResetPage}></Route>
						<Route path={'/createAccount'} exact component={RegisterPage}></Route>
						<Route path={'/forgotPassword'} exact component={LoginPageNext}></Route>
						<Route path={'/'} exact component={LoginPage}></Route>
					</Switch>
				</StaticRouter>
			</header>
		</div>
	);
}

export default App;
