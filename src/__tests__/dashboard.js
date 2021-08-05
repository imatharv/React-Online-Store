import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "../pages/dashboard/dashboard";
import ProductCard from "../components/productcard/productcard";
import BookDetails from "../components/bookdetails/bookdetails";

Enzyme.configure({ adapter: new Adapter() })

describe("Testing bookstore", () => {
  it("Renders search box in header", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(".ant-input-group-wrapper .ant-input-search").exists()).toBe(false);
  });
  // it("Is products are getting rendered", () => {
  //   const wrapper = shallow(<ProductCard data={{length: 2}} 
  //     bookData={[{ author: "Steve Jobs",
  //                 "bookImage": null,
  //                 "bookName": "Apple",
  //                 "description": "Story about apple products",
  //                 "discountPrice": 0,
  //                 "price": 2000,
  //                 "updatedAt": "2021-05-22T06:54:44.976Z",
  //                 "_id": "60a8aab496edee0015d919dc"}]} 
  //                 />);
  //   expect(wrapper.find(".product-list").exists()).toBe(true);
  // });
  // it("Is add to wishlist redirects", () => {
  //   const component = shallow(
  //     <Router>
  //       <BookDetails />
  //     </Router>
  //   );
  //   const addToWishlist = component.find("#wishlist-btn");
  //   console.log(addToWishlist);
  //   addToWishlist.simulate("click");
  //   component.update();
  //     expect(component.preventDefault).toBeCalled();
  //   // expect(component.find(".wishlist-layout-content").exists()).toBe(true);
  // });
  // it("Is search input updating the state", () => {
  //       const component = shallow(
  //         <Dashboard />
  //       );
  //       const search =  component.find(".search");
  //       const event =  {target  : {value :"Apple"}};
  //       search.simulate("change",event);
  //       component.update();
  //       expect(component.state("searchTerm")).toBe("Apple");
  //   })

it("Renders test div in dashboard", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(".testClass").exists()).toBe(true);
  });

  it("Is clicked on Dummy Button", () => {
    const component = shallow(
        <Dashboard />
    );
    const clickedOnDummyButton = component.find(".onDummyButtonClick");
    //expect(component.find(".onDummyButtonClick").exists()).toBe(true);
    expect(clickedOnDummyButton.exists()).toBe(true);
    // console.log(clickedOnDummyButton);
    clickedOnDummyButton.simulate('click');
    component.update();
    expect(component.dummyFunction).toBeCalled();
    // expect(component.find(".wishlist-layout-content").exists()).toBe(true);
  });


})