import React from "react";
import { Row, Col, Image, Card, Button } from "antd";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

export default function Access() {
  return (
    <div className="sign-page-content">
      <div className="signup-content">
        <Row justify="center" align="middle">
          <Col span={6} className="image-card-wrapper">
            <Card style={{ width: 275 }} className="image-card">
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
          <Col span={6} className="signup-card-wrapper">
            <Card style={{ width: 300, height: 408 }} className="form-card">
              <div className="signup-form-wrapper">
                <Row
                  className="action-button-wrapper"
                  justify="space-between"
                  align="middle"
                >
                  <Col span={6}>
                    <Button type="link" size="large" className="signin-button">
                      Login
                    </Button>
                    {/* <div className="button-bottom-border"></div> */}
                  </Col>
                  <Col span={6}>
                    <Button type="link" size="large" className="signup-button">
                      Signup
                    </Button>
                    <div className="button-bottom-border"></div>
                  </Col>
                </Row>
                {/* Call either component */}
                <Signup />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
