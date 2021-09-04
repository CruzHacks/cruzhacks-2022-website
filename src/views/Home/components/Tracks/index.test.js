import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tracks from '.';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Tracks', () => {
  it('Tracks Page renders without crashing', () => {
    shallow(<Tracks />);
  });
});
