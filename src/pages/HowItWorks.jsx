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

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-blue-600" />,
      title: "1. Daftar",
      description:
        "Buat akun dan lengkapi profil Anda untuk menjadi guru yang siap berbagi ilmu dengan anak-anak Indonesia",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "2. Pilih Program",
      description:
        "Pilih program pengajaran yang sesuai dengan minat dan keahlian Anda",
    },
    {
      icon: <Video className="w-12 h-12 text-blue-600" />,
      title: "3. Ikuti Persiapan",
      description:
        "Akses materi pembelajaran dan pelatihan yang akan mempersiapkan Anda sebagai pengajar",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "4. Mulai Mengajar",
      description:
        "Bantu anak-anak Indonesia dengan mengajar di program yang Anda pilih",
    },
  ];

  const features = [
    {
      title: "Pembelajaran Fleksibel",
      description:
        "Dapatkan akses fleksibel untuk belajar dan mengajar kapan saja, di mana saja",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Pendampingan Mentor",
      description:
        "Dibimbing oleh mentor yang siap membantu Anda selama program",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Kontribusi Nyata",
      description:
        "Berikan dampak langsung dengan membantu pendidikan anak-anak Indonesia",
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
            Keunggulan Menjadi Bagian dari Kami
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
          <h2 className="text-3xl font-bold mb-6">
            Siap Menginspirasi Anak-anak Indonesia?
          </h2>
          <p className="text-xl mb-8">
            Bergabunglah dengan komunitas guru yang berdedikasi untuk memberikan
            pendidikan berkualitas kepada generasi penerus
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
