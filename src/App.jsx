import "./app.scss";
import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Pareleal</section>
      <section>Service</section>
      <section>Portfolio1</section>
      <section>POrt2</section>
      <section>Port3</section>
      <section>Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
