import { ArrowLeft, Download } from "lucide-react";

const LaporanPage = () => {
  const reports = [
    {
      title: "Laporan Kehadiran",
      description: "Rekap kehadiran siswa bulan November",
      date: "1 November 2024",
      type: "PDF",
    },
    {
      title: "Laporan Nilai",
      description: "Rekap nilai ujian tengah semester",
      date: "28 Oktober 2024",
      type: "PDF",
    },
  ];

  const stats = [
    { label: "Total Jam Mengajar", value: "24 jam" },
    { label: "Total Siswa", value: "45 siswa" },
    { label: "Rata-rata Kehadiran", value: "92%" },
    { label: "Mata Pelajaran", value: "3 mapel" },
  ];

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mb-6">
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
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Laporan</h1>
        <div className="flex space-x-2">
          <button className="bg-white text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
            Download Semua
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Reports Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Daftar Laporan</h2>
        <div className="space-y-4">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">{report.title}</h3>
                <p className="text-sm text-gray-500">{report.description}</p>
                <p className="text-xs text-gray-400 mt-1">{report.date}</p>
              </div>
              <button className="text-blue-500 hover:text-blue-600 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaporanPage;
