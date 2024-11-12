import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";
import LandingGuru from "../assets/Guru/LandingGuru.png";
import LandingSiswa from "../assets/Siswa/LandingSiswa.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Pilih Peranmu dalam Pendidikan
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Platform pembelajaran yang menghubungkan guru dan murid untuk
        menciptakan pengalaman belajar yang lebih baik
      </p>

      <div className="relative">
        <img
          src={LandingGuru}
          alt="LandingGuru"
          className="absolute -left-[350px] top-6 w-[60%] h-auto max-w-full mx-auto"
        />
      </div>
      <div className="relative ">
        <img
          src={LandingSiswa}
          alt="LandingSiswa"
          className="absolute -right-[350px] w-[60%] h-auto max-w-full mx-auto"
        />
      </div>

      {/* Role Selection Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Teacher Card */}
        <div className="group w-96">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Saya Guru</h3>
            <p className="text-gray-600 mb-6">
              Bagikan ilmu Anda dan berdampak pada ribuan siswa di seluruh
              Indonesia
            </p>
            <button
              className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition-colors"
              onClick={() => navigate("/guru")}
            >
              Mulai Mengajar
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Student Card */}
        <div className="group w-96">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Saya Murid</h3>
            <p className="text-gray-600 mb-6">
              Temukan guru terbaik dan tingkatkan kemampuan akademik Anda
            </p>
            <button
              className="flex items-center justify-center w-full py-3 bg-purple-600 text-white rounded-lg group-hover:bg-purple-700 transition-colors"
              onClick={() => navigate("/siswa")}
            >
              Mulai Belajar
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md z-10">
          <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-2">10,000+</h4>
          <p className="text-gray-600">Pengguna Aktif</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Award className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-2">500+</h4>
          <p className="text-gray-600">Guru Bersertifikat</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Star className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-2">4.8/5</h4>
          <p className="text-gray-600">Rating Kepuasan</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
        <div>
          <h3 className="text-2xl font-bold mb-6">Untuk Guru</h3>
          <ul className="space-y-4">
            {[
              "Platform mengajar yang fleksibel",
              "Akses ke ribuan murid potensial",
              "Penghasilan tambahan yang menjanjikan",
              "Dukungan pengembangan profesional",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Untuk Murid</h3>
          <ul className="space-y-4">
            {[
              "Guru berkualitas dan berpengalaman",
              "Jadwal belajar yang fleksibel",
              "Materi pembelajaran terstruktur",
              "Harga yang terjangkau",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="w-5 h-5 text-purple-600 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
