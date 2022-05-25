import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Draggable, { DraggableCore } from "react-draggable";

function App() {
  return (
    <div>
      <Header />
      <Nav/>
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
