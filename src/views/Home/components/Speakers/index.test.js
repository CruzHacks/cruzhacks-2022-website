import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Speakers from '.';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Speakers', () => {
  it('Speakers Page renders without crashing', () => {
    shallow(<Speakers />);
  });
});
