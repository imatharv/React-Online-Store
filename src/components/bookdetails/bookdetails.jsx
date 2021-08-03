import "./bookdetails.css";
import { Divider, Input, Tag, Button, Avatar, Breadcrumb } from "antd";
import { StarFilled, StarTwoTone } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import { connect } from "react-redux";
import ProductService from "../../services/productService";

const Service = new ProductService();
const { Content } = Layout;
const { TextArea } = Input;

export default function BookDetails(props) {
  // const ratingIcons = [
  //   <StarTwoTone />,
  //   <StarTwoTone />,
  //   <StarTwoTone />,
  //   <StarTwoTone />,
  //   <StarTwoTone />,
  // ];
  const [data, setData] = React.useState({});
  const [feedback, setFeedback] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState("");
  const location = useLocation();
  useEffect(() => {
    handleClickGetCustomerFeedback();
    // handleClickGetCustomerFeedback(product_id);
    setData(location.state.data);
    console.log(location.state.data); // result: 'data array'
  }, [location]);
  const validate = () => {
    let valid = true;
    if (rating != 0) {
      valid = true;
    } else {
      valid = false;
    }
    if (comment.length != 0) {
      valid = true;
    } else {
      valid = false;
    }
    return valid;
  };
  const handleCommentInput = (event) => {
    setComment(event.target.value);
  };
  const handleRatingInput = (e, key) => {
    e.preventDefault();
    console.log(key);
    setRating(key);
  };
  const handleClickAddToCart = () => {
    const token = window.sessionStorage.getItem("accessToken");
    const product_id = data._id;
    Service.addToCart(product_id, token)
      .then((data) => {
        console.log(data);
        props.history.push("/dashboard/cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClickAddToWishlist = () => {
    const token = window.sessionStorage.getItem("accessToken");
    const product_id = data._id;
    Service.addWishlistItem(product_id, token)
      .then((data) => {
        console.log(data);
        props.history.push("/dashboard/wishlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClickGetCustomerFeedback = () => {
    const token = window.sessionStorage.getItem("accessToken");
    // const product_id = data._id || id;
    const product_id = data._id;
    Service.getCustomerFeedback(product_id, token)
      .then((data) => {
        console.log(data);
        setFeedback(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClickAddCustomerFeedback = () => {
    if (validate()) {
      const token = window.sessionStorage.getItem("accessToken");
      const product_id = data._id;
      let feedbackData = {
        comment: comment,
        rating: rating,
      };
      Service.postCustomerFeedback(product_id, token, feedbackData)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Empty feedback data");
    }
  };

  return (
    <React.Fragment>
      <div style={{ padding: "0 50px", marginTop: 25 }}>
        <div
          className="action-bar"
          style={{ marginBottom: 25, fontWeight: 500 }}
        >
          <div className="title-wrapper">
            <Breadcrumb
              style={{ marginTop: "16px", marginBottom: "8px" }}
              className="site-layout-heading"
            >
              <Breadcrumb.Item>
                <a href="">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Book</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="product-details-layout-content">
          <div className="flex-col">
            <div className="product-image-container">
              <div className="product-image-list">
                <div>
                  <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
                    className="image-list"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-image-wrapper">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
                  alt=""
                />
              </div>
            </div>
            <div className="action-button-wrapper">
              <Button
                className="add-to-card-btn"
                onClick={handleClickAddToCart}
              >
                Add to cart
              </Button>
              <Button
                className="wishlist-btn"
                onClick={handleClickAddToWishlist}
              >
                Wishlist
              </Button>
            </div>
          </div>
          <div className="product-details-container">
            <div className="product-details-wrapper">
              <h2 className="product-title">{data.bookName}</h2>
              <h5 className="product-author">by {data.author}</h5>
            </div>
            <div className="product-rating-wrapper">
              <Tag className="card-tag">
                4.3
                <StarFilled className="rating-icon" />
              </Tag>
              <span className="rating-count">(15)</span>
            </div>
            <div className="product-price-wrapper">
              <span className="discounted-price">{data.discountPrice}</span>
              <span className="real-price">{data.price}</span>
            </div>
            <Divider className="product-details-divider" />
            <div className="product-details-wrapper">
              <ul className="product-details">
                <li className="details-title">Book details</li>
                <p>{data.description}</p>
              </ul>
            </div>
            <Divider className="product-details-divider" />
            <div className="customer-feedback-wrapper">
              <h3 className="feedback-title">Customer feedback</h3>
              <div className="feedback-form">
                <div className="feedback-ratings-wrapper">
                  <h5 className="ratings-title">Overall ratings</h5>
                  <div className="rating-icons">
                    <StarTwoTone
                      key={1}
                      onClick={(e) => handleRatingInput(e, 1)}
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      key={2}
                      onClick={(e) => handleRatingInput(e, 2)}
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      key={3}
                      onClick={(e) => handleRatingInput(e, 3)}
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      key={4}
                      onClick={(e) => handleRatingInput(e, 4)}
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      key={5}
                      onClick={(e) => handleRatingInput(e, 5)}
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                  </div>
                </div>
                <div className="feedback-text">
                  <TextArea
                    onChange={handleCommentInput}
                    placeholder="Write your review.."
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </div>
                <div className="feedback-submit">
                  <Button
                    type="primary"
                    onClick={handleClickAddCustomerFeedback}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <div className="product-review-list-container">
              <div className="product-review-list-wrapper">
                <div className="avatar-wrapper">
                  <Avatar
                    style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                  >
                    AJ
                  </Avatar>
                </div>
                <div className="review-text-wrapper">
                  <div className="reviewer-name">
                    <h5>Reviewer name</h5>
                  </div>
                  <div className="reviewer-ratings">
                    <StarTwoTone
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                    <StarTwoTone
                      twoToneColor="#ffc107"
                      style={{ marginRight: 3 }}
                    />
                  </div>
                  <div className="review-details">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Et, iusto laboriosam numquam maiores harum deleniti
                      exercitationem dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
            <Button
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={handleButtonClickEvent}
            >
              button
            </Button> 
          */}
        </div>
      </div>
    </React.Fragment>
  );
}
// function mapStateToProps(state) {
//   console.log(state);
//   return { click: state.clicked };
// }
// export default connect(mapStateToProps)(BookDetails);
