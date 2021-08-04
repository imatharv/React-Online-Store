import "./cartpage.css";
import { Input, Button, Tooltip, Form, Radio } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Breadcrumb, Select } from "antd";
import { connect } from "react-redux";
import ProductService from "../../services/productService";

const Service = new ProductService();
const { Option } = Select;
const { TextArea } = Input;

function CartPage(props) {
  //const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [addressDetails, setAddressDetails] = React.useState("block");
  const [orderSummary, setOrderSummary] = React.useState("none");
  const [totalCartItems, setTotalCartItems] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [addressType, setAddressType] = React.useState("");

  const handleFullNameInput = (event) => {
    setFullName(event.target.value);
  };
  const handlePhoneNumberInput = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleAddressInput = (event) => {
    setAddress(event.target.value);
  };
  const handleCityInput = (event) => {
    setCity(event.target.value);
  };
  const handleStateInput = (event) => {
    setState(event.target.value);
  };
  const handleAddressTypeInput = (event) => {
    setAddressType(event.target.value);
  };

  const handleIncrement = (e, key) => {
    e.preventDefault();
    console.log("in increase qty api");
    const token = window.sessionStorage.getItem("accessToken");
    cartItems.map((currentItem) => {
      if (currentItem._id === key) {
        if (currentItem.quantityToBuy > 0 && currentItem.quantityToBuy < 3) {
          const cartItem_id = key;
          let qty = currentItem.quantityToBuy + 1;
          let data = {
            quantityToBuy: qty,
          };
          Service.updateCartItemsQuantity(cartItem_id, data, token)
            .then((data) => {
              console.log(data);
              getCartData();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    });
  };
  const handleDecrement = (e, key) => {
    e.preventDefault();
    console.log("in decrease qty api");
    const token = window.sessionStorage.getItem("accessToken");
    cartItems.map((currentItem) => {
      if (currentItem._id === key) {
        if (currentItem.quantityToBuy > 1) {
          const cartItem_id = key;
          let qty = currentItem.quantityToBuy - 1;
          let data = {
            quantityToBuy: qty,
          };
          Service.updateCartItemsQuantity(cartItem_id, data, token)
            .then((data) => {
              console.log(data);
              getCartData();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    });
  };
  const removeCartItem = (e, id) => {
    e.preventDefault();
    const token = window.sessionStorage.getItem("accessToken");
    const cartItem_id = id;
    Service.removeCartItem(cartItem_id, token)
      .then((data) => {
        console.log(data);
        getCartData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCartData = () => {
    const token = window.sessionStorage.getItem("accessToken");
    Service.getCartItems(token)
      .then((data) => {
        props.dispatch({ type: "totalCartItems", data: data });
        console.log(data.data.result);
        //setCartItems(data.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validate = () => {
    let valid = true;
    if (fullName.length != 0) {
      valid = true;
    } else {
      valid = false;
    }
    if (address.length != 0) {
      valid = true;
    } else {
      valid = false;
    }
    if (city.length != 0) {
      valid = true;
    } else {
      valid = false;
    }
    if (phoneNumber.length != 0) {
      valid = true;
    } else {
      valid = false;
    }
    if (state.length != 0) {
      valid = true;
    } else {
      valid = false;
    }
    return valid;
  };
  const customerDetails = () => {
    if (validate()) {
      console.log("cust details api call");
      const token = window.sessionStorage.getItem("accessToken");
      let data = {
        addressType: addressType,
        fullAddress: address,
        city: city,
        state: state,
      };
      Service.putCustomerDetails(data, token)
        .then((data) => {
          console.log(data);
          setOrderSummary("block");
          setAddressDetails("none");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.info("cust details :: empty data");
    }
  };
  const addOrder = () => {
    if (validate()) {
      console.log("add order api call");
      const token = window.sessionStorage.getItem("accessToken");

      let orders = [];
      for (let i = 0; i < cartItems.length; i++) {
        let data = {
          product_id: cartItems[i]._id,
          product_name: cartItems[i].product_id.bookName,
          product_quantity: cartItems[i].quantityToBuy,
          product_price: cartItems[i].product_id.price,
        };
        orders.push(data);
      }
      let data = {
        orders: orders,
      };
      console.log(data);
      Service.addOrder(data, token)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.info("cust details :: empty data");
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    console.log(props.cartItems);
    setTotalCartItems(props.cartItems.length);
    setCartItems(props.cartItems);
  }, [props.cartItems]);

  return (
    <React.Fragment>
      <div className="cart-layout-content">
        <div
          className="action-bar"
          style={{ marginBottom: 25, fontWeight: 500 }}
        >
          <div className="title-wrapper">
            <Breadcrumb
              style={{ marginTop: "16px", marginBottom: "8px" }}
              className="site-layout-heading-cart"
            >
              <Breadcrumb.Item>
                <a href="">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Cart</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="cart-details-wrapper">
          <div className="cart-details-header">
            <div>
              <h4>My cart({totalCartItems})</h4>
            </div>
            <div>
              <Select
                defaultValue="relevance"
                //onChange={handleChange}
              >
                <Option value="relevance">
                  <span>
                    <svg
                      className="location-icon"
                      focusable="false"
                      viewBox="2 -4 17 17"
                      height="17px"
                      width="17px"
                    >
                      <path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path>
                    </svg>
                  </span>
                  Use current location
                </Option>
                <Option value="price-asc">Option 1</Option>
              </Select>
            </div>
          </div>
          {cartItems.map((data, index) => {
            return (
              <div className="cart-details-container" key={index}>
                <div className="product-image-wrapper">
                  <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
                    alt=""
                  />
                </div>
                <div className="product-details-wrapper">
                  <h2 className="product-title">{data.product_id.bookName}</h2>
                  <h5 className="product-author">
                    by {data.product_id.author}
                  </h5>
                  <div className="product-price-wrapper">
                    <span className="discounted-price">
                      {data.product_id.discountPrice}
                    </span>
                    <span className="real-price">{data.product_id.price}</span>
                  </div>
                  <div className="product-quantity-wrapper">
                    <Tooltip title="decrerase">
                      <Button
                        shape="circle"
                        onClick={(e) => handleDecrement(e, data._id)}
                        icon={<MinusOutlined />}
                      />
                    </Tooltip>
                    <Input maxLength={3} placeholder={data.quantityToBuy} />
                    <Tooltip title="increase">
                      <Button
                        shape="circle"
                        onClick={(e) => handleIncrement(e, data._id)}
                        icon={<PlusOutlined />}
                      />
                    </Tooltip>
                    <Button
                      className="remove-button"
                      type="text"
                      onClick={(e) => removeCartItem(e, data._id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="customer-details-wrapper"
          style={{ display: addressDetails }}
        >
          <div className="cart-details-header">
            <div>
              <h4>Customer details</h4>
            </div>
          </div>
          <div className="customer-details-form-container">
            <Form
              //   form={form}
              //   name="register"
              //   onFinish={onFinish}
              scrollToFirstError
            >
              <div className="form-row">
                <div className="form-group">
                  <label>Full name</label>
                  <Form.Item
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input onChange={handleFullNameInput} />
                  </Form.Item>
                </div>
                <div className="form-group">
                  <label>Phone number</label>
                  <Form.Item
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number!",
                      },
                    ]}
                  >
                    <Input onChange={handlePhoneNumberInput} />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row-complete">
                <div className="form-group">
                  <label>Address</label>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your address!",
                      },
                    ]}
                  >
                    <TextArea
                      //   value={value}
                      //   onChange={this.onChange}
                      //   placeholder="Controlled autosize"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                      onChange={handleAddressInput}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City/Town</label>
                  <Form.Item
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your city/town!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input onChange={handleCityInput} />
                  </Form.Item>
                </div>
                <div className="form-group">
                  <label>State</label>
                  <Form.Item
                    name="state"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your state!",
                      },
                    ]}
                  >
                    <Input onChange={handleStateInput} />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row-complete">
                <label>Address type</label>
                <Form.Item name="radio-group">
                  <Radio.Group>
                    <Radio value="Home" onChange={handleAddressTypeInput}>
                      Home
                    </Radio>
                    <Radio value="Work" onChange={handleAddressTypeInput}>
                      Work
                    </Radio>
                    <Radio value="Other" onChange={handleAddressTypeInput}>
                      Other
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="form-row-complete" style={{ textAlign: "right" }}>
                <Button onClick={customerDetails}>Continue</Button>
              </div>
            </Form>
          </div>
        </div>
        <div
          className="order-summary-wrapper"
          style={{ display: orderSummary }}
        >
          <div className="order-summary-header">
            <div>
              <h4>Order summary</h4>
            </div>
          </div>
          {cartItems.map((data) => {
            return (
              <div className="cart-details-container">
                <div className="product-image-wrapper">
                  <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
                    alt=""
                  />
                </div>
                <div className="product-details-wrapper">
                  <h2 className="product-title">{data.product_id.bookName}</h2>
                  <h5 className="product-author">
                    by {data.product_id.author}
                  </h5>
                  <div className="product-price-wrapper">
                    <span className="discounted-price">
                      {data.product_id.discountPrice}
                    </span>
                    <span className="real-price">{data.product_id.price}</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="order-summary-footer">
            <div>
              <Button onClick={addOrder}>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
function mapStateToProps(state) {
  console.log(state.cartItemsReducer.cartItems.data.result);
  return { cartItems: state.cartItemsReducer.cartItems.data.result };
}
export default connect(mapStateToProps)(CartPage);
