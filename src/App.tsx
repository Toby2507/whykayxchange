import { Footer, Navbar } from "./components";
import { About, Contact, Home, Services, Testimonials } from "./pages";

const App = () => {
  return (
    <div className="bgMain w-screen min-h-screen overflow-clip" id="top">
      <header>
        <Navbar />
      </header>
      <main className="mx-auto px-6 py-10 pb-20 md:px-10 lg:px-0 lg:w-10/12 xl:w-9/12">
        <Home />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-gray-900 py-4 md:py-8 md:mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
