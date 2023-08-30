import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
const SentimentCard = ({ table }) => {
  const calculations = (str) => {
    const totalCount = table.length;
    const priority = table.filter((item) => item.priority.includes(str)).length;
    return (priority / totalCount) * 100;
  };
  calculations("High");
  return (
    <div className="box sentiment">
      <div className="row">
        <div>
          <FontAwesomeIcon
            icon={faSmile}
            style={{ color: "#000", marginRight: "5px" }}
          />
          <b>Sentiment Analysis</b>
        </div>
        <div>Positive</div>
      </div>
      <div className="table">
        <div className="horzontical">
          <div style={{ width: Math.floor(calculations("Low")) }}>
            <span>POSITIVE</span>
            <span className="line green"></span>
            <span>{calculations("Low").toFixed(2)}%</span>
          </div>
          <div style={{ width: Math.floor(calculations("Neutral")) }}>
            <span>NEUTRAL</span>
            <span className="line yellow"></span>
            <span>{calculations("Neutral").toFixed(2)}%</span>
          </div>
          <div style={{ width: Math.floor(calculations("High")) }}>
            <span>NEGATIVE</span>
            <span className="line red"></span>
            <span>{calculations("High").toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentCard;
