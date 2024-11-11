import { useState } from "react";
import {
  Users,
  Book,
  MessageCircle,
  Video,
  Clock,
  ArrowLeft,
} from "lucide-react";

const ClassroomInterface = () => {
  const [activeTab, setActiveTab] = useState("materi");

  const classInfo = {
    subject: "Matematika",
    topic: "Aljabar Dasar",
    teacher: "Pak Budi",
    time: "09:00 WIB",
    totalStudents: 15,
  };

  return (
    <div className="ml-64 min-h-screen bg-gray-50 p-6">
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
      <div className="ml-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {classInfo.subject}
        </h1>
        <p className="text-gray-600">{classInfo.topic}</p>
      </div>

      {/* Class Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-4 p-4">
            <Clock className="h-6 w-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Waktu Kelas</p>
              <p className="font-medium">{classInfo.time}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-4 p-4">
            <Users className="h-6 w-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Jumlah Siswa</p>
              <p className="font-medium">{classInfo.totalStudents} siswa</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-4 p-4">
            <Book className="h-6 w-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Pengajar</p>
              <p className="font-medium">{classInfo.teacher}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tabs */}
        <div className="border-b">
          <div className="flex space-x-4 px-4">
            <button
              className={`px-4 py-3 ${
                activeTab === "materi"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("materi")}
            >
              <div className="flex items-center space-x-2">
                <Book className="h-4 w-4" />
                <span>Materi</span>
              </div>
            </button>
            <button
              className={`px-4 py-3 ${
                activeTab === "diskusi"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("diskusi")}
            >
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Diskusi</span>
              </div>
            </button>
            <button
              className={`px-4 py-3 ${
                activeTab === "virtual"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("virtual")}
            >
              <div className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span>Kelas Virtual</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === "materi" && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Materi Pembelajaran</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <h4 className="font-medium">Bab 1: Pengenalan Aljabar</h4>
                  <p className="text-sm text-gray-500 mt-1">PDF • 2.5 MB</p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <h4 className="font-medium">Bab 2: Operasi Dasar</h4>
                  <p className="text-sm text-gray-500 mt-1">PDF • 1.8 MB</p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <h4 className="font-medium">Bab 3: Persamaan Linear</h4>
                  <p className="text-sm text-gray-500 mt-1">PDF • 2.1 MB</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "diskusi" && (
            <div className="text-center py-8 text-gray-500">
              <MessageCircle className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <p>Belum ada diskusi yang dimulai</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Mulai Diskusi
              </button>
            </div>
          )}
          {activeTab === "virtual" && (
            <div className="text-center py-8 text-gray-500">
              <Video className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <p>Kelas virtual belum dimulai</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Mulai Kelas Virtual
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassroomInterface;
