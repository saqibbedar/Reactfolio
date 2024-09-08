import { Navbar, Footer } from "./components/components.js";
import { About, Education, Skills, Services, Projects, Contact } from "./pages/pages.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative max-w-[1800px] mt-[5rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
