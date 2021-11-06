import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApplicationBackground from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Portal View Background Component', () => {
  it('Background Component renders without crashing', () => {
    shallow(<ApplicationBackground>Children</ApplicationBackground>);
  });
});
