import HomePage from "./pages/HomePage";
import "./App.css";
import WaysOfWorking from "./pages/WaysOfWorking";
import Superiority from "./pages/Superiority";
import BecomeAmentor from "./pages/BecomeAmentor";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mx-auto my-5">
        <HomePage />
        <WaysOfWorking />
        <Superiority />
        <BecomeAmentor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
