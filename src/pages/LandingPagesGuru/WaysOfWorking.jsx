import PropTypes from "prop-types";
import Guru3 from "../../assets/Guru/Guru3.png";
import { BookOpen, Presentation, UserPlus } from "lucide-react";

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Icon.propTypes = {
  type: PropTypes.oneOf(["user", "subject", "teach"]).isRequired,
};

const WaysOfWorking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10">
      <h2 className="text-[32px] font-bold text-paragraf-secondary mb-10 text-center">
        Wujudkan Pendidikan Berkualitas untuk Semua
      </h2>
      <div className="flex justify-center">
        <div className="container mx-auto p-8 rounded-lg flex flex-col lg:flex-row items-center gap-10 lg:gap-28">
          {/* Section Gambar */}
          <div className="relative mb-10 lg:mb-0">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100 rounded-full"></div>
            <img
              src={Guru3}
              alt="Volunteer"
              className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg" // Increased width classes
            />
          </div>
          {/* Section Teks */}
          <div className="text-center">
            <h1 className="text-[44px] font-bold text-center">
              Cara kerja KitabisaMengajar
            </h1>
            <div className="flex justify-center mt-6">
              <StepCard
                title="Daftar Sebagai Volunteer"
                description="Bergabung sebagai pengajar sukarela dengan fleksibilitas waktu 1-2 jam per minggu"
                icon="user"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex justify-center">
                <StepCard
                  title="Pilih Mata Pelajaran"
                  description="Fokus mengajar mata pelajaran STEM sesuai keahlian Anda"
                  icon="subject"
                />
              </div>
              <div className="flex justify-center">
                <StepCard
                  title="Mulai Mengajar"
                  description="Berbagi ilmu melalui kelas virtual dengan maksimal 25 siswa"
                  icon="teach"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen untuk Langkah
function StepCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md w-full max-w-sm p-6 rounded-lg text-center">
      <div className="text-paragraf-primary mb-4">
        <Icon type={icon} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-paragraf-secondary mt-2">{description}</p>
    </div>
  );
}

// Komponen Icon
function Icon({ type }) {
  const icons = {
    user: (
      <div className="w-12 flex justify-center items-center h-12 mx-auto border border-blue-600 rounded-full">
        <UserPlus />
      </div>
    ),
    subject: (
      <div className="w-12 flex justify-center items-center h-12 mx-auto border border-blue-600 rounded-full">
        <BookOpen />
      </div>
    ),
    teach: (
      <div className="w-12 flex justify-center items-center h-12 mx-auto border border-blue-600 rounded-full">
        <Presentation />
      </div>
    ),
  };

  return icons[type] || null;
}

export default WaysOfWorking;
