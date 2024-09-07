import { Navbar, Footer } from "./components/components.js";
import { About, Education } from "./pages/pages.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative max-w-[1800px] w-full m-auto px-20 overflow-hidden">
        <About />
        <Education />
      </div>
      <Footer />
    </>
  );
};

export default App;
