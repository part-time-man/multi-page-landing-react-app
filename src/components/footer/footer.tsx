import React from "react";

import classes from "./footer.module.scss";
import telegramIcon from "../../assets/imgs/footer/telegram.png";
import faceBookIcon from "../../assets/imgs/footer/facebook.png";
import instagramIcon from "../../assets/imgs/footer/instagram.png";
import whatsappIcon from "../../assets/imgs/footer/whatsapp.png";

export const Footer = () => {
  return (
    <footer className={classes.footer} id="contacts">
      <div className={classes.container}>
        <h3>Сontact links:</h3>
        <ul className={classes["footer-links"]}>
          <li>
            <a href="https://t.me/angelika_czarownica" target={"_blank"}>
              <img src={telegramIcon} alt="telegramIcon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100090081493619" target={"_blank"}>
              <img src={faceBookIcon} alt="faceBookIcon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/angelika_czarownica/" target={"_blank"}>
              <img src={instagramIcon} alt="instagramIcon" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/48790898305" target={"_blank"}>
              <img src={whatsappIcon} alt="whatsappIcon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
