import "./Logo.scss";
import LogoImage from "/img/logo.svg";

const Logo = () => {
  return (
    <a href="#" className="header__logo logo">
      <img
        src={LogoImage}
        alt="Logotype our company"
        className="logo__image"
        width={276}
        height={32}
      />
    </a>
  );
};

export default Logo;
