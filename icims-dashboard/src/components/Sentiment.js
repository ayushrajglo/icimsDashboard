import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
const SentimentCard = ({ sentiment }) => {
 
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
          <div style={{ width: sentiment.positive+'%' }}>
            <span>POSITIVE</span>
            <span className="line green"></span>
            <span>{sentiment.positive}%</span>
          </div>
          <div style={{ width: sentiment.neagative }}>
            <span>NEUTRAL</span>
            <span className="line yellow"></span>
            <span>{sentiment.neagative}%</span>
          </div>
          <div style={{ width: sentiment.neutral+'%' }}>
            <span>NEGATIVE</span>
            <span className="line red"></span>
            <span>{sentiment.neutral}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentCard;
