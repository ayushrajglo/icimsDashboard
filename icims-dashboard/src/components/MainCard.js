const MainCard = ({ title, value }) => {
    return (
      <div className="main-card">
        <p className="main-card-title">{title}</p>
        <div className="main-card-value">{value}</div>
      </div>
    );
  };
  
  export default MainCard;
  