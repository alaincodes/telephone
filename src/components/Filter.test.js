import React from 'react';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from './Filter';

Enzyme.configure({ adapter: new Adapter() });

describe('Filter component', () => {
	test('renders', () => {
		const wrapper = shallow(<Filter />);
		expect(wrapper.exists()).toBe(true);
	});

	// xtest('user text is echoed', () => {
	// 	const wrapper = shallow(<Filter filterName={() => {}} />);
	// 	wrapper.find('input').simulate('change', { target: { value: 'hello' } });
	// 	expect(wrapper.find('input').props().value).toEqual('hello');
	// });
});
