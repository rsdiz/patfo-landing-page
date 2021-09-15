import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Client from "./components/Client";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [patfoData, setpatfoData] = useState({});
  useEffect(() => {
    setpatfoData(JsonData);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Header data={patfoData.Header} />
      <Features data={patfoData.Features} />
      <About data={patfoData.About} />
      <Services data={patfoData.Services} />
      <Gallery data={patfoData.Gallery} />
      <Testimonials data={patfoData.Testimonials} />
      <Client data={patfoData.Client} />
      <Contact data={patfoData.Contact} />
    </div>
  );
}

export default App;
