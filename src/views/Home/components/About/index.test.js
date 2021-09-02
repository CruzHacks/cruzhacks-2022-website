import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing About', () => {
  it('About Page renders without crashing', () => {
    shallow(<AboutView />);
  });
});
