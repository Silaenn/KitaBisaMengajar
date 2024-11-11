import React, { useEffect, useRef, useState } from "react";
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
  LogOut,
  Settings,
  User,
  ArrowLeft,
  ChevronDown,
  Languages,
  Monitor,
  Volume,
  Lock,
  MapPin,
  Phone,
  Mail,
  Camera,
  Edit2,
  Shield,
  Eye,
  Smartphone,
  Sun,
  Moon,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileDummy from "../assets/DummyProfile.jpg";

const DashboardMentor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [currentView, setCurrentView] = useState("dropdown");
  const navigate = useNavigate();

  const renderView = () => {
    switch (currentView) {
      case "profile":
        return <ProfileView onBack={() => setCurrentView("dropdown")} />;
      case "settings":
        return <SettingsView onBack={() => setCurrentView("dropdown")} />;
      case "notifications":
        return <NotificationsView onBack={() => setCurrentView("dropdown")} />;
      default:
        return null;
    }
  };

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOut = () => {
    navigate("/");
  };

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
            <button
              className="p-2 relative"
              onClick={() => navigateTo("notifications")}
            >
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div
              className="flex items-center space-x-3 border rounded-full px-4 py-2 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={ProfileDummy}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">Sarah Amanda</span>
            </div>
          </div>
          {isOpen && (
            <div
              ref={ref}
              className="absolute right-2 mt-36 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
            >
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">
                  Sarah Amanda
                </p>
                <p className="text-sm text-gray-500">sarah.amanda@email.com</p>
              </div>

              <div className="py-1">
                <button
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => navigateTo("profile")}
                >
                  <User className="w-4 h-4" />
                  Profile Saya
                </button>
                <button
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => navigateTo("settings")}
                >
                  <Settings className="w-4 h-4" />
                  Pengaturan
                </button>
                <button
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => navigateTo("notifications")}
                >
                  <Bell className="w-4 h-4" />
                  Notifikasi
                </button>
              </div>

              <div className="border-t border-gray-100 py-1">
                <button
                  className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => handleLogOut()}
                >
                  <LogOut className="w-4 h-4" />
                  Keluar
                </button>
              </div>
            </div>
          )}
        </div>
        {currentView !== "dropdown" && (
          <div className="fixed inset-0 bg-white z-50 overflow-auto">
            {renderView()}
          </div>
        )}
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

