import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Home />
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Products />
        </div>
      </main>
    </div>
  );
};

export default App;
