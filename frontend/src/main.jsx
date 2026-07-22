import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/styles.css";
import "./assets/css/cards.css";
import "./assets/css/control.css";
import Buy from "./routes/Buy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
		<Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/buy" element={<Buy />}></Route>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  );		
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
