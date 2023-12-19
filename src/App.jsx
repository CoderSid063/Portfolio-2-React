import "./app.scss";
import Test from "./components/Test";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio1</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
