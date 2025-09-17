import type { ReactNode } from "react";
import "./IconLink.scss";

interface IIconLink {
  children: ReactNode;
	href: string;
}

const IconLink = ({ children, href }: IIconLink) => {
  return (
    <a href={href} className="icon-link">
      {children}
    </a>
  );
};

export default IconLink;
