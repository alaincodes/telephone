import React from 'react';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PersonForm from './PersonForm';

Enzyme.configure({ adapter: new Adapter() });

describe('PersonForm component', () => {
	test('renders', () => {
		const wrapper = shallow(<PersonForm />);
		expect(wrapper.exists()).toBe(true);
	});

	//  test('user text is echoed', () => {
	// 	const wrapper = shallow(<Filter filterName={() => {}} />);
	// 	wrapper.find('input').simulate('change', { target: { value: 'hello' } });
	// 	expect(wrapper.find('input').props().value).toEqual('hello');
	// });

	// test('when the form is submitted the event is cancelled', () => {
	// 	const wrapper = shallow(<PersonForm />);
	// 	let prevented = false;
	// 	wrapper.find('form').simulate('submit', {
	// 		preventDefault: () => {
	// 			prevented = true;
	// 		},
	// 	});
	// 	expect(prevented).toBe(true);
	// });
});
