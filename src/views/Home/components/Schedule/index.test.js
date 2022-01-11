import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Schedule from '.';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Schedule', () => {
  it('Schedule Page renders without crashing', () => {
    shallow(<Schedule />);
  });
});
