import React from "react";
import { Row, Col, Tabs, Image, Card, Button } from "antd";
import { Route } from "react-router-dom";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

const { TabPane } = Tabs;

export default function Access(props) {
  function callback(key) {
    // console.log(key);
  }
  const navigateToSignin = () => {
    props.history.push("/app/signin");
  };
  const navigateToSignup = () => {
    props.history.push("/app/signup");
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
                  //src="../../assets/"
                  src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A85534115-ba16-412e-b646-6dd43d839dd8&params=version%3A0&token=1626925903_da39a3ee_25ce428568888517dfdb9dada9020e3e22d15553&api_key=CometServer1"
                />
                <p> Online book shopping</p>
              </div>
            </Card>
          </Col>
          <Col span={6} className="sign-card-wrapper">
            <Card style={{ width: 300, height: 425 }} className="form-card">
              <div className="sign-form-wrapper">
                {/* <Row
                  className="action-button-wrapper"
                  justify="space-between"
                  align="middle"
                > */}
                <Tabs defaultActiveKey="1" onChange={callback} centered>
                  <TabPane
                    tab={
                      <Col span={6}>
                        <Button
                          type="link"
                          size="large"
                          className="signin-button"
                          onClick={navigateToSignin}
                        >
                          Login
                        </Button>
                        {/* <div className="button-bottom-border button-bottom-border-signin"></div> */}
                      </Col>
                    }
                    key="1"
                  >
                    <Route exact path="/app/signin" component={Signin} />
                  </TabPane>
                  <TabPane
                    tab={
                      <Col span={6}>
                        <Button
                          type="link"
                          size="large"
                          className="signup-button"
                          onClick={navigateToSignup}
                        >
                          Signup
                        </Button>
                        {/* <div className="button-bottom-border button-bottom-border-signup"></div> */}
                      </Col>
                    }
                    key="2"
                  >
                    <Route exact path="/app/signup" component={Signup} />
                  </TabPane>
                </Tabs>
                {/* </Row> */}
                {/* Calling either component */}
                {/* <Route exact path="/app/signup" component={Signup} /> */}
                {/* <Route exact path="/app/signin" component={Signin} /> */}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
