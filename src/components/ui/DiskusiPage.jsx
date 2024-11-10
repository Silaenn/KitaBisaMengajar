import { ArrowLeft, MessageCircle, Plus, Search } from "lucide-react";
import { useState } from "react";
import CreateDiscussionForm from "./CreateDiscussionForm";

const DiskusiPage = () => {
  const [isAddingADiscussion, setIsAddingADiscussion] = useState(false);

  const discussions = [
    {
      subject: "Matematika",
      topic: "Pertanyaan tentang Aljabar",
      author: "Siswa A",
      time: "10 menit yang lalu",
      replies: 3,
      unread: true,
    },
    {
      subject: "IPA",
      topic: "Diskusi Sistem Tata Surya",
      author: "Siswa B",
      time: "1 jam yang lalu",
      replies: 5,
      unread: false,
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
        <h1 className="text-2xl font-bold">Forum Diskusi</h1>
        <button
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setIsAddingADiscussion(true)}
        >
          <Plus className="h-4 w-4" />
          <span>Buat Diskusi Baru</span>
        </button>
        {isAddingADiscussion && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
            <div className="z-50 bg-white p-6 rounded-lg shadow-lg">
              <CreateDiscussionForm
                onClose={() => setIsAddingADiscussion(false)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari diskusi..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200">
            Filter
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-lg">{discussion.topic}</h3>
                  {discussion.unread && (
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      Baru
                    </span>
                  )}
                </div>
                <p className="text-gray-500">{discussion.subject}</p>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {discussion.replies}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Oleh {discussion.author}</span>
              <span>{discussion.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiskusiPage;
