import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddAnnouncement from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing AddAnnouncement Component', () => {
  it('AddAnnouncement renders without crashing', () => {
    shallow(<AddAnnouncement />);
  });
});