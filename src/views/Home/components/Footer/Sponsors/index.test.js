import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sponsors from '.';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Sponsors', () => {
  it('Sponsor Page renders without crashing', () => {
    shallow(<Sponsors />);
  });
});
