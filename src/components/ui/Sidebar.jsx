import {
  Book,
  Calendar,
  FileText,
  MessageSquare,
  User,
  Video,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const menuItems = [
    { icon: User, text: "Dashboard", url: "/dashboard-mentor" },
    { icon: Calendar, text: "Jadwal", url: "/jadwal" },
    { icon: Video, text: "Kelas Virtual", url: "/kelas" },
    { icon: Book, text: "Materi", url: "/materi" },
    { icon: MessageSquare, text: "Diskusi", url: "/diskusi" },
    { icon: FileText, text: "Laporan", url: "/laporan" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-10">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Book className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold">KitaBisa Mengajar</h1>
      </div>

      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-blue-50 transition-colors
                ${
                  location.pathname === item.url
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
            onClick={() => navigate(item.url)}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.text}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
