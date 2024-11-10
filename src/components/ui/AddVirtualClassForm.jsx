import { useState } from "react";
import { X } from "lucide-react";

const AddVirtualClassForm = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [maxStudents, setMaxStudents] = useState("");

  const subjects = [
    {
      id: "matematika",
      name: "Matematika",
      topics: ["Aljabar Dasar", "Geometri", "Statistika"],
    },
    {
      id: "ipa",
      name: "IPA",
      topics: ["Sistem Tata Surya", "Fisika Dasar", "Biologi"],
    },
    {
      id: "ips",
      name: "IPS",
      topics: ["Sejarah Indonesia", "Geografi", "Ekonomi"],
    },
    {
      id: "bahasa",
      name: "Bahasa Indonesia",
      topics: ["Tata Bahasa", "Sastra", "Penulisan"],
    },
  ];

  const grades = ["Kelas 7", "Kelas 8", "Kelas 9"];
  const times = [
    "08:00 WIB",
    "09:00 WIB",
    "10:00 WIB",
    "11:00 WIB",
    "13:00 WIB",
    "14:00 WIB",
    "15:00 WIB",
    "16:00 WIB",
  ];

  const handleSave = () => {
    // Logika untuk menyimpan data kelas virtual
    console.log({
      subject: selectedSubject,
      topic: selectedTopic,
      grade: selectedGrade,
      time: selectedTime,
      maxStudents,
    });

    // Tutup form setelah menyimpan
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Tambah Kelas Virtual
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Mata Pelajaran */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mata Pelajaran
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedTopic(""); // Reset topik saat mata pelajaran berubah
              }}
            >
              <option value="">Pilih Mata Pelajaran</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          {/* Topik */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Topik
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              disabled={!selectedSubject}
            >
              <option value="">Pilih Topik</option>
              {subjects
                .find((s) => s.id === selectedSubject)
                ?.topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
            </select>
          </div>

          {/* Tingkat Kelas */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Tingkat Kelas
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">Pilih Kelas</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          {/* Waktu */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Waktu
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Pilih Waktu</option>
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Jumlah Siswa */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Maksimal Siswa
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={maxStudents}
              onChange={(e) => setMaxStudents(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan jumlah maksimal siswa"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVirtualClassForm;
