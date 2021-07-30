import React from "react";
import { Card, Tag, Breadcrumb, Select } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "./productcard.css";

const { Meta } = Card;
const { Option } = Select;

function ProductCard(props) {
  let history = useHistory();
  // const [productData, setProductData] = React.useState([]);
  const handleClickOpenProductDetails = (e, data) => {
    let action = { type: "bookClicked", data: data };
    props.dispatch({ type: "bookClicked", data: data });
    console.log("Asd");
    console.log(props);
    console.log(data);
    history.push({
      pathname: "/dashboard/product",
      state: { data: data },
    });
  };
  return (
    <React.Fragment>
      <div className="action-bar">
        <div className="title-wrapper">
          <Breadcrumb
            style={{ marginTop: "16px", marginBottom: "8px" }}
            className="site-layout-heading"
          >
            <Breadcrumb.Item>
              <h1>Books</h1>
              <span className="product-count">{props.data.length}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="action-wrapper">
          <Select
            defaultValue="relevance"
            //onChange={handleChange}
          >
            <Option value="relevance">Sort by relevance</Option>
            <Option value="price-asc">Price low to high</Option>
            <Option value="proce-desc">Price high to low</Option>
          </Select>
        </div>
      </div>

      <div className="site-layout-content product-list">
        {props.data.map((data) => {
          return (
            <Card
              onClick={(e) => handleClickOpenProductDetails(e, data)}
              className="product-card"
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
      </div>
    </React.Fragment>
  );
}

export default connect()(ProductCard);
//export default ProductCard;
