import "./dashboardStyles.css";
import React, { useEffect } from "react";
import ProductService from "../../services/productService";
import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ProductCard from "../../components/productcard/productcard";
import ProductDetails from "../../components/bookdetails/bookdetails";

const { Header, Content, Footer } = Layout;
const Service = new ProductService();

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default function Dashboard() {
  const [data, setData] = React.useState([]);
  console.log(data.length);
  const getProducts = () => {
    console.log("Get products API call");
    // const token = window.sessionStorage.getItem("accessToken");
    Service.getProduct()
      .then((data) => {
        console.log(data.data.result);

        setData(data.data.result);
      })
      .catch((error) => {
        console.log("Data fetch error: ", error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Layout className="layout">
      <Header
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="logo">
          <img
            src="https://image.flaticon.com/icons/png/512/327/327116.png"
            alt="Logo"
          />
          <h3>Bookstore</h3>
        </div>
        {/* <Search placeholder="input search text" style={{ width: 400 }} /> */}
        <span
          className="ant-input-group-wrapper ant-input-search"
          style={{ width: "400px" }}
        >
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
              className="ant-input"
              type="text"
              value=""
            />
          </span>
        </span>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Dropdown overlay={menu} placement="bottomRight">
              <div>
                Profile <UserOutlined />
              </div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={menu} placement="bottomRight">
              <div>
                Cart <ShoppingCartOutlined />
              </div>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 50 }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          className="site-layout-heading"
        >
          <Breadcrumb.Item>
            <h1>Books</h1>
            <span className="product-count">{data.length}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          {/* <ProductCard data={data} /> */}
          <ProductDetails data={data} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Copyright ©2020 Bookstore Private Limited. All rights Reserved.
      </Footer>
    </Layout>
  );
}
