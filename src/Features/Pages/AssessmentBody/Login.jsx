import React, { useState } from "react";
import axios from "axios";
import image from "../../../assets/poorpeople.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data : ", formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/aa/login",
        formData
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="sm:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-green-800">Login</h2>
          <p className="text-sm mt-4 text-start text-green-800">
            If you are already a member, easily login
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 mt-8 rounded-xl border"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 rounded-xl border"
            />
            <button type="submit" className="bg-green-800 rounded-2xl text-white py-2">
              Login
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
            Login with Google
          </button>
          <p className="mt-5 text-xs border-b py-4">Forgot your password</p>
          <div className="mt-3 text-xs flex justify-between items-center">
            <p>Don't have an account</p>
            <Link to="/registration">
              <button className="py-2 px-5 bg-white border rounded-xl">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:block hidden w-1/2">
          <img src={image} alt="" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Login;
