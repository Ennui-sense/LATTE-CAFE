import "./Header.scss";
import Logo from "../../components/Logo/Logo";
import IconLink from "../../components/IconLink/IconLink";

import Email from "/img/icons/email.svg?react";
import Facebook from "/img/icons/facebook.svg?react";
import Instagram from "/img/icons/instagram.svg?react";

import { headerMenu } from "../../data/data";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <nav className="header__menu">
          <ul className="header__menu-list">
            {headerMenu.map((item) => (
              <li className="header__menu-item" key={item}>
                <a href="#" className="header__menu-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Logo></Logo>

        <div className="header__contacts">
          <IconLink href="#">
            <Email></Email>
          </IconLink>
          <IconLink href="#">
            <Facebook></Facebook>
          </IconLink>
          <IconLink href="#">
            <Instagram></Instagram>
          </IconLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
