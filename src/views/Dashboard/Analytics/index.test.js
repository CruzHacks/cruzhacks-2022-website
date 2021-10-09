import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnnouncementsListed from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Lising Announcements', () => {
  it('Dashboard Page renders without crashing', () => {
    shallow(<AnnouncementsListed />);
  });
});