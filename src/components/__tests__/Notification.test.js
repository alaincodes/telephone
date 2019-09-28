import React from 'react';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notification from '../Notification';

Enzyme.configure({ adapter: new Adapter() });

describe('Notification component', () => {
	it('renders without crashing', () => {
		// eslint-disable-next-line no-unused-vars
		const wrapper = shallow(<Notification notification={true} />);
	});
});
