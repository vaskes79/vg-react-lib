import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
// setup enzyme for working with react 16
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


// make for available to different test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
// throw error then get any error
console.error = message => {
   throw new Error(message);
};
