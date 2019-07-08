import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const app = shallow(<App/>);

it('renders correctly', () => {
	expect(app).toMatchSnapshot();

});


it('initiliazes the `state` with an empty list of gifts', () => {

	expect(app.state().gifts).toEqual([]);
});

it('add a new gift to `state` whenclicking the `add gift`', () => {

	app.find('.btn-add').simulate('click');

	expect(app.state().gifts).toEqual([{id: 1}]);

	
});