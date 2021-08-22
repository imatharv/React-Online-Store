import React from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router";
import "./signupStyles.css";
import UserService from "../../services/userService";
const Service = new UserService();

export default function Signup(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [nameErrorMsg, setNameErrorMsg] = React.useState("");
  const [emailErrorMsg, setEmailErrorMsg] = React.useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = React.useState("");
  const history = useHistory();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log("Name: ", values.name);
  };

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePhoneNumberInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const validate = () => {
    let valid = true;
    // validating name
    if (name.length != 0) {
      if (/^[A-Za-z]{1}[a-z]{2,}/.test(name)) {
        setNameErrorMsg("");
      } else {
        valid = false;
        setNameErrorMsg("Only alphabates are allowed");
      }
    } else {
      valid = false;
      setNameErrorMsg("Full name is required");
    }
    // validating email address
    if (email.length != 0) {
      if (
        /^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*@[A-Za-z0-9]+.[A-Za-z]{2,4}([.][A-Za-z]{2})*$/.test(
          email
        )
      ) {
        setEmailErrorMsg("");
      } else {
        valid = false;
        setEmailErrorMsg("Kindly recheck your email");
      }
    } else {
      valid = false;
      setEmailErrorMsg("Email is required");
    }
    //validating password
    if (password.length != 0) {
      if (
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(
          password
        )
      ) {
        setPasswordErrorMsg("");
      } else {
        valid = false;
        setPasswordErrorMsg(
          "Password should be alphanumeric (min 8 charectors, atleast one alphabate, one number & one special charector)"
        );
      }
    } else {
      valid = false;
      setPasswordErrorMsg("Password is required");
    }
    return valid;
  };
  const register = () => {
    if (validate()) {
      console.log("Registration api call");
      let data = {
        fullName: name,
        email: email,
        password: password,
        phone: phoneNumber,
      };
      Service.registration(data)
        .then((data) => {
          history.push("/account/signin");
        })
        .catch((error) => {
          console.log("Data posting error: ", error);
        });
    } else {
      console.info("Register :: empty data");
    }
  };
  return (
    <React.Fragment>
      <Form
        name="signupForm"
        form={form}
        onFinish={onFinish}
        scrollToFirstError
      >
        <label htmlFor="">Full name</label>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input className="form-input" onChange={handleNameInputChange} />
        </Form.Item>
        <label htmlFor="">Email</label>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input className="form-input" onChange={handleEmailInputChange} />
        </Form.Item>
        <label htmlFor="">Password</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className="form-input-password"
            onChange={handlePasswordInputChange}
          />
        </Form.Item>
        <label htmlFor="">Phone number</label>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
              whitespace: true,
            },
          ]}
        >
          <Input
            className="form-input"
            onChange={handlePhoneNumberInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="submit-button"
            //onClick={register}
            block
          >
            Signup
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}
