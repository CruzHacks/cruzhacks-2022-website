import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResendVerification from '.';
import "../../__mocks__/api";

jest.mock("../../utils/Api", () => jest.fn())

Enzyme.configure({ adapter: new Adapter() })

describe('Testing ResendVerification', () => {
  it('ResendVerification Page renders without crashing', () => {
    shallow(<ResendVerification />);
  });
});
