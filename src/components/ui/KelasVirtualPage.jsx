import { Clock, Users, Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import AddVirtualClassForm from "./AddVirtualClassForm";

// KelasVirtualPage Component
const KelasVirtualPage = () => {
  const [isAddingAVirtualClass, setIsAddingAVirtualClass] = useState(false);

  const virtualClasses = [
    {
      subject: "Matematika",
      topic: "Aljabar Dasar",
      time: "09:00 WIB",
      status: "live",
      participants: 12,
      link: "https://zoom.us/j/1234567890", // contoh link kelas Zoom
    },
    {
      subject: "IPA",
      topic: "Sistem Tata Surya",
      time: "10:30 WIB",
      status: "scheduled",
      participants: 0,
    },
  ];

  // Menangani klik tombol "Masuk" atau "Mulai"
  const handleJoinClass = (virtualClass) => {
    if (virtualClass.status === "live") {
      window.open(virtualClass.link, "_blank");
    } else {
      alert("Kelas belum dimulai!");
    }
  };

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

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kelas Virtual</h1>
        <button
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setIsAddingAVirtualClass(true)}
        >
          <Plus className="h-4 w-4" />
          <span>Buat Kelas Virtual</span>
        </button>
        {isAddingAVirtualClass && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
            <div className="z-50 bg-white p-6 rounded-lg shadow-lg">
              <AddVirtualClassForm
                onClose={() => setIsAddingAVirtualClass(false)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {virtualClasses.map((virtualClass, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-medium text-lg">
                    {virtualClass.subject}
                  </h3>
                  {virtualClass.status === "live" && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                      Live
                    </span>
                  )}
                </div>
                <p className="text-gray-500">{virtualClass.topic}</p>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => handleJoinClass(virtualClass)} // Menambahkan fungsi saat tombol ditekan
              >
                {virtualClass.status === "live" ? "Masuk" : "Mulai"}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {virtualClass.time}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {virtualClass.participants} peserta
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KelasVirtualPage;
