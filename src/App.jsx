import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;