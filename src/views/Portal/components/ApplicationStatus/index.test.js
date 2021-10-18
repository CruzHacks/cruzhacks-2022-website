import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApplicationStatus from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Portal View ApplicationStatus Component', () => {
  it('ApplicationStatus Component renders without crashing', () => {
    shallow(<ApplicationStatus />);
  });
});
