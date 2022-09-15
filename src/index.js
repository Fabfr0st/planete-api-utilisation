import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Articles from "./Articles";
import Planete from "./Planete";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/articles" element={<Articles />} />
          <Route path="/planete/:planeteId" element={<Planete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
