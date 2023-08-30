import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faGlobe } from "@fortawesome/free-solid-svg-icons";

const IntentCard = ({ title, value }) => {
  return (
    <div className="box">
      <div className="row">
        <div>
          <FontAwesomeIcon
            icon={faTable}
            style={{ color: "#000", marginRight: "5px" }}
          />
          Intent
        </div>
        <div>What's the order status?</div>
      </div>
      <div className="row">
        <div>
          <FontAwesomeIcon
            icon={faGlobe}
            style={{ color: "#000", marginRight: "5px" }}
          />
          Language
        </div>
        <div>English</div>
      </div>
    </div>
  );
};

export default IntentCard;
