import Header from "@components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "@components/Footer";
import Board from "./Board";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
