import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Book,
  Bell,
  ChevronRight,
  Medal,
  Heart,
  BarChart2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileDummy from "../assets/DummyProfile.jpg";

const DashboardMentor = () => {
  const [notifications] = useState([
    {
      id: 1,
      text: "Kelas Matematika akan dimulai dalam 30 menit",
      type: "upcoming",
    },
    {
      id: 2,
      text: "Selamat! Anda telah menyelesaikan 10 jam mengajar",
      type: "achievement",
    },
  ]);

  const [achievements] = useState([
    {
      id: 1,
      title: "Guru Berdedikasi",
      description: "10+ jam mengajar",
      icon: Medal,
    },
    {
      id: 2,
      title: "Inspirator",
      description: "25+ siswa terbantu",
      icon: Heart,
    },
    {
      id: 3,
      title: "Konsisten",
      description: "5 minggu berturut-turut",
      icon: BarChart2,
    },
  ]);

  const [nextClasses] = useState([
    {
      id: 1,
      subject: "Matematika",
      topic: "Aljabar Dasar",
      grade: "Kelas 8",
      school: "SMP Negeri 1 Raja Ampat",
      date: "12 November 2024",
      time: "09:00 WIB",
      students: 15,
    },
    {
      id: 2,
      subject: "IPA",
      topic: "Sistem Tata Surya",
      grade: "Kelas 7",
      school: "SMP Negeri 2 Wamena",
      date: "13 November 2024",
      time: "10:30 WIB",
      students: 12,
    },
  ]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Selamat Datang, Sarah!
            </h1>
            <p className="text-gray-600">Mari berbagi ilmu hari ini</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3 border rounded-full px-4 py-2">
              <img
                src={ProfileDummy}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">Sarah Amanda</span>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-8">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 rounded-lg mb-3 flex items-center justify-between
                ${
                  notif.type === "upcoming"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-green-50 text-green-700"
                }`}
            >
              <span>{notif.text}</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { icon: Clock, title: "Total Mengajar", value: "24 jam" },
            { icon: Users, title: "Siswa Terbantu", value: "45 siswa" },
            { icon: Book, title: "Mata Pelajaran", value: "3 mapel" },
            { icon: Calendar, title: "Kelas Mendatang", value: "2 kelas" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {React.createElement(stat.icon, {
                    className: "w-6 h-6 text-blue-600",
                  })}
                </div>
                <span className="text-sm text-gray-500">30 hari terakhir</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Upcoming Classes */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Kelas Mendatang</h3>
              <div className="space-y-4">
                {nextClasses.map((class_) => (
                  <div
                    key={class_.id}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{class_.subject}</h4>
                        <p className="text-gray-600">{class_.topic}</p>
                      </div>
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => navigate("/classroomInterface")}
                      >
                        Masuk Kelas
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Tingkat</p>
                        <p className="font-medium">{class_.grade}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Sekolah</p>
                        <p className="font-medium">{class_.school}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Waktu</p>
                        <p className="font-medium">{class_.time}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Jumlah Siswa</p>
                        <p className="font-medium">{class_.students} siswa</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Pencapaian</h3>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate("/achievement")}
                  >
                    <div className="flex items-center space-x-3">
                      {React.createElement(achievement.icon, {
                        className: "w-6 h-6 text-blue-600",
                      })}
                      <div>
                        <h4 className="font-bold">{achievement.title}</h4>
                        <p className="text-gray-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMentor;
