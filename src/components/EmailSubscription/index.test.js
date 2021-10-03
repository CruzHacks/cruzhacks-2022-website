import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmailSubscription from '.';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing EmailSubscription', () => {
  it('EmailSubscription Component renders without crashing', () => {
    shallow(<EmailSubscription />);
  });
});
