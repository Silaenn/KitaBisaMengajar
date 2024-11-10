import React, { useState } from "react";
import { X } from "lucide-react";

const CreateDiscussionForm = ({ onClose }) => {
  const [discussionTitle, setDiscussionTitle] = useState("");
  const [discussionContent, setDiscussionContent] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  // Daftar mata pelajaran
  const subjects = [
    { id: "matematika", name: "Matematika" },
    { id: "ipa", name: "IPA" },
    { id: "ips", name: "IPS" },
    { id: "bahasa", name: "Bahasa Indonesia" },
  ];

  const handleSubmit = () => {
    // Logika untuk menyimpan diskusi baru
    const discussionData = {
      title: discussionTitle,
      content: discussionContent,
      subject: selectedSubject,
    };

    console.log("Diskusi baru:", discussionData);

    // Di sini Anda dapat menambahkan logika untuk mengirim data ke server

    // Reset form setelah submit
    setDiscussionTitle("");
    setDiscussionContent("");
    setSelectedSubject("");

    onClose(); // Tutup form setelah berhasil
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Buat Diskusi Baru
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
          {/* Judul Diskusi */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Judul Diskusi
            </label>
            <input
              type="text"
              value={discussionTitle}
              onChange={(e) => setDiscussionTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan judul diskusi"
            />
          </div>

          {/* Mata Pelajaran */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mata Pelajaran
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih Mata Pelajaran</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          {/* Isi Diskusi */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Isi Diskusi
            </label>
            <textarea
              rows="4"
              value={discussionContent}
              onChange={(e) => setDiscussionContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan isi diskusi..."
            ></textarea>
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
            onClick={handleSubmit}
            disabled={
              !discussionTitle || !discussionContent || !selectedSubject
            }
            className={`px-4 py-2 rounded-lg transition-colors ${
              !discussionTitle || !discussionContent || !selectedSubject
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Buat Diskusi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDiscussionForm;
