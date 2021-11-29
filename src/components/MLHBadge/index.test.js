import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MLHBadge from './MLHBadge';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing MLHBadge', () => {
  it('MLHBadge Page renders without crashing', () => {
    shallow(<MLHBadge />);
  });
});