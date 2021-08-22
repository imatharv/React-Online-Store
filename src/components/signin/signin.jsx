import React from "react";
import { Row, Col, Form, Input, Button, Divider } from "antd";
import "./signinStyles.css";
import UserService from "../../services/userService";
import { useHistory } from "react-router";
const Service = new UserService();

export default function Signin(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };
  // const validate = () => {
  //   let valid = true;
  //   // validating email address
  //   if (email.length != 0) {
  //     //setEmailErrorMsg("");
  //   } else {
  //     valid = false;
  //     //setEmailErrorMsg("Email is required");
  //   }
  //   // validating password
  //   if (password.length != 0) {
  //     //setPasswordErrorMsg("");
  //   } else {
  //     valid = false;
  //     //setPasswordErrorMsg("Password is required");
  //   }
  //   return valid;
  // };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let data = {
      email: values.email,
      password: values.password,
    };
    Service.login(data)
      .then((data) => {
        window.sessionStorage.setItem(
          "accessToken",
          data.data.result.accessToken
        );
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const login = () => {
  //   if (validate()) {
  //     let data = {
  //       email: email,
  //       password: password,
  //     };
  //     Service.login(data)
  //       .then((data) => {
  //         window.sessionStorage.setItem(
  //           "accessToken",
  //           data.data.result.accessToken
  //         );
  //         history.push("/dashboard");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     console.info("Login :: empty data");
  //   }
  // };
  return (
    <React.Fragment>
      <Form name="signinForm" className="signin-form" onFinish={onFinish}>
        <label htmlFor="">Email</label>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail",
            },
            {
              required: true,
              message: "Please input your E-mail",
            },
          ]}
        >
          <Input className="form-input" />
        </Form.Item>
        <label htmlFor="">Password</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
          hasFeedback
        >
          <Input.Password className="form-input-password" />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            className="submit-button"
            //onClick={login}
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
