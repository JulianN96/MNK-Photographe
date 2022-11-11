import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Backoffice from "./Backoffice";
import Login from "./Login";
import BOusers from "./BOusers";
import BOsettings from "./BOsettings";
import BOalbums from "./BOalbums";
import BObookings from "./BObookings";
import BOstore from "./BOstore";
import ServicesList from "./ServicesList";
import ServiceDetail from "./ServiceDetail";
import BOservices from "./BOservices";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

<link rel="stylesheet" href="./index.css" />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/backoffice" element={<Backoffice />} />
        <Route path="/backoffice/users" element={<BOusers />} />
        <Route path="/backoffice/settings" element={<BOsettings />} />
        <Route path="/backoffice/albums" element={<BOalbums />} />
        <Route path="/backoffice/bookings" element={<BObookings/>} />
        <Route path="/backoffice/store" element={<BOstore/>} />
        <Route path="/backoffice/services" element={<BOservices/>} />
        <Route path="/services" element={<ServicesList/>} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
