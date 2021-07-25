import React from "react";
import { Row, Col, Form, Input, Button, Divider } from "antd";
import "./signinStyles.css";
import UserService from "../../services/userService";
const Service = new UserService();

export default function Signin(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailErrorMsg, setEmailErrorMsg] = React.useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = React.useState("");

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };
  const validate = () => {
    let valid = true;
    // validating email address
    if (email.length != 0) {
      setEmailErrorMsg("");
    } else {
      valid = false;
      setEmailErrorMsg("Email is required");
    }
    // validating password
    if (password.length != 0) {
      setPasswordErrorMsg("");
    } else {
      valid = false;
      setPasswordErrorMsg("Password is required");
    }
    return valid;
  };
  const login = () => {
    if (validate()) {
      let data = {
        email: email,
        password: password,
      };
      Service.login(data)
        .then((data) => {
          window.sessionStorage.setItem(
            "accessToken",
            data.data.result.accessToken
          );
          props.history.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.info("Login :: empty data");
    }
  };
  return (
    <React.Fragment>
      <Form name="signupForm" className="signin-form">
        <label htmlFor="">Email</label>
        <Form.Item name="email" validateStatus={emailErrorMsg}>
          <Input className="form-input" onChange={handleEmailInputChange} />
        </Form.Item>
        <label htmlFor="">Password</label>
        <Form.Item name="password" validateStatus={passwordErrorMsg}>
          <Input.Password
            className="form-input-password"
            onChange={handlePasswordInputChange}
          />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            className="submit-button"
            onClick={login}
            block
          >
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
