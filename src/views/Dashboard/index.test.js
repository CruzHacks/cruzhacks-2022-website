import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashboardView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Dashboard View', () => {
  it('Dashboard Page renders without crashing', () => {
    shallow(<DashboardView />);
  });
});
