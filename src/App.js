import React from "react";
import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";
// build almadan önce nav kısmını beyaz yap
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
    </>
  );
}

export default App;
