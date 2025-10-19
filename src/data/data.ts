import FoodMenu from "/img/menu/1.jpg";
import DrinkMenu from "/img/menu/2.jpg";
import TakeawayMenu from "/img/menu/3.jpg";

export const headerMenu: string[] = ["About", "Menu", "Info", "Booking"];

export type menuImagesType = {
  food: string;
  drinks: string;
  takeaway: string;
};

export const menuImages: menuImagesType = {
  food: FoodMenu,
  drinks: DrinkMenu,
  takeaway: TakeawayMenu,
};

type infoBlockType = {
  title: string;
  description: string[][];
};

export const infoBlock: infoBlockType[] = [
  {
    title: "Location",
    description: [["101 Cuba St", "Te Aro, Wellington"]],
  },
  {
    title: "Hours",
    description: [
      ["Tuesday to Friday", "7AM - 3PM"],
      ["Saturday to Sunday", "8AM - 3PM"],
    ],
  },
  {
    title: "Mondays?",
    description: [["We are closed on Mondays", "to reflect and refuel"]],
  },
];

export const footerMenu: string[] = [
  "Home",
  "About",
  "Menu",
  "Info",
  "Contact",
  "Bookings",
  "Privacy Policy",
  "Style Guide",
  "Licenses",
  "Instructions",
	"Changelog",
	"Password",
	"404"
];
