import "./bookdetails.css";
import { Divider, Input, Tag, Button, Avatar } from "antd";
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
  const [data, setData] = React.useState({});
  const location = useLocation();
  useEffect(() => {
    setData(location.state.data);
    console.log(location.state.data); // result: 'data array'
  }, [location]);
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

  // const handleButtonClickEvent = () => {
  //   props.dispatch({ type: "Cart" });
  // };

  return (
    <React.Fragment>
      <Content style={{ padding: "0 50px", marginTop: 50 }}>
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
              <Button className="wishlist-btn">Wishlist</Button>
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
                <p>
                  {data.description}
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus ut sed similique natus. Eos deleniti
                  voluptatibus, officia commodi sequi nobis quasi maxime soluta
                  vel recusandae debitis incidunt ea magnam dolores sint porro,
                  quibusdam quas non. Deserunt dolorem, fugiat dolorum aut
                  facilis dicta a laboriosam iusto. Quod nulla, quia
                  exercitationem reprehenderit magni libero earum mollitia ullam
                  temporibus saepe corrupti esse, ducimus laudantium nobis
                  suscipit qui corporis asperiores dolores molestiae fugiat
                  assumenda facere voluptates. Eius labore quis exercitationem
                  facere aspernatur perspiciatis ipsum. Illo ipsum maxime
                  tenetur mollitia quae? Quia veritatis eos nisi unde optio aut,
                  quis ad saepe ea nemo sequi natus! */}
                </p>
              </ul>
            </div>
            <Divider className="product-details-divider" />
            <div className="customer-feedback-wrapper">
              <h3 className="feedback-title">Customer feedback</h3>
              <div className="feedback-form">
                <div className="feedback-ratings-wrapper">
                  <h5 className="ratings-title">Overall ratings</h5>
                  <div className="rating-icons">
                    <StarTwoTone />
                    <StarTwoTone />
                    <StarTwoTone />
                    <StarTwoTone />
                    <StarTwoTone />
                  </div>
                </div>
                <div className="feedback-text">
                  <TextArea
                    placeholder="Write your review.."
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </div>
                <div className="feedback-submit">
                  <Button type="primary">Submit</Button>
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
                    <StarTwoTone />
                    <StarTwoTone />
                    <StarTwoTone />
                    <StarTwoTone />
                    <StarTwoTone />
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
      </Content>
    </React.Fragment>
  );
}
// function mapStateToProps(state) {
//   console.log(state);
//   return { click: state.clicked };
// }
// export default connect(mapStateToProps)(BookDetails);
