import "./Logo.scss";
import LogoImage from "../../../img/logo.svg";

const Logo = () => {
  return (
    <div className="header__logo logo">
      <a href="#" className="logo__link">
        <img src={LogoImage} alt="Логотип нашей компании" className="logo__image"/>
      </a>

			<p className="logo__text">Автоматы по продаже питьевой воды</p>
    </div>
  );
};

export default Logo;
