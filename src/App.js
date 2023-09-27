import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import './index';


const App = () => {
  return (
    <section
    >
      <Navbar />
      <div class="spacer"></div>
      <Slider />
      
    </section>
  );
};

export default App;