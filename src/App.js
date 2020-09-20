import React from 'react';
import RegisterPage from './components/register.jsx';
import LoginPage from './components/login.jsx';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Switch>
						<Route path={'/'} exact component={RegisterPage}></Route>
            <Route path={'/login'} exact component={LoginPage}></Route>
					</Switch>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
