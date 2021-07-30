import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Home View', () => {
  it('Home Page renders without crashing', () => {
    shallow(<HomeView />);
  });
});