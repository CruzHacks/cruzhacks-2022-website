import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing App', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
});
