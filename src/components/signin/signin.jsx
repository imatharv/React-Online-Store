import React from "react";
import { Row, Col, Form, Input, Button, Divider } from "antd";
import "./signinStyles.css";

export default function Signin() {
  return (
    <React.Fragment>
      <Form name="signupForm" className="signin-form">
        <label htmlFor="">Email</label>
        <Form.Item
          name="email"
          // validateStatus=""
          // help=""
        >
          <Input className="form-input" />
        </Form.Item>
        <label htmlFor="">Password</label>
        <Form.Item
          name="password"
          // validateStatus=""
          // help=""
        >
          <Input.Password className="form-input-password" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="submit-button" block>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Divider>OR</Divider>
      <Row justify="space-between" align="middle" className="">
        <Col span={6}>
          <Button className="button-signin-facebook" block>
            Facebook
          </Button>
        </Col>
        <Col span={6}>
          <Button className="button-signin-google" block>
            Google
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
}
