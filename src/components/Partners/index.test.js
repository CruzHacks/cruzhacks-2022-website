import Enzyme, { render } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Partners from "./index.view"

Enzyme.configure({ adapter: new Adapter() })

describe("Testing Partners", () => {
  it("Partners renders without crashing", () => {
    render(<Partners />)
  })
})
