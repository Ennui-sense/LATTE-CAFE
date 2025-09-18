import FoodMenu from "/img/menu/1.jpg";
import DrinkMenu from "/img/menu/2.jpg";
import TakeawayMenu from "/img/menu/3.jpg";

export const headerMenu: string[] = ["About", "Menu", "Info", "Booking"];

export type menuImagesType = {
	food: string;
	drinks: string;
	takeaway: string;
}

export const menuImages: menuImagesType = {
	food: FoodMenu,
	drinks: DrinkMenu,
	takeaway: TakeawayMenu
}
