import { Users, Book, Target, Trophy, ArrowLeft } from "lucide-react";
import CEO from "../assets/Team/CEO.png";
import COO from "../assets/Team/COO.png";
import CTO from "../assets/Team/CTO.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <button
          onClick={() => window.history.back()}
          className="flex justify-center items-center absolute top-2 left-3 rounded-lg text-white transition-colors group"
        >
          <div className="p-2 rounded-lg  transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="ml-2 font-medium">Kembali</span>
        </button>
      </div>
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            KitaBisaMengajar
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Membangun masa depan pendidikan Indonesia melalui inovasi
            pembelajaran dan pemberdayaan guru
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-10 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Misi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen untuk menciptakan ekosistem pendidikan yang
            inklusif, inovatif, dan berkualitas untuk semua
          </p>
        </div>

        {/* Stats/Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">1000+</h3>
            <p className="text-gray-600">Guru Tergabung</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">500+</h3>
            <p className="text-gray-600">Modul Pembelajaran</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">34</h3>
            <p className="text-gray-600">Provinsi Terjangkau</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">50+</h3>
            <p className="text-gray-600">Penghargaan</p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Visi Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold mb-3">Inovasi Pembelajaran</h3>
              <p className="text-gray-600">
                Mengembangkan metode pembelajaran yang kreatif dan efektif untuk
                meningkatkan kualitas pendidikan
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-3">Pemberdayaan Guru</h3>
              <p className="text-gray-600">
                Memberikan pelatihan dan dukungan kepada guru untuk
                mengembangkan kompetensi profesional
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-3">Pendidikan Berkualitas</h3>
              <p className="text-gray-600">
                Mewujudkan pendidikan berkualitas yang dapat diakses oleh semua
                lapisan masyarakat
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Tim Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={CEO} alt="CEO" className="rounded-full mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ahmad Rizki</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={COO} alt="COO" className="rounded-full mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sarah Permata</h3>
              <p className="text-gray-600">Chief Operating Officer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={CTO} alt="CTO" className="rounded-full mx-auto mb-4" />
              <h3 className="font-bold mb-2">Budi Santoso</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
          <p className="text-gray-600 mb-4">Email: info@kitabisamengajar.id</p>
          <p className="text-gray-600 mb-4">Telepon: +62 21 1234 5678</p>
          <p className="text-gray-600">
            Alamat: Jl. Pendidikan No. 123, Jakarta Pusat, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
