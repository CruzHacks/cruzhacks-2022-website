import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PortalView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Portal View', () => {
  it('Portal Page renders without crashing', () => {
    shallow(<PortalView />);
  });
});
