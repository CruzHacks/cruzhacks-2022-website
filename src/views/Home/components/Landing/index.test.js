import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Landing', () => {
  it('Landing Page renders without crashing', () => {
    shallow(<LandingView />);
  });
});
