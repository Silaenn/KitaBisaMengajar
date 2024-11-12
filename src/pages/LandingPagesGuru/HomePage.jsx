import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/AuthContext";
import Guru2 from "../../assets/Guru/Guru2.png";
import Siswa4 from "../../assets/Siswa/Siswa4.png";
import Siswa5 from "../../assets/Siswa/Siswa5.png";
import Siswa6 from "../../assets/Siswa/Siswa6.png";
import Siswa7 from "../../assets/Siswa/Siswa7.png";
import Siswa8 from "../../assets/Siswa/Siswa8.png";

const HomePage = () => {
  const { setIsLogin } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLogin(true);
    navigate("/login");
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
    navigate("/login");
  };

  const Siswa = [Siswa4, Siswa5, Siswa6, Siswa7, Siswa8];
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="md:text-[36px] text-[36px] sm:text-[30px] font-semibold text-paragraf-primary">
            KitaBisaMengajar
          </h1>
          <div className="hidden lg-md::flex xl:flex ml-8 space-x-6">
            <button
              onClick={() => navigate("/guru")}
              className="text-secondary hover:text-gray-700"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/about")}
              className="text-secondary hover:text-gray-700"
            >
              About As
            </button>
            <a
              href="/howitworks"
              className="text-secondary hover:text-gray-700"
            >
              How It Works
            </a>
          </div>
        </div>
        <div className="space-x-5 hidden sm:block">
          <button
            className="px-4 py-2 text-paragraf-primary border rounded-md border-paragraf-primary hover:bg-buttonHover hover:text-white"
            onClick={() => handleLoginClick()}
          >
            Login
          </button>
          <button
            className="px-4 py-2 text-white bg-paragraf-primary rounded-full hover:bg-buttonHover"
            onClick={() => handleRegisterClick()}
          >
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 bg-[#E8F6FF] rounded-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl mb-16">
            <h2 className="text-[36px] leading-tight font-bold text-gray-800 mb-6">
              Mari Menjadi Bagian
              <br />
              dari Pendidikan
              <br />
              Indonesia.
            </h2>
            <p className="text-[16px] text-paragraf-secondary font-medium mb-8">
              KitaBisaMengajar adalah platform digital yang mempertemukan para
              guru relawan dengan sekolah-sekolah di daerah terpencil di
              Indonesia. Bersama kita bisa mengurangi kesenjangan pendidikan
              melalui pembelajaran jarak jauh
            </p>
            <div className="flex space-x-4 mb-8">
              <button className="px-6 py-3 bg-button text-white rounded-full hover:bg-buttonHover">
                Start Teaching
              </button>
              <button className="px-6 py-3 text-paragraf-primary border border-button rounded-full hover:bg-buttonHover hover:text-white flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="flex -space-x-2">
                  {Siswa.map((i) => (
                    <img
                      key={i}
                      src={i}
                      className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="ml-4 text-blue-600 font-medium">
                  50K+ Siswa
                </span>
              </div>
              <p className="text-sm text-blue-600">
                Ayo bantu 50.000 siswa menggapai pendidikan berkualitas!
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="w-full aspect-square bg-blue-100 rounded-full relative overflow-hidden">
              <img
                src={Guru2}
                alt="Teacher"
                className="absolute bottom-0 right-0 w-full h-auto object-cover"
              />
            </div>
            {/* Stats Cards */}
            <div className="absolute xl:-right-16 xl:top-0 lg-md:-top-4 lg-md:-right-10 xl:h-[604px] lg-md:h-[500px] md:-right-20 md:-top-20 sm:top-10 sm:-right-10 bg-white p-6 rounded-lg shadow-lg -top-10 -right-10">
              <div className="grid grid-cols-1 xl:gap-20 lg-md:gap-14 py-10 gap-10">
                <div className="text-center">
                  <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-paragraf-primary">
                    5K+
                  </div>
                  <div className="text-sm sm:text-xs md:text-xs lg:text-sm text-paragraf-secondary">
                    Guru Volunter
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-paragraf-primary">
                    10k+
                  </div>
                  <div className="text-sm sm:text-xs md:text-xs lg:text-sm text-paragraf-secondary">
                    Jam Mengajar
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-paragraf-primary">
                    250+
                  </div>
                  <div className="text-sm sm:text-xs md:text-xs lg:text-sm text-paragraf-secondary">
                    Sekolah
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-paragraf-primary">
                    50K+
                  </div>
                  <div className="text-sm sm:text-xs md:text-xs lg:text-sm text-paragraf-secondary">
                    Siswa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
