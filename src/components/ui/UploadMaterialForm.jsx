import { useState } from "react";
import { X } from "lucide-react";

const UploadMaterialForm = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");

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
  const [selectedGrade, setSelectedGrade] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    // Logika untuk mengunggah file ke server
    const formData = new FormData();
    formData.append("file", selectedFile);

    // Contoh menggunakan fetch untuk mengunggah file
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Materi berhasil diunggah!");
          onClose(); // Tutup form setelah berhasil diunggah
        } else {
          alert("Gagal mengunggah materi.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengunggah materi.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Unggah Materi</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
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
          {/* File Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Unggah Materi
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fileName && (
              <p className="text-sm text-gray-600">File terpilih: {fileName}</p>
            )}
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
            onClick={handleUpload}
            disabled={!selectedFile}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !selectedFile
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Unggah
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadMaterialForm;
