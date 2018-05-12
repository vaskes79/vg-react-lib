import { H1, H2, H3, H4, H5, H6 } from './Title.jsx'

it('should render a H1', () => {
    const wrapper = shallow(
        <H1>Hello Jest!</H1>
    );
    expect(wrapper).toMatchSnapshot();
});
