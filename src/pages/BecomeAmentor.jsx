const BecomeAmentor = () => {
  return (
    <div className="bg-sky-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full p-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side with image and floating elements */}
          <div className="relative w-full md:w-1/2">
            {/* Main image with globe */}
            <div className="relative">
              <img
                src="/earth.png"
                alt="Globe"
                className="w-full max-w-md mx-auto"
              />
              {/* Person sitting on globe */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <img src="/person.png" alt="Person" className="w-48" />
              </div>

              {/* Floating elements */}
              <img
                src="/laptop.png"
                alt="Laptop"
                className="absolute top-10 left-0 w-16 animate-float"
              />
              <img
                src="/book.png"
                alt="Book"
                className="absolute bottom-20 left-10 w-16 animate-float-delayed"
              />
              <img
                src="/grad-cap.png"
                alt="Graduation Cap"
                className="absolute top-20 right-10 w-16 animate-float"
              />
              <img
                src="/notebook.png"
                alt="Notebook"
                className="absolute bottom-10 right-0 w-16 animate-float-delayed"
              />
            </div>
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Jadilah bagian dari Perubahan
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Bergabung dengan ribuan volunteer lainnya dalam misi mencerdaskan
              kehidupan bangsa
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
