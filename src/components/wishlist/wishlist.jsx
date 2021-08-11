import "./wishlistStyles.css";
import { Input, Button, Tooltip, Form, InputNumber } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Breadcrumb, Select } from "antd";
import ProductService from "../../services/productService";
import { connect } from "react-redux";

const Service = new ProductService();
const { Option } = Select;
const { TextArea } = Input;

function WishlistPage(props) {
  //const [products, setProducts] = React.useState(props.data);
  const [products, setProducts] = React.useState([]);
  const removeWishlistItem = (e, id) => {
    e.preventDefault();
    const token = window.sessionStorage.getItem("accessToken");
    const cartItem_id = id;
    Service.removeWishlistItem(cartItem_id, token)
      .then((data) => {
        console.log(data);
        getWishlistItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getWishlistItems = () => {
    const token = window.sessionStorage.getItem("accessToken");
    Service.getWishlistItems(token)
      .then((data) => {
        setProducts(data.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClickAddToCart = (e, id) => {
    e.preventDefault();
    const token = window.sessionStorage.getItem("accessToken");
    const product_id = id;
    Service.addToCart(product_id, token)
      .then((data) => {
        console.log(data);
        props.dispatch({ type: "addToCartClicked", data: data });
        props.history.push("/dashboard/cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getWishlistItems();
  }, []);
  return (
    <div className="wishlist-layout-content">
      <div className="wishlist-details-wrapper">
        <div className="wishlist-details-header ">
          <div>
            <h3>My wishlist({products.length})</h3>
          </div>
        </div>
        {/* {props.data.map((data, index) => { */}
        {products.map((data, index) => {
          return (
            <div className="wishlist-product-wrapper">
              <div>
                <div className="wishlist-details-container" key={index}>
                  <div className="product-image-wrapper">
                    <img
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
                      alt=""
                    />
                  </div>
                  <div className="product-details-wrapper">
                    <h2 className="product-title">
                      {data.product_id.bookName}
                    </h2>
                    <h5 className="product-author">
                      by {data.product_id.author}
                    </h5>
                    <div className="product-price-wrapper">
                      <span className="discounted-price">
                        {data.product_id.discountPrice}
                      </span>
                      <span className="real-price">
                        {data.product_id.price}
                      </span>
                    </div>
                    <Button
                      className="addToCart-btn"
                      size="small"
                      onClick={(e) =>
                        handleClickAddToCart(e, data.product_id._id)
                      }
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="trash-icon-wrapper">
                <DeleteTwoTone
                  twoToneColor="#d9534f"
                  onClick={(e) => removeWishlistItem(e, data.product_id._id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default connect()(WishlistPage);
