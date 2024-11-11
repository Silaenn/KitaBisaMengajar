import PropTypes from "prop-types";
import Guru4 from "../../assets/Guru4.png";

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Superiority = () => {
  return (
    <div className="min-h-full my-10 mx-auto flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-center items-center gap-5">
        <div className="order-2 custom:order-1">
          <img
            src={Guru4}
            alt="Guru"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl "
          />
        </div>
        <div className="order-1 custom:order-2">
          <h2 className="text-center text-[32px] font-bold mb-6">
            Platform Pembelajaran yang Revolusioner
          </h2>

          <div className="space-y-4 w-full max-w-3xl">
            {" "}
            {/* Responsive width */}
            <FeatureCard
              icon="👁️"
              title="AI-Powered Matching"
              description="Fitur kolaborasi langsung dengan whiteboard interaktif dan screen sharing"
            />
            <FeatureCard
              icon="⚡"
              title="Real-time Collaboration"
              description="Fitur kolaborasi langsung dengan whiteboard interaktif dan screen sharing"
            />
            <FeatureCard
              icon="🛡️"
              title="Quality Assurance"
              description="Fitur kolaborasi langsung dengan whiteboard interaktif dan screen sharing"
            />
            <FeatureCard
              icon="🎁"
              title="Gamification System"
              description="Fitur kolaborasi langsung dengan whiteboard interaktif dan screen sharing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start bg-blue-100 p-4 rounded-lg shadow-md">
      <div className="text-blue-500 text-2xl mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Superiority;
