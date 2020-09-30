import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from '../components/login';



React.useLayoutEffect = React.useEffect;
Enzyme.configure({
    adapter: new Adapter()
});

describe('Sign In', () => {
    it('Should be true', () => {
        const wrapper = render(<LoginPage/>);
        const fields = wrapper.find('root');
        console.log(fields);
        expect(fields).length.toEqual(1);
    });
});