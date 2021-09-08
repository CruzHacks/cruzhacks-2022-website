import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FAQ from '.';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing FAQ', () => {
  it('FAQ Page renders without crashing', () => {
    shallow(<FAQ />);
  });
});
