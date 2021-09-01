import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VerifyView from './index.view';
import "../../__mocks__/api";

jest.mock("../../utils/Api", () => jest.fn())

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Verify View', () => {
  it('Verify Page renders without crashing', () => {
    shallow(<VerifyView />);
  });
});
