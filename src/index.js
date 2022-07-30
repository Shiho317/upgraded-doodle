import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./components/store/Store";
import { GlobalStyles } from "./styles/Globalstyles";
import ItemDetails from "./components/store/ItemDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  </>
);
