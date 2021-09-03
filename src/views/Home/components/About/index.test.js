import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from '.';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing About', () => {
  it('About Page renders without crashing', () => {
    shallow(<About />);
  });
});
