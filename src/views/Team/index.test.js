import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TeamView from './index.view';

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Team View', () => {
  it('Team Page renders without crashing', () => {
    shallow(<TeamView />);
  });
});