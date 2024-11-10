import {
  Calendar,
  Clock,
  Users,
  FileText,
  ChevronRight,
  Plus,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import AddScheduleForm from "./AddScheduleForm";

// Schedule Page Component
const JadwalPage = () => {
  const [isAddingSchedule, setIsAddingSchedule] = useState(false);
  const schedules = [
    {
      subject: "Matematika",
      topic: "Aljabar Dasar",
      class: "Kelas 8",
      school: "SMP Negeri 1 Raja Ampat",
      time: "09:00 WIB",
      students: 15,
      date: "Senin, 10 November 2024",
    },
    {
      subject: "IPA",
      topic: "Sistem Tata Surya",
      class: "Kelas 7",
      school: "SMP Negeri 2 Wamena",
      time: "10:30 WIB",
      students: 12,
      date: "Senin, 10 November 2024",
    },
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

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Jadwal Mengajar</h1>
        <button
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setIsAddingSchedule(true)}
        >
          <Plus className="h-4 w-4" />
          <span>Tambah Jadwal</span>
        </button>
        {isAddingSchedule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
            <div className="z-50 bg-white p-6 rounded-lg shadow-lg">
              <AddScheduleForm onClose={() => setIsAddingSchedule(false)} />
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Hari Ini
          </button>
          <button className="bg-white text-gray-600 px-4 py-2 rounded-lg">
            Minggu Ini
          </button>
          <button className="bg-white text-gray-600 px-4 py-2 rounded-lg">
            Bulan Ini
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg">{schedule.subject}</h3>
                <p className="text-gray-500">{schedule.topic}</p>
              </div>
              <button className="text-blue-500 hover:text-blue-600">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{schedule.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{schedule.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {schedule.students} siswa
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{schedule.class}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JadwalPage;
