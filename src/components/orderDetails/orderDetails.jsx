import "./orderDetailsStyles.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../../assets/images/fireworks.png";

export default function OrderDetails() {
  const [orderData, setOrderData] = React.useState([]);
  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
    // setOrderData(location.state.data);
    // console.log(location.state.data);
  }, [location]);
  return (
    <div className="order-details-container">
      <div className="order-details-wrapper">
        <div className="title-wrapper">
          <img className="image" src={image} alt="bgimage" />
          <div className="image-overlay">
            <h1 className="title">Order placed successfully</h1>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="order-info">
            <p className="info-text">
              hurray!!! your order is confirmed the order id is #123456 save the
              order id for further communication..
            </p>
          </div>
        </div>
        <div className="company-info-wrapper">
          <table className="table table-borderless">
            <thead className="thead-light">
              <tr>
                <th>Email us</th>
                <th>Contact us</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>admin@bookstore.com</td>
                <td>+91 8163475881</td>
                <td className="address-container">
                  42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                  Kumarakom restaurant, HSR Layout, Bangalore 560034
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="action-button-wrapper">
          <button type="button" className="action-button">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}
