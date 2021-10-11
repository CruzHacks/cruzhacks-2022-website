import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Analytics from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Analytics', () => {
  it('Analytics renders without crashing', () => {
    shallow(<Analytics />);
  });
});
