import React from "react";
import { Card, Tag, Breadcrumb, Select, Pagination } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "./productcard.css";

const { Meta } = Card;
const { Option } = Select;

function ProductCard(props) {
  let history = useHistory();
  const [booksData, setBooksData] = React.useState(props.data);
  const [sortType, setSortType] = React.useState("");

  const handleSortChange = (e, value) => {
    // setSortType(e.target.value);
    // console.log(e.target.value);
    console.log(value.value);
    switch (value.value) {
      case "price-asc":
        sortPriceLowToHigh();
        break;
      case "price-desc":
        sortPriceHighToLow();
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  };
  const sortPriceLowToHigh = () => {
    console.log("low to high");
    let sortedPriceAsc = booksData.sort(
      (item1, item2) => item1.discountPrice - item2.discountPrice
    );
    console.log(sortedPriceAsc);
    setBooksData(sortedPriceAsc);
  };
  const sortPriceHighToLow = () => {
    console.log("high to low");
    let sortedPriceDesc = booksData
      .sort((item1, item2) => item1.discountPrice - item2.discountPrice)
      .reverse();
    console.log(sortedPriceDesc);
    setBooksData(sortedPriceDesc);
  };
  const handleClickOpenProductDetails = (e, data) => {
    props.dispatch({ type: "bookClicked", data: data });
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
          <Select defaultValue="relevance" onChange={handleSortChange}>
            <Option value="relevance">Sort by relevance</Option>
            <Option value="price-asc">Price low to high</Option>
            <Option value="price-desc">Price high to low</Option>
          </Select>
        </div>
      </div>

      <div className="site-layout-content product-list">
        {booksData.map((data) => {
          return (
            <Card
              key={data._id}
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

      <div className="pagination">
        <Pagination pageSize={6} total={booksData.length} />
      </div>
    </React.Fragment>
  );
}

export default connect()(ProductCard);
//export default ProductCard;
