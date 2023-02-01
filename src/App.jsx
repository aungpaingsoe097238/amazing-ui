import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
