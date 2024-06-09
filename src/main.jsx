import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Features/Pages/Home/HomePage";
import RegistrationForm from "./Features/Pages/AssessmentBody/RegistrationForm";
import Login from "./Features/Pages/AssessmentBody/Login";
import Dashboard from "./Features/Pages/AssessmentBody/Dashboard";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="registration" element={<RegistrationForm />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
