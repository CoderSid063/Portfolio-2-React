import "./app.scss";
import Test from "./components/Test";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Parallax } from "./components/parallex/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
