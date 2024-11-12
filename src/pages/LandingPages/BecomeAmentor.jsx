import Siswa1 from "../../assets/Siswa1.png";
import Siswa2 from "../../assets/Siswa2.png";
import Siswa3 from "../../assets/Siswa3.png";

const BecomeAmentor = () => {
  return (
    <div className="bg-sky-50 min-h-screen flex items-center justify-center rounded-xl">
      <div className="max-w-7xl w-full p-8 relative">
        <div className="flex flex-col md-lg:flex-row items-center md-lg:justify-between justify-center gap-10 md-lg:gap-0">
          {/* Left side with image */}
          <div className="relative w-full md:w-1/2  md:h-[450px] h-[300px]">
            {/* Smaller circular container for the image */}
            <div className="w-52 h-52 md:w-64 md:h-64 top-10 right-20 aspect-square bg-blue-100 rounded-full relative overflow-hidden mx-auto">
              <img
                src={Siswa1}
                alt="Siswa"
                className="absolute bottom-0 right-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-52 h-52 md:w-64 md:h-64 bottom-60 left-28 aspect-square bg-blue-100 rounded-full relative overflow-hidden mx-auto z-10">
              <img
                src={Siswa3}
                alt="Siswa"
                className="absolute bottom-0 right-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-52 h-52 md:w-64 md:h-64 bottom-80 left-20 aspect-square bg-blue-100 rounded-full relative overflow-hidden mx-auto">
              <img
                src={Siswa2}
                alt="Siswa"
                className="absolute bottom-0 right-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side with text content */}
          <div className="w-full md-lg:w-1/2 text-center md:text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Jadilah bagian dari Perubahan
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Bergabung dengan ribuan volunteer lainnya dalam misi mencerdaskan
              kehidupan bangsa.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Mulai Mengajar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAmentor;
