import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/user/userSlice";

const Login = () => {
  /* assigning the navigate function */
  const navigate = useNavigate();
  const dispatch = useDispatch();
//  ******************************************************





  const onFinish = (values) => {
    console.log("Success:", values);
    // localStorage.setItem("user", JSON.stringify(values));

    dispatch(updateUser(values.username))

    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="grid place-items-center h-screen">
      <div className="shadow-2xl max-w-xl rounded-lg w-full p-8  bg-orange-300">
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <h3
              style={{
                fontFamily: "cursive",
                marginBottom: "15px",
                fontSize: "2rem",
              }}
            >
              Welcome
            </h3>
            <img
              src="https://th.bing.com/th/id/OIP.PVls4wPtTQpKDKGDGLnhewHaHa?rs=1&pid=ImgDetMain"
              alt="image"
              className="max-w-xs w-full"
            />
          </div>
          <div className="pt-14 border-y-orange-700">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}

                
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" className="w-full">
                  Log In{" "}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
