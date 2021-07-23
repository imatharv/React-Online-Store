import "./bookdetails.css";
import { Divider, Input, Tag, Button, List, Avatar } from "antd";
import { StarFilled, StarTwoTone } from "@ant-design/icons";
import React from "react";

const { TextArea } = Input;

export default function BookDetails() {
  return (
    <React.Fragment>
      <div className="product-image-container">
        <div className="product-image-list"></div>
        <div className="product-image-wrapper"></div>
      </div>
      <div className="product-details-container">
        <div className="product-details-wrapper">
          <h2 className="product-title">Book title</h2>
          <h5 className="product-author">By author name</h5>
        </div>
        <div className="product-rating-wrapper">
          <Tag className="card-tag">
            4.3
            <StarFilled className="rating-icon" />
          </Tag>
          <span className="rating-count">(15)</span>
        </div>
        <div className="product-price-wrapper">
          <span className="discounted-price">1000</span>
          <span className="real-price">1200</span>
        </div>
        <Divider className="product-details-divider" />
        <div className="product-details-wrapper">
          <ul className="product-details">
            <li className="details-title">Book details</li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ut sed similique natus. Eos deleniti voluptatibus,
              officia commodi sequi nobis quasi maxime soluta vel recusandae
              debitis incidunt ea magnam dolores sint porro, quibusdam quas non.
              Deserunt dolorem, fugiat dolorum aut facilis dicta a laboriosam
              iusto. Quod nulla, quia exercitationem reprehenderit magni libero
              earum mollitia ullam temporibus saepe corrupti esse, ducimus
              laudantium nobis suscipit qui corporis asperiores dolores
              molestiae fugiat assumenda facere voluptates. Eius labore quis
              exercitationem facere aspernatur perspiciatis ipsum. Illo ipsum
              maxime tenetur mollitia quae? Quia veritatis eos nisi unde optio
              aut, quis ad saepe ea nemo sequi natus!
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
              <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
                  iusto laboriosam numquam maiores harum deleniti exercitationem
                  dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
