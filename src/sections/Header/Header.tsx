import "./Header.scss";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import IconLink from "../../components/IconLink/IconLink";

import Email from "/img/icons/email.svg?react";

const Header = () => {
  return (
    <div>
      <Button>Drinks Menu</Button>
			<Logo></Logo>
			<IconLink href="#">
				<Email></Email>
			</IconLink>

    </div>
  );
};

export default Header;
