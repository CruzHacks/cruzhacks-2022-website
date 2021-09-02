import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StatView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Stats', () => {
  it('Stats Page renders without crashing', () => {
    shallow(<StatView />);
  });
});
