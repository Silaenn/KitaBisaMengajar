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
import LandingPages from "./pages/LandingPagesGuru/LandingPages";
import ClassroomInterface from "./pages/ClassroomInterface";
import Sidebar from "./components/ui/Sidebar";
import JadwalPage from "./components/ui/JadwalPage";
import KelasVirtualPage from "./components/ui/KelasVirtualPage";
import MateriPage from "./components/ui/MateriPage";
import DiskusiPage from "./components/ui/DiskusiPage";
import LaporanPage from "./components/ui/LaporanPage";
import AchievementPage from "./components/ui/AchievementPage";
import AboutPage from "./pages/AbouPage";
import HowItWorks from "./pages/HowItWorks";
import Home from "./pages/Home";
import LandingPagesSiswa from "./pages/LandingPagesSiswa/LandingPages";
import HowItWorksStudent from "./pages/HowItWorksStudent";
import DashboardStudent from "./pages/DashBoard/DashboardStudent";

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
    "/dashboard-student",
  ].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <main
        className={`${location.pathname === "/" ? "mx-auto" : ""} ${
          location.pathname === "/login" ? "" : ""
        } flex-grow`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guru" element={<LandingPages />} />
          <Route path="/siswa" element={<LandingPagesSiswa />} />
          <Route path="/dashboard-mentor" element={<DashboardMentor />} />
          <Route path="/dashboard-student" element={<DashboardStudent />} />
          <Route path="/classroomInterface" element={<ClassroomInterface />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/kelas" element={<KelasVirtualPage />} />
          <Route path="/materi" element={<MateriPage />} />
          <Route path="/diskusi" element={<DiskusiPage />} />
          <Route path="/laporan" element={<LaporanPage />} />
          <Route path="/achievement" element={<AchievementPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/howitworksstudent" element={<HowItWorksStudent />} />
        </Routes>
        {showSidebar && <Sidebar />}
        {location.pathname !== "/dashboard-mentor" &&
          location.pathname !== "/classroomInterface" &&
          location.pathname !== "/login" &&
          location.pathname !== "/jadwal" &&
          location.pathname !== "/kelas" &&
          location.pathname !== "/materi" &&
          location.pathname !== "/diskusi" &&
          location.pathname !== "/laporan" &&
          location.pathname !== "/achievement" &&
          location.pathname !== "/about" &&
          location.pathname !== "/howitworks" &&
          location.pathname !== "/howitworksstudent" &&
          location.pathname !== "/dashboard-student" &&
          location.pathname !== "/" && <Footer />}
      </main>
    </div>
  );
}

export default App;
