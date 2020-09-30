import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from '../components/login';
import RegistrationPage from '../components/register';
import { BrowserRouter as Router } from 'react-router-dom';

React.useLayoutEffect = React.useEffect;
Enzyme.configure({
	adapter: new Adapter(),
});

describe('Login page components', () => {
	it('get text of sign in', () => {
		const { getByText } = render(
			<Router>
				<LoginPage />
			</Router>
		);
		const linkElement = getByText('Sign in');
		expect(linkElement).toBeInTheDocument();
	});

	it('get text of continue to Gmail', () => {
		const { getByText } = render(
			<Router>
				<LoginPage />
			</Router>
		);
		const linkElement = getByText('to continue to Gmail');
		expect(linkElement).toBeInTheDocument();
	});

	it('find forgot button in the login page', () => {
		const wrapper = shallow(
			<Router>
				<LoginPage />
			</Router>
		);
		expect(wrapper.find('button.ForgotMsg')).toHaveLength(0);
	});

	it('find link registration page link', () => {
		const { getByText } = render(
			<Router>
				<LoginPage />
			</Router>
		);
		const linkElement = getByText(/Sign Up Instead/i);
		expect(linkElement).toBeInTheDocument();
	});
});

describe('Register page components', () => {
	it('get text of create Account', () => {
		const { getByText } = render(
			<Router>
				<RegistrationPage />
			</Router>
		);
		const linkElement = getByText('Create your Google Account');
		expect(linkElement).toBeInTheDocument();
	});

	it('get text of password helper text', () => {
		const { getByText } = render(
			<Router>
				<RegistrationPage />
			</Router>
		);
		const linkElement = getByText('Use 8 or more with mix of letters, numbers and symbol');
		expect(linkElement).toBeInTheDocument();
	});

	it('find forgot button in the login page', () => {
		const wrapper = shallow(
			<Router>
				<RegistrationPage />
			</Router>
		);
		expect(wrapper.find('button.nextButton')).toHaveLength(0);
	});

	it('find link registration page link', () => {
		const { getByText } = render(
			<Router>
				<RegistrationPage />
			</Router>
		);
		const linkElement = getByText(/Sign In Instead/i);
		expect(linkElement).toBeInTheDocument();
	});
});