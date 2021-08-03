import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dashboard from "../pages/dashboard/dashboard";

Enzyme.configure({ adapter: new Adapter() })

describe("<Dashboard />", () => {
  it("Renders search box in header", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(".ant-input-search").exists()).toBe(true);
  });
})