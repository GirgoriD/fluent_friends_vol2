import "./welcome.scss";
import discover from "../../assets/images/discover.png";
import unlock from "../../assets/images/unlock.png"
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="discoverBox">
        <div className="discover">
          <span>
            <span>Discover</span>
            personalized speech therapy for your kid’s unique needs at Fluent
            Friends.{" "}
          </span>
          <span className="smallTextDiscover">
            Improve communication skills with our dedicated specialist.
          </span>
        </div>
        <img src={discover} alt="discover" />
      </div>
      <div className="unlockBox">
      <img src={unlock} alt="unlock" />
        <div className="unlock">
          <span>
            <span>Unlock</span>
            your communication potential.
          </span>
          <span className="smallTextUnlock">
            Schedule your initial consultation today. Let's embark on this
            journey towards clearer, confident communication. Your voice
            matters.
          </span>
        </div>
        <div className="UnlockText"></div>
      </div>
    </div>
  );
};

export default Welcome;
