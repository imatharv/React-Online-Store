import React from "react";
import { Form, Input, Button } from "antd";
import "./signupStyles.css";

export default function Signup() {
  return (
    <React.Fragment>
      <Form name="signupForm">
        <label htmlFor="">Full name</label>
        <Form.Item
        // label="Full name"
        // validateStatus=""
        // help=""
        >
          <Input className="form-input" />
        </Form.Item>
        <label htmlFor="">Email</label>
        <Form.Item
          // label="Eamil"
          name="email"
          // validateStatus=""
          // help=""
        >
          <Input className="form-input" />
        </Form.Item>
        <label htmlFor="">Password</label>
        <Form.Item
          // label="Password"
          name="password"
          // validateStatus=""
          // help=""
        >
          <Input.Password className="form-input-password" />
        </Form.Item>
        <label htmlFor="">Phone number</label>
        <Form.Item
        //label="Phone number"
        // validateStatus=""
        // help=""
        >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
        >
          <Button htmlType="submit" className="submit-button" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}
