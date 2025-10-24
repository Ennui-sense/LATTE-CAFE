import "./Footer.scss";

import { footerMenu } from "../../data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          <ul className="footer__menu-list">
            {footerMenu.map((item) => (
              <li className="footer__menu-item" key={item}>
                <a href="#" className="footer__menu-link">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

				<div className="footer__info">
					<small className="footer__text footer__copyright">© Latte Cafe 2022.</small>
					<span className="footer__text footer__author">Built by <a href="#" className="footer__author-link">Nikolai Bain</a>.</span>
					<span className="footer__text footer__studio">Powered by <a href="#" className="footer__studio-link">Webflow</a>.</span>
				</div>
      </div>
    </footer>
  );
};

export default Footer;
