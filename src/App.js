import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./context";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment/Payment";

const promise = loadStripe(
  "pk_test_51KvEVkSGdeu0s1fWcuOOISxp5OBl5CXi0eouy7ZsKc6Ci5Mfn1M97Z4rlEObvYueEbkwnjYPeptFzyA96fVKKOUV00VgL7Tto3"
);
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      {/* <Works /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </div>
  );
}

export default App;
