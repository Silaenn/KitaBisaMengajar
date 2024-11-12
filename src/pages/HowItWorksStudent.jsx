import {
  UserPlus,
  BookOpen,
  Video,
  Users,
  Trophy,
  ChevronRight,
  Award,
  ArrowLeft,
} from "lucide-react";

const HowItWorksStudent = () => {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-blue-600" />,
      title: "1. Daftar",
      description: "Buat akun sebagai siswa dan lengkapi profil Anda",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "2. Pilih Program Belajar",
      description: "Pilih mata pelajaran sesuai minat dan kebutuhan Anda.",
    },
    {
      icon: <Video className="w-12 h-12 text-blue-600" />,
      title: "3. Ikuti Persiapan Kelas",
      description:
        "Dapatkan materi awal yang akan membantu Anda memulai perjalanan belajar.",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "4. Mulai Belajar",
      description:
        "Masuk ke kelas virtual dan mulailah belajar bersama guru relawan yang siap membantu.",
    },
  ];

  const features = [
    {
      title: "Pembelajaran Fleksibel",
      description:
        "Belajar kapan saja dan dari mana saja sesuai kecepatan Anda.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Pendampingan Guru",
      description: "Dapatkan bimbingan dari guru yang berdedikasi.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Akses Pendidikan Berkualitas",
      description: "Kesempatan untuk belajar dari guru relawan berpengalaman.",
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Bagaimana Cara Bergabung?</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ikuti 4 langkah mudah untuk memulai kontribusi Anda dalam pendidikan
            anak-anak Indonesia yang membutuhkan
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-20 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md text-center h-full">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-blue-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Keunggulan Bergabung dengan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Belajar?</h2>
          <p className="text-xl mb-8">
            Bergabunglah dengan ribuan siswa lainnya untuk meraih pendidikan
            berkualitas bersama KitaBisaMengajar.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksStudent;
