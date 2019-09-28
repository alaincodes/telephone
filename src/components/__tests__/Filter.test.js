import React from 'react';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from '../Filter';

Enzyme.configure({ adapter: new Adapter() });

describe('Filter component', () => {
	it('renders without crashing', () => {
		// eslint-disable-next-line no-unused-vars
		const wrapper = shallow(<Filter />);
	});

	it('echoes user input', () => {
		const wrapper = shallow(<Filter filterName="hello" />);
		const input = wrapper.find('input');

		input.simulate('change', { target: { value: 'hello' } });
		expect(input.find('input').props().value).toEqual('hello');
	});
});
