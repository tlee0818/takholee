import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import { useInView } from "react-intersection-observer";

function App() {
  const [headerRef, headerInView, headerEntry] = useInView({
    threshold: 0.5,
  });
  const [aboutRef, aboutInView, aboutEntry] = useInView({
    threshold: 0.5,
  });
  const [experienceRef, experienceInView, experienceEntry] = useInView({
    threshold: 0.5,
  });
  const [projectsRef, projectsInView, projectsEntry] = useInView({
    threshold: 0.1,
  });
  const [contactsRef, contactsInView, contactsEntry] = useInView({
    threshold: 0.5,
  });

  const inViews = [headerInView, aboutInView, experienceInView, projectsInView, contactsInView]
  
  return (
    <div>
      <div ref = {headerRef}>
        <Header />
      </div>
      <Nav inViews={inViews} />

      <div ref = {aboutRef}>
        <About />
      </div>
      <div ref = {experienceRef}>
        <Experience />
      </div>
      <div ref = {projectsRef}>
        <Projects />
      </div>
      <div ref = {contactsRef}>
        <Contacts />
      </div>

      <Footer />
    </div>
  );
}

export default App;
