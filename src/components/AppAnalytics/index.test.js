import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppAnalytics from './AppAnalytics';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing App Analytics', () => {
  it('App Analytics Components renders without crashing', () => {
    shallow(<AppAnalytics />);
  });
});

