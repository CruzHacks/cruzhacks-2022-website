import Enzyme, {render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sponsors from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Sponsors', () => {
  it('Sponsors renders without crashing', () => {
    render(<Sponsors />);
  });
});