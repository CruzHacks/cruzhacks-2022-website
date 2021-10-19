import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApplicationForm from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Portal View ApplicationFrom Component', () => {
  it('ApplicationFrom Component renders without crashing', () => {
    shallow(<ApplicationForm />);
  });
});
