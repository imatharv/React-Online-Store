import "./dashboardStyles.css";
import React, { useEffect } from "react";
import { Switch, useHistory, Route } from "react-router-dom";
import ProductService from "../../services/productService";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ProductCard from "../../components/productcard/productcard";
import ProductDetails from "../../components/bookdetails/bookdetails";
import CartPage from "../../components/cartPage/cartPage";
import WishlistPage from "../../components/wishlist/wishlist";
import OrderDetails from "../../components/orderDetails/orderDetails";
import { Layout, Menu, Dropdown, Badge } from "antd";
import { connect } from "react-redux";
// import store from "../../store/store";

const { Header, Content, Footer } = Layout;
const Service = new ProductService();

function Dashboard(props) {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cartItemsCount, setCartItemsCount] = React.useState("");

  let history = useHistory();

  useEffect(() => {
    getProducts();
    getCartData();
  }, [props]);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm.length == "") {
      setFilteredProducts(products);
    }
    if (searchTerm.length >= 3) {
      let productData = [];
      Object.keys(products).map((i) => {
        // creating array of number of objects in products
        let key = i;
        productData.push(products[key]); //  pushing a perticular product at a perticular position...
        const books = productData.filter((product) => {
          return product.bookName
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setFilteredProducts(books);
      });
    } else {
      setFilteredProducts(products);
    }
  };
  const getProducts = () => {
    Service.getProduct()
      .then((data) => {
        setProducts(data.data.result);
        setFilteredProducts(data.data.result);
      })
      .catch((error) => {
        console.log("Data fetch error: ", error);
      });
  };
  const getCartData = () => {
    const token = window.sessionStorage.getItem("accessToken");
    Service.getCartItems(token)
      .then((data) => {
        setCartItemsCount(data.data.result.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logout = () => {
    sessionStorage.clear();
    history.push("/account/signin");
  };
  const handleClickNavigateToCart = () => {
    history.push("/dashboard/cart");
  };
  const handleClickNavigateToWishlist = () => {
    history.push("/dashboard/wishlist");
  };
  const handleClickNavigateToHome = () => {
    history.push("/dashboard");
  };

  return (
    <Layout className="layout">
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div
          className="logo"
          onClick={handleClickNavigateToHome}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://image.flaticon.com/icons/png/512/327/327116.png"
            alt="Logo"
          />
          <h3>Bookstore</h3>
        </div>
        <span className="ant-input-group-wrapper ant-input-search">
          <span className="ant-input-wrapper ant-input-group">
            <span className="ant-input-group-addon">
              <button
                type="button"
                className="ant-btn ant-btn-icon-only ant-input-search-button"
              >
                <span
                  role="img"
                  aria-label="search"
                  className="anticon anticon-search"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="search"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                  </svg>
                </span>
              </button>
            </span>
            <input
              placeholder="input search text"
              className="ant-input search"
              type="text"
              onChange={handleSearchInput}
            />
          </span>
        </span>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key={"profile"}>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={logout} key={"logout"}>
                    Logout
                  </Menu.Item>
                  <Menu.Item
                    onClick={handleClickNavigateToWishlist}
                    key={"wishlist"}
                  >
                    Wishlist
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
            >
              <div>
                Profile <UserOutlined />
              </div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key={"order"}>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={handleClickNavigateToCart} key={"cart"}>
                    Cart
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
            >
              <div className="cart-items-count">
                <Badge count={cartItemsCount}>
                  <div
                    style={{
                      borderRadius: "2px",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  >
                    Cart <ShoppingCartOutlined />
                  </div>
                </Badge>
              </div>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "0 50px", marginTop: 50 }}>
        <Switch>
          <Route
            exact
            path="/dashboard"
            component={() => <ProductCard data={filteredProducts} />}
          />
          <Route path="/dashboard/product" component={ProductDetails} />
          <Route path="/dashboard/cart" component={CartPage} />
          <Route path="/dashboard/wishlist" component={WishlistPage} />
          <Route path="/dashboard/order" component={OrderDetails} />
        </Switch>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Copyright ©2020 Bookstore Private Limited. All rights Reserved.
      </Footer>
    </Layout>
  );
}

function mapStateToProps(state) {
  //console.log(state.cartItemsReducer.clicked);
  return { cartItems: state.cartItemsReducer.clicked };
}
export default connect(mapStateToProps)(Dashboard);
