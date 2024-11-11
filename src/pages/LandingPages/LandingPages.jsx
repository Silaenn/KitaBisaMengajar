import BecomeAmentor from "./BecomeAmentor";
import HomePage from "./HomePage";
import Superiority from "./Superiority";
import WaysOfWorking from "./WaysOfWorking";

const LandingPages = () => {
  return (
    <div className="my-4 px-14">
      <HomePage />
      <WaysOfWorking />
      <Superiority />
      <BecomeAmentor />
    </div>
  );
};

export default LandingPages;
