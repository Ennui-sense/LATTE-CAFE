import "./Menu.scss";
import Button from "../../components/Button/Button";

import { menuImages } from "../../data/data";
import type { menuImagesType } from "../../data/data";
import { useState } from "react";

type menuCategories = keyof menuImagesType;

const Menu = () => {
  const [menu, setMenu] = useState<menuCategories>("food");

  const handleClick = (type: menuCategories) => {
    setMenu(type);
  };

  return (
    <section className="menu">
      <div className="menu__inner container">
        <div className="menu__body">
          <h2 className="menu__title">Menu</h2>
          <p className="menu__description">
            We change our menu every season. Here is what we are currently
            dishing up.
          </p>
          <div className="menu__types">
            <Button
              isActive={menu === "food"}
              onClick={() => handleClick("food")}
            >
              Food Menu
            </Button>
            <Button
              isActive={menu === "drinks"}
              onClick={() => handleClick("drinks")}
            >
              Drinks Menu
            </Button>
            <Button
              isActive={menu === "takeaway"}
              onClick={() => handleClick("takeaway")}
            >
              Takeaway Menu
            </Button>
          </div>
        </div>

        <img
          src={menuImages[menu]}
          alt=""
          className="menu__image"
          width={664}
          height={1037}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Menu;
