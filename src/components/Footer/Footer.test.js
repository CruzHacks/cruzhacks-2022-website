import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

const themeMock = {
    bgColor: "black",
    iconFill: "black",
    iconStroke: "black",
    textColor: "black",
    hillColor: "black",
}
const socialsMock = [{
    link: "site",
    Icon: "Icon",
    label: "label",
},]

Enzyme.configure({ adapter: new Adapter() })
describe('Testing Footer', () => {
  it('Footer renders without crashing', () => {
    shallow(<Footer socials={socialsMock} theme={themeMock}/>);
  });
});
