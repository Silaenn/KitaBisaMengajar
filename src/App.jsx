import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./pages/Footer";
import DashboardMentor from "./pages/DashBoard/DashboardMentor";
import Login from "./pages/LoginRegister/Login";
import { AuthProvider } from "./lib/AuthContext";
import LandingPages from "./pages/LandingPages/LandingPages";
import ClassroomInterface from "./pages/ClassroomInterface";
import Sidebar from "./components/ui/Sidebar";
import JadwalPage from "./components/ui/JadwalPage";
import KelasVirtualPage from "./components/ui/KelasVirtualPage";
import MateriPage from "./components/ui/MateriPage";
import DiskusiPage from "./components/ui/DiskusiPage";
import LaporanPage from "./components/ui/LaporanPage";
import AchievementPage from "./components/ui/AchievementPage";

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
  const location = useLocation();
  const showSidebar = [
    "/dashboard-mentor",
    "/classroomInterface",
    "/jadwal",
    "/kelas",
    "/materi",
    "/diskusi",
    "/laporan",
    "/achievement",
  ].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <main
        className={`${location.pathname === "/" ? "mx-auto" : ""} ${
          location.pathname === "/login" ? "" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/dashboard-mentor" element={<DashboardMentor />} />
          <Route path="/classroomInterface" element={<ClassroomInterface />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/kelas" element={<KelasVirtualPage />} />
          <Route path="/materi" element={<MateriPage />} />
          <Route path="/diskusi" element={<DiskusiPage />} />
          <Route path="/laporan" element={<LaporanPage />} />
          <Route path="/achievement" element={<AchievementPage />} />
        </Routes>
      </main>

      {showSidebar && <Sidebar />}
      {location.pathname !== "/dashboard-mentor" &&
        location.pathname !== "/classroomInterface" &&
        location.pathname !== "/login" &&
        location.pathname !== "/jadwal" &&
        location.pathname !== "/kelas" &&
        location.pathname !== "/materi" &&
        location.pathname !== "/diskusi" &&
        location.pathname !== "/laporan" &&
        location.pathname !== "/achievement" && <Footer />}
    </div>
  );
}

export default App;
