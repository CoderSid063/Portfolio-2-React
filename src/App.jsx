import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Parallax } from "./components/parallex/Parallax";
import { Portfolio } from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
