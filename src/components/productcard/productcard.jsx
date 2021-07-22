import React from "react";
import { Card, Tag } from "antd";
import { StarFilled } from "@ant-design/icons";
import "./productcard.css";

const { Meta } = Card;

export default function ProductCard(props) {
  return (
    <React.Fragment>
      {props.data.map((data) => {
        return (
          <Card
            className="product-card"
            style={{ width: 250 }}
            cover={
              <img
                alt="Book cover"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
              />
            }
          >
            <Meta title={data.bookName} description={data.author} />
            <div className="rating-wrapper">
              <Tag className="card-tag">
                4.3
                <StarFilled className="rating-icon" />
              </Tag>
              <span className="rating-count">(15)</span>
            </div>
            <div className="price-wrapper">
              <span className="discounted-price">{data.discountPrice}</span>
              <span className="real-price">{data.price}</span>
            </div>
          </Card>
        );
      })}
    </React.Fragment>
  );
}
