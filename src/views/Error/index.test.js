import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Error View', () => {
  it('Error Page renders without crashing', () => {
    shallow(<ErrorView />);
  });
});