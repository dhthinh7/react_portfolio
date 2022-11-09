import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Portfolio from "./Component/Experience/Portfolio/Portfolio";
import Skill from "./Component/Experience/Skill";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import Services from "./Component/Services/Services";

function App() {
  return <>
    <Nav />
    <Header />
    <About />
    <Skill />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </>
}

export default App;
