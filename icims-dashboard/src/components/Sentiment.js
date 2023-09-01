import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
const SentimentCard = ({ sentiment, loader }) => {
 const handleSentiment=()=>{
  return(
    <>
    <div className="horzontical" style={{display: sentiment ==""? 'none' : 'table-row'}}>
          <div style={{ width: sentiment.positive+'%', display: sentiment.positive== 0 ? 'none': '' }}>
            <span className="line green"></span>
            <span>{sentiment.positive}%</span>
          </div>
          <div style={{ width: sentiment.neutral+'%', display: sentiment.neutral== 0 ? 'none': '' }}>
            <span className="line yellow"></span>
            <span>{sentiment.neutral}%</span>
          </div>
          <div style={{ width: sentiment.neagative+'%', display: sentiment.neagative== 0 ? 'none': '' }}>
            <span className="line red"></span>
            <span>{sentiment.neagative}%</span>
          </div>
        </div>
    </>
  )
 }
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
        <div></div>
      </div>
      <div className="table">
      {sentiment == "" && loader === false ? "Please select subject to see the Sentiment Analysis" : loader ? <div className="laoding"><div className="loader"></div>Getting sentiment</div> : handleSentiment() }
      
      </div>
      <div style={{display: sentiment ==""? 'none' : 'block'}}>
      <div className="green">
        <span></span>
        <p>POSITIVE</p>
      </div>
      <div className="yellow">
        <span></span><p>NEUTRAL</p>
      </div>
      <div className="red">
        <span></span><p>NEGATIVE</p>
      </div>
      </div>
    </div>
  );
};

export default SentimentCard;
