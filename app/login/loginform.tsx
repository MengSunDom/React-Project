"use client";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { debounce, throttle } from "@/utils/utils";
import CustomAlert from "@/components/alert"; // 引入自定义 Alert 组件

interface UserForm {
  username: string,
  password: string
}
const LoginForm: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "info" | "warning" | "error">("warning");
  const router = useRouter();

  const users = ["Admin", "Customer", "Seller", "Staff"];

  const onFinish = throttle((values: UserForm) => {
    const { username, password } = values;
    if (users.includes(username) && username === password) {
      localStorage.setItem("user", JSON.stringify({ username }));
      // notification.success(`Welcome, ${username}!`, 3);
      router.push("/dashboard");
    } else {
      setAlertMessage("Invalid username or password.");
      setAlertType("error");
      setAlertVisible(true);
    }
  }, 1000);

  const onFinishFailed = debounce((errorInfo: string) => {
    setAlertMessage("Form submission failed. Please check your input.");
    setAlertType("warning");
    setAlertVisible(true);
  }, 500);

  return (
    <>
      <CustomAlert
        message={alertMessage}
        type={alertType}
        visible={alertVisible}
        duration={2000}
        onClose={() => setAlertVisible(false)}
      />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
