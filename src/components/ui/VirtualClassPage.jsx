import { useState, useEffect, useRef } from "react";

// VirtualClassPage Component
const VirtualClassPage = ({ virtualClass }) => {
  const [isInClass, setIsInClass] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  // Menangani event untuk masuk ke dalam kelas (start video call)
  const handleStartClass = async () => {
    if (virtualClass.status === "live") {
      // Ini akan memulai WebRTC call saat tombol "Masuk" ditekan.
      // Misalnya membuka webcam lokal dan menyiarkan ke panggilan
      const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Menampilkan video lokal
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = localStream;
      }

      // WebRTC peer connection setup (untuk komunikasi dua arah)
      const peerConnection = new RTCPeerConnection();

      // Menambahkan stream lokal ke peer connection
      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });

      // Setup untuk menerima stream dari peer remote (kelas lainnya)
      peerConnection.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      // Membuat offer ke peer lain (misalnya server)
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      // Kirim offer ke server untuk diteruskan ke peer lainnya (biasanya melalui WebSocket)
      // Kamu bisa menggunakan signaling server di sini

      setIsInClass(true); // Set status class ke "Masuk"
    }
  };

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
        <h1 className="text-2xl font-bold">Virtual Class</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleStartClass}
        >
          {virtualClass.status === "live" ? "Masuk" : "Mulai"}
        </button>
      </div>

      {isInClass && (
        <div className="video-container flex space-x-4">
          {/* Video lokal */}
          <video
            ref={localVideoRef}
            autoPlay
            muted
            className="w-1/2 h-96 rounded-lg"
          />
          {/* Video remote (kelas lain) */}
          <video
            ref={remoteVideoRef}
            autoPlay
            className="w-1/2 h-96 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default VirtualClassPage;
