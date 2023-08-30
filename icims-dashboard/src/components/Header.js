import Menu from "./Menu";
import Notification from "./Notification";
import Profile from "./Profile";
const Header = () => {
  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        <Menu />
        <span className="logo">icims</span>
      </div>
      <div
        style={{
          width: "50px",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
