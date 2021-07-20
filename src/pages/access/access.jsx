import React from "react";
import { Row, Col, Image, Card, Button } from "antd";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

export default function Access(props) {
  const [isOnLogin, setIsOnLogin] = React.useState(true);
  const [isOnSignup, setIsOnSignup] = React.useState(false);
  const navigateToSignin = () => {
    props.history.push("/app/signin");
    setIsOnLogin(true);
    setIsOnSignup(false);
  };
  const navigateToSignup = () => {
    props.history.push("/app/signup");
    setIsOnSignup(true);
    setIsOnLogin(false);
  };
  return (
    <div className="sign-page-content">
      <div className="sign-content">
        <Row justify="center" align="middle">
          <Col span={6} className="image-card-wrapper">
            <Card style={{ width: 275, height: 355 }} className="image-card">
              <div className="card-image-wrapper">
                <Image
                  width={175}
                  //src="../../ass"
                  src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A7b0eeb81-a918-4f41-9bc2-f508474e79ce&params=version%3A0&token=1626848142_da39a3ee_9f3061e66e371dc66ca6967baa448657f67f8667&api_key=CometServer1"
                />
                <p> Online book shopping</p>
              </div>
            </Card>
          </Col>
          <Col span={6} className="sign-card-wrapper">
            <Card style={{ width: 300, height: 425 }} className="form-card">
              <div className="sign-form-wrapper">
                <Row
                  className="action-button-wrapper"
                  justify="space-between"
                  align="middle"
                >
                  <Col span={6}>
                    <Button
                      type="link"
                      size="large"
                      className={
                        isOnLogin
                          ? "signin-button button-active"
                          : "signin-button button-inactive"
                      }
                      onClick={navigateToSignin}
                    >
                      Login
                    </Button>
                    <div className="button-bottom-border button-bottom-border-signin"></div>
                  </Col>
                  <Col span={6}>
                    <Button
                      type="link"
                      size="large"
                      className={
                        isOnSignup
                          ? "signup-button button-active"
                          : "signup-button button-inactive"
                      }
                      onClick={navigateToSignup}
                    >
                      Signup
                    </Button>
                    <div className="button-bottom-border button-bottom-border-signup"></div>
                  </Col>
                </Row>
                {/* Calling either component */}
                <Route exact path="/app/signup" component={Signup} />
                <Route exact path="/app/signin" component={Signin} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
