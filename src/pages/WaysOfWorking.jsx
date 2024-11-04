const WaysOfWorking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-[32px] font-bold text-paragraf-secondary mb-10">
        Wujudkan Pendidikan Berkualitas untuk Semua
      </h2>
      <div className="container mx-auto bg-white p-8 rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Section Gambar */}
        <div className="relative flex-shrink-0 ">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100 rounded-full"></div>
          <img
            src="https://via.placeholder.com/300x400"
            alt="Volunteer"
            className="relative z-10 w-72 rounded-lg"
          />
        </div>
        {/* Section Teks */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl font-bold mt-2">
            Cara kerja KitabisaMengajar
          </h1>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StepCard
              title="Daftar Sebagai Volunteer"
              description="Bergabung sebagai pengajar sukarela dengan fleksibilitas waktu 1-2 jam per minggu"
              icon="user"
            />
            <StepCard
              title="Pilih Mata Pelajaran"
              description="Fokus mengajar mata pelajaran STEM sesuai keahlian Anda"
              icon="subject"
            />
            <StepCard
              title="Mulai Mengajar"
              description="Berbagi ilmu melalui kelas virtual dengan maksimal 25 siswa"
              icon="teach"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen untuk Langkah
function StepCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center">
      <div className="text-blue-500 mb-4">
        <Icon type={icon} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

// Komponen Icon
function Icon({ type }) {
  const icons = {
    user: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-7 8.5c0-1.66 3.34-2.5 7-2.5s7 .84 7 2.5V17H5v-2.5z" />
      </svg>
    ),
    subject: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-16c-3.87 0-7 3.13-7 7 0 1.74.63 3.33 1.68 4.57L4.7 18.34a.996.996 0 1 0 1.41 1.41l2.11-2.11C10.67 18.37 12.32 19 14 19c3.87 0 7-3.13 7-7s-3.13-7-7-7z" />
      </svg>
    ),
    teach: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-7 8.5c0-1.66 3.34-2.5 7-2.5s7 .84 7 2.5V17H5v-2.5z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

export default WaysOfWorking;
