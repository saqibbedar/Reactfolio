import { Navbar, Footer } from "./components/components.js";
import { About, Education, Skills, Services, Projects, Contact, Certificates } from "./pages/pages.js";

const App = () => {
  return (
    <div className=" selection:bg-[#fedf89] selection:text-[#373f51]">
      <Navbar />
      <div className="relative max-w-[1800px] mt-[5rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto">
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
