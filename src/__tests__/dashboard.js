import Enzyme, { shallow, mount } from "enzyme";
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from "../components/productcard/productcard";
import BookDetails from "../components/bookdetails/bookdetails";
import Dashboard from "../pages/dashboard/dashboard";
import Access from "../pages/access/access";
import { ExceptionMap } from "antd/lib/result";

Enzyme.configure({ adapter: new Adapter() })

describe("Testing dashboard component using enzyme..", () => {
  it("Is search box is getting rendered in header", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(".ant-input-group-wrapper .ant-input-search").exists()).toBe(false);
  });

  it("Is test div getting rendered dashboard", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(".testClass").exists()).toBe(false);
  });

// it("Is clicked on Dummy Button", () => {
//   const component = shallow(
//       <Dashboard />
//   );
//   const clickedOnDummyButton = component.find(".onDummyButtonClick");
//   //expect(component.find(".onDummyButtonClick").exists()).toBe(true);
//   expect(clickedOnDummyButton.exists()).toBe(true);
//   clickedOnDummyButton.simulate('click');
//   component.update();
//   expect(component.dummyFunction).toBeCalled();
// });

//   it('Test dummy button', () => {
//     const mockFunction = jest.fn();
//     mockFunction.mockImplementation(() => {});
//     mockFunction.mockReturnValue('default');
//     const component = shallow(<Dashboard />);
//     component.find('.onDummyButtonClick').simulate('click');
//     expect(mockFunction).toHaveBeenCalled();

//     // const test = shallow(<Dashboard onDummyButtonClick={mockFunction} />)
//     // test.find('Button').simulate('click')
//     // expect(mockFunction).toHaveBeenCalled()
//   })
});

describe("Testing access page using react testing library..", () => {
  window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
  };

  it("After clicking signin(initially), signin form should gets load", () => {
    render(
      <Access />
    ); 
    let signinButton = document.querySelector(".signin-button");
    fireEvent.click(signinButton);
    expect(document.querySelector(".signin")).toBeInTheDocument();
  })

  it("After clicking signin(initially), signup form should not get load", () => {
    render(
      <Access />
    ); 
    let signinButton = document.querySelector(".signin-button");
    fireEvent.click(signinButton);
    expect(document.querySelector(".signup")).not.toBeInTheDocument();
  })

  it("After clicking signup, signup form should gets load", () => {
    render(
      <Access />
    ); 
    let signupButton = document.querySelector(".signup-button");
    fireEvent.click(signupButton);
    expect(document.querySelector(".signup")).toBeInTheDocument();
  })

  it("After clicking signup, signin form should gets load (as initial tab))", () => {
    render(
      <Access />
    ); 
    let signupButton = document.querySelector(".signup-button");
    fireEvent.click(signupButton);
    expect(document.querySelector(".signin")).toBeInTheDocument();
  })

})








  // Testing using mock functions
  // it('Should call a on click function', () => {
  //   const mock = jest.spyOn(Dashboard, 'onDummyButtonClick');
  //   mock.mockImplementation(() => {});
  //   const component = shallow(<Dashboard />);
  //   component.find('.onDummyButtonClick').simulate('click');
  //   expect(mock).toHaveBeenCalled();
  //   mock.mockRestore();
  // });

  // it('Test remove button', () => {
  //   const mockFunction = jest.fn()
  //   const test = shallow(<Dashboard onDummyButtonClick={mockFunction} />)
  //   test.find('Button').simulate('click')
  //   expect(mockFunction).toHaveBeenCalled()
  // });











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