import React from "react";
import "./assets/css/style.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Gemas from "./pages/Gemas";
import CollectoinDetail from "./pages/CollectoinDetail";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-right' limit={1}/>
      <Header />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/gemas" element={<Gemas />} />
              <Route exact path="/collections/:collection_name" element={<CollectoinDetail />} />
          </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
