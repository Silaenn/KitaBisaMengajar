import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./pages/Footer";
import DashboardMentor from "./pages/DashboardMentor";
import Login from "./pages/Login";
import { AuthProvider } from "./lib/AuthContext";
import LandingPages from "./pages/LandingPages";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
}

function Main() {
  const location = useLocation(); // Get the current location/path

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <main className="flex-grow mx-auto my-5">
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/dashboard-mentor" element={<DashboardMentor />} />
        </Routes>
      </main>

      {location.pathname !== "/dashboard-mentor" &&
        location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
