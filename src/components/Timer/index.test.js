import Enzyme, {render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timer from './Timer';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Timer', () => {
  it('Timer renders without craashing', () => {
    render(<Timer />);
  });
});
