import React, { useState, useEffect, useRef, useContext } from "react";
import "./assets/css/style.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { Store } from "./store/Store";

function App() {
  return (

    <BrowserRouter>
      <ToastContainer position='top-right' limit={1}/>
      <Header />
          <Routes>
              <Route exact path="/" element={<Home />} />
          </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