const ProfileView = ({ onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Profile Saya</h1>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Edit2 className="w-4 h-4" />
          {isEditing ? "Simpan Perubahan" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Header */}
      <div className="relative mb-8">
        <div className="bg-gray-100 h-48 rounded-t-lg"></div>
        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
          <div className="w-32 h-32 relative">
            <img
              src={ProfileDummy}
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-white object-cover"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white">
                <Camera className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-paragraf-secondary">
              Sarah Amanda
            </h2>
            <p className="text-paragraf-secondary">Guru Matematika</p>
          </div>
        </div>
      </div>

      {/* Profile Navigation */}
      <div className="mt-20 mb-6 border-b">
        <div className="flex gap-6">
          {["personal", "professional", "achievements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent"
              }`}
            >
              {tab === "personal"
                ? "Informasi Pribadi"
                : tab === "professional"
                ? "Informasi Profesional"
                : "Pencapaian"}
            </button>
          ))}
        </div>
      </div>

      {/* Profile Content */}
      <div className="space-y-6">
        {activeTab === "personal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information Fields */}
            {["Nama Lengkap", "Email", "Nomor Telepon", "Alamat"].map(
              (field, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field}
                  </label>
                  {field === "Alamat" ? (
                    <textarea
                      disabled={!isEditing}
                      defaultValue={
                        field === "Alamat"
                          ? "Jl. Pendidikan No. 123, Jakarta Selatan"
                          : ""
                      }
                      className="w-full p-2 border rounded-md"
                      rows={3}
                    />
                  ) : (
                    <input
                      type={
                        field === "Email"
                          ? "email"
                          : field === "Nomor Telepon"
                          ? "tel"
                          : "text"
                      }
                      disabled={!isEditing}
                      defaultValue={
                        field === "Nama Lengkap"
                          ? "Sarah Amanda"
                          : field === "Email"
                          ? "sarah.amanda@email.com"
                          : field === "Nomor Telepon"
                          ? "+62 812 3456 7890"
                          : ""
                      }
                      className="w-full p-2 border rounded-md"
                    />
                  )}
                </div>
              )
            )}
          </div>
        )}

        {activeTab === "professional" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Professional Information */}
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Pendidikan</h3>
                {/* Education */}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Pengalaman Mengajar</h3>
                {/* Teaching Experience */}
              </div>
            </div>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Keahlian</h3>
                {/* Skills */}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Sertifikasi</h3>
                {/* Certifications */}
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Achievements Content Here</h3>
          </div>
        )}
      </div>
    </div>
  );
};

// Settings View Component
const SettingsView = ({ onBack }) => {
  const [isSecurity, setIsSecurity] = useState(false);
  const [isNotifacition, setIsNotifacition] = useState(false);
  const [isDispaly, setIsDisplay] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);

  const RenderSecuritySection = () => (
    <div className="space-y-4">
      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Ubah Kata Sandi</h3>
          <p className="text-sm text-gray-500">
            Pastikan kata sandi Anda kuat dan unik
          </p>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Kata Sandi Saat Ini
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-2 pr-10 border rounded-lg"
                placeholder="Masukkan kata sandi saat ini"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Kata Sandi Baru
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-2 pr-10 border rounded-lg"
                placeholder="Masukkan kata sandi baru"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Konfirmasi Kata Sandi Baru
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-2 pr-10 border rounded-lg"
                placeholder="Konfirmasi kata sandi baru"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Simpan Perubahan
          </button>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Verifikasi Dua Faktor</h3>
          <p className="text-sm text-gray-500">Tingkatkan keamanan akun Anda</p>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">Autentikasi Dua Faktor</p>
                <p className="text-sm text-gray-500">
                  Verifikasi tambahan saat login
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Riwayat Login</h3>
          <p className="text-sm text-gray-500">
            Perangkat yang mengakses akun Anda
          </p>
        </div>
        <div className="divide-y">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-gray-500" />
              <div>
                <p className="font-medium">iPhone 13 Pro</p>
                <p className="text-sm text-gray-500">
                  Jakarta, Indonesia • Aktif sekarang
                </p>
              </div>
            </div>
            <button className="text-red-500 text-sm hover:text-red-600">
              Keluar
            </button>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Monitor className="w-6 h-6 text-gray-500" />
              <div>
                <p className="font-medium">Chrome macOS</p>
                <p className="text-sm text-gray-500">
                  Jakarta, Indonesia • 2 jam yang lalu
                </p>
              </div>
            </div>
            <button className="text-red-500 text-sm hover:text-red-600">
              Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderNotificationSection = () => (
    <div className="space-y-4">
      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Notifikasi Email</h3>
          <p className="text-sm text-gray-500">
            Atur email yang ingin Anda terima
          </p>
        </div>
        <div className="divide-y">
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Pengingat Kelas</p>
              <p className="text-sm text-gray-500">
                Notifikasi 30 menit sebelum kelas dimulai
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Update Materi</p>
              <p className="text-sm text-gray-500">
                Notifikasi saat ada materi baru
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Berita & Update</p>
              <p className="text-sm text-gray-500">
                Informasi terbaru dari KitaBisa Mengajar
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Notifikasi Aplikasi</h3>
          <p className="text-sm text-gray-500">
            Atur notifikasi di dalam aplikasi
          </p>
        </div>
        <div className="divide-y">
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Pesan Baru</p>
              <p className="text-sm text-gray-500">
                Notifikasi saat ada pesan masuk
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Aktivitas Siswa</p>
              <p className="text-sm text-gray-500">
                Notifikasi aktivitas siswa di kelas
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderDisplaySection = () => (
    <div className="space-y-4">
      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Tema Aplikasi</h3>
          <p className="text-sm text-gray-500">
            Pilih tampilan yang Anda sukai
          </p>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-yellow-500" />
              <span>Mode Terang</span>
            </div>
            <input type="radio" name="theme" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-100 border rounded-lg">
            <div className="flex items-center gap-3">
              <Moon className="w-6 h-6 text-blue-500" />
              <span>Mode Gelap</span>
            </div>
            <input type="radio" name="theme" />
          </div>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Ukuran Font</h3>
          <p className="text-sm text-gray-500">Sesuaikan ukuran teks</p>
        </div>
        <div className="p-4">
          <input
            type="range"
            min="1"
            max="3"
            defaultValue="2"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Kecil</span>
            <span>Sedang</span>
            <span>Besar</span>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderLanguageSection = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] =
      useState("Bahasa Indonesia");
    const languages = [
      "Bahasa Indonesia",
      "English",
      "Español",
      "Français",
      "Deutsch",
      "日本語",
    ];

    const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
      setIsLanguageOpen(false); // Optionally close the section after selecting
    };

    return (
      <div className="p-2 flex flex-col gap-4">
        <div className="p-6 border-t border-gray-200">
          <p className="text-gray-700 mb-4">Pilih Bahasa:</p>
          <div className="flex flex-col gap-3">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageSelect(language)}
                className="flex items-center justify-between px-4 py-2 text-left bg-gray-50 hover:bg-gray-100 rounded-md"
              >
                <span className="text-gray-700">{language}</span>
                {selectedLanguage === language && (
                  <Check className="w-5 h-5 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Pengaturan</h1>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg divide-y">
          <div
            className="p-4 flex items-center justify-between"
            onClick={() => setIsSecurity(!isSecurity)}
          >
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Keamanan Akun</h3>
                <p className="text-sm text-gray-500">
                  Kata sandi dan autentikasi
                </p>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          {isSecurity && (
            <div className="p-10">{<RenderSecuritySection />}</div>
          )}

          <div
            className="p-4 flex items-center justify-between"
            onClick={() => setIsNotifacition(!isNotifacition)}
          >
            <div className="flex items-center gap-3">
              <Volume className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Notifikasi</h3>
                <p className="text-sm text-gray-500">
                  Pengaturan pemberitahuan
                </p>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          {isNotifacition && (
            <div className="p-10">{<RenderNotificationSection />}</div>
          )}

          <div
            className="p-4 flex items-center justify-between"
            onClick={() => setIsDisplay(!isDispaly)}
          >
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Tampilan</h3>
                <p className="text-sm text-gray-500">
                  Tema dan preferensi tampilan
                </p>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          {isDispaly && <div className="p-10">{<RenderDisplaySection />}</div>}

          <div
            className="p-2 flex items-center justify-between"
            onClick={() => setIsLanguage(!isLanguage)}
          >
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-medium">Bahasa</h3>
                <p className="text-sm text-gray-500">
                  Pengaturan bahasa aplikasi
                </p>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          {isLanguage && (
            <div className="p-10">{<RenderLanguageSection />}</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Notifications View Component
const NotificationsView = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Notifikasi</h1>
      </div>

      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">
                Kelas Matematika akan dimulai dalam 30 menit
              </h3>
              <p className="text-sm text-gray-500">5 menit yang lalu</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">
                Selamat! Anda telah menyelesaikan 10 jam mengajar
              </h3>
              <p className="text-sm text-gray-500">2 jam yang lalu</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Book className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">
                Materi baru telah ditambahkan ke kelas Anda
              </h3>
              <p className="text-sm text-gray-500">1 hari yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMentor;
