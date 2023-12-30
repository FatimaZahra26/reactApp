import { useState } from "react";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FeaturedLocations from "./components/Featured/FeaturedLocations";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";

import { Reviews } from "./components/Reviews/Reviews";
import Food from "./components/Food/Food";

function App() {
  const [sectionInView, setSectionInView] = useState("");

  return (
    <div className="App">
      <Header sectionInView={sectionInView} />
      <Home setSectionInView={setSectionInView} />
      <FeaturedLocations setSectionInView={setSectionInView} />
       <Food setSectionInView={setSectionInView} />
      <About setSectionInView={setSectionInView} />
      <Gallery setSectionInView={setSectionInView} />
      <Reviews setSectionInView={setSectionInView} />
      <Contact setSectionInView={setSectionInView} />
      
      <Footer />
    </div>
  );
}

export default App;
