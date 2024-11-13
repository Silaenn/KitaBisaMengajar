import React, { useState, useEffect } from "react";
import {
  Calendar,
  Book,
  Backpack,
  GraduationCap,
  Check,
  Bell,
  Clipboard,
  BarChart,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "John Doe",
    grade: "Kelas 10",
    school: "SMP ABC",
  });

  const [upcomingAssignments, setUpcomingAssignments] = useState([
    {
      id: 1,
      subject: "Matematika",
      dueDate: "2023-05-15",
      status: "Mendatang",
    },
    {
      id: 2,
      subject: "Sastra Inggris",
      dueDate: "2023-05-20",
      status: "Mendatang",
    },
    { id: 3, subject: "Biologi", dueDate: "2023-05-25", status: "Mendatang" },
  ]);

  const [recentGrades, setRecentGrades] = useState([
    { id: 1, subject: "Matematika", grade: 90, date: "2023-04-30" },
    { id: 2, subject: "Sastra Inggris", grade: 85, date: "2023-04-25" },
    { id: 3, subject: "Biologi", grade: 92, date: "2023-04-20" },
  ]);

  const [attendance, setAttendance] = useState({
    daysPresent: 85,
    daysAbsent: 5,
    absenceReasons: ["Illness", "Family emergency"],
  });

  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, name: "Ujian Matematika", date: "2023-05-18" },
    { id: 2, name: "Pameran Sains", date: "2023-06-01" },
    { id: 3, name: "Pertunjukan Klub Drama", date: "2023-05-27" },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "PR matematika harus dikumpulkan besok", read: false },
    { id: 2, message: "Presentasi proyek sains minggu depan", read: false },
    { id: 3, message: "Konferensi orang tua-guru dijadwalkan", read: false },
  ]);

  const [academicProgress, setAcademicProgress] = useState({
    averageGrade: 88.5,
    gradeHistory: [
      { subject: "Matematika", grade: 92, date: "2023-04-30" },
      { subject: "Sastra Inggris", grade: 85, date: "2023-04-25" },
      { subject: "Biologi", grade: 88, date: "2023-04-20" },
    ],
  });

  return (
    <div className="ml-64 min-h-screen bg-gray-100 px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Selamat Datang, {studentInfo.name}
        </h1>
        <p className="text-gray-600">
          {studentInfo.grade} at {studentInfo.school}
        </p>
      </div>

      {/* Upcoming Assignments */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tugas Mendatang
        </h2>
        <div className="space-y-4">
          {upcomingAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white p-4 border rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Backpack className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">{assignment.subject}</h3>
                  <p className="text-sm text-gray-500">
                    Due: {assignment.dueDate}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === "Upcoming"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {assignment.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Grades */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nilai Terbaru</h2>
        <div className="space-y-4">
          {recentGrades.map((grade) => (
            <div
              key={grade.id}
              className="bg-white p-4 border rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">{grade.subject}</h3>
                  <p className="text-sm text-gray-500">
                    Score: {grade.grade}, Dated: {grade.date}
                  </p>
                </div>
              </div>
              <Check className="w-6 h-6 text-green-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Attendance */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Kehadiran</h2>
        <div className="bg-white p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="font-medium">Ringkasan Kehadiran</h3>
                <p className="text-sm text-gray-500">
                  Hari Sekarang: {attendance.daysPresent}, Hari Absen:{" "}
                  {attendance.daysAbsent}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {attendance.absenceReasons.map((reason, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700"
                >
                  {reason}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Persentase Kehadiran: 94.4%</p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Lihat Detail <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Acara Mendatang
        </h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 border rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Book className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">{event.name}</h3>
                  <p className="text-sm text-gray-500">Tanggal: {event.date}</p>
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                Lihat Detail <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white p-4 border rounded-lg flex items-center justify-between ${
                notification.read ? "opacity-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">{notification.message}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Mark as Read <Check className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
                >
                  Dismiss <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Progress */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Kemajuan Akademik
        </h2>
        <div className="bg-white p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Clipboard className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="font-medium">Nilai Keseluruhan</h3>
                <p className="text-sm text-gray-500">
                  Rata-rata: {academicProgress.averageGrade}%
                </p>
              </div>
            </div>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Lihat Riwayat Kelas <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <BarChart className="w-full h-48 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
