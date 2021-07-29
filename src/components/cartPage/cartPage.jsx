import "./cartpage.css";
import { Input, Button, Tooltip, Form, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Breadcrumb, Select } from "antd";
import ProductService from "../../services/productService";

const Service = new ProductService();
const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

export default function CartPage() {
  const [products, setProducts] = React.useState([]);

  const handleIncrement = (e, key) => {
    e.preventDefault();

    console.log("in increase qty api");
    const token = window.sessionStorage.getItem("accessToken");
    products.map((currentItem) => {
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
    products.map((currentItem) => {
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
        console.log(data.data.result);
        setProducts(data.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCartData();
  }, []);
  // const [form] = Form.useForm();
  // const onFinish = (values: any) => {
  //   console.log("Received values of form: ", values);
  // };
  return (
    <div className="cart-layout-content">
      <div className="cart-details-wrapper">
        <div className="cart-details-header">
          <div>
            <h4>My cart({products.length})</h4>
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
        {products.map((data, index) => {
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
                <h5 className="product-author">by {data.product_id.author}</h5>
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
      <div className="customer-details-wrapper">
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
                  <Input />
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
                  <Input />
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
                  <Input />
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
                  <Input />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="order-summary-wrapper">
        <div className="order-summary-header">
          <div>
            <h4>Order summary</h4>
          </div>
        </div>
        {products.map((data) => {
          return (
            <div className="cart-details-container">
              <div className="product-image-wrapper">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
                  alt=""
                />
              </div>
              <div className="product-details-wrapper">
                <h2 className="product-title">Product title</h2>
                <h5 className="product-author">by Author Name</h5>
                <div className="product-price-wrapper">
                  <span className="discounted-price">1000</span>
                  <span className="real-price">1200</span>
                </div>
              </div>
            </div>
          );
        })}

        <div className="order-summary-footer">
          <div>
            <Button>Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
