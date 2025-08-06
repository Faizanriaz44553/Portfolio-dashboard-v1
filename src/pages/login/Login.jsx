// src/pages/Login.jsx
import React from "react";
import { Form, Input, Button, Card } from "antd";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f0f2f5",
    }}>
      <Card title="Login" style={{ width: 350, boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Item label="Email">
            <Input {...register("email", { required: true })} />
          </Form.Item>

          <Form.Item label="Password">
            <Input.Password {...register("password", { required: true })} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
        </form>
      </Card>

      {/* Toast Container */}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;