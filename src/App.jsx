import "./App.css";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Plants } from "./components/Plants";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-3/5">
        <Header />
        <main className="flex flex-col gap-10">
          <Hero />
          <Plants />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
