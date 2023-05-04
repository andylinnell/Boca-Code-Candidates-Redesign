import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio"
import ThreeThings from "../components/ThreeThings";
import About from "../components/About";
import Social from "../components/Social";
import Footer from "../components/Footer";

export default function Main () {

  return (
    <>
      <div className="top-scene-container">
        <Intro />
        <ThreeThings />
      </div>
      <Portfolio />
      <About />
      <div className="bottom-scene-container">
        <Social />
        <Footer />
      </div>
    </>
  )
}