import {
  Award,
  Heart,
  LineChart,
  Clock,
  Users,
  Trophy,
  ArrowLeft,
} from "lucide-react";

const AchievementPage = () => {
  return (
    <div className="ml-64 min-h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <div className="p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="ml-2 font-medium">Kembali</span>
        </button>
      </div>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Pencapaian Saya
        </h1>
        <p className="text-gray-600">
          Perjalanan mengajar dan dampak pembelajaran
        </p>
      </div>

      {/* Main Achievement Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Guru Berdedikasi */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="h-2 bg-blue-600" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">30 hari terakhir</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Guru Berdedikasi
            </h2>
            <p className="text-gray-600 mb-4">
              Konsisten memberikan pembelajaran berkualitas
            </p>
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">jam mengajar</div>
            </div>
          </div>
        </div>

        {/* Inspirator */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="h-2 bg-purple-600" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Total Impact</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Inspirator</h2>
            <p className="text-gray-600 mb-4">
              Membantu siswa mencapai potensi terbaik
            </p>
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-purple-600">25+</div>
              <div className="text-gray-600">siswa terbantu</div>
            </div>
          </div>
        </div>

        {/* Konsisten */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="h-2 bg-green-600" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex items-center">
                <LineChart className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Streak</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Konsisten</h2>
            <p className="text-gray-600 mb-4">
              Komitmen mengajar berkelanjutan
            </p>
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-gray-600">minggu berturut-turut</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Statistik Detail</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">
                Total Jam Mengajar
              </div>
              <div className="text-2xl font-bold text-gray-900">24 jam</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">
                Rata-rata Per Minggu
              </div>
              <div className="text-2xl font-bold text-gray-900">4.8 jam</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Tingkat Kepuasan</div>
              <div className="text-2xl font-bold text-gray-900">4.9/5.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementPage;
