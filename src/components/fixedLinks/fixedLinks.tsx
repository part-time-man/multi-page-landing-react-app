import { useState } from "react";
import classNames from "classnames/bind";

import classes from "./fixedLinks.module.scss";
import telegramIcon from "../../assets/imgs/footer/telegwhite.png";
import faceBookIcon from "../../assets/imgs/footer/facewhite.png";
import instagramIcon from "../../assets/imgs/footer/instwhite.png";
import whatsappIcon from "../../assets/imgs/footer/whatswhite.png";
import chat from "../../assets/imgs/footer/chat.png";
import close from "../../assets/imgs/footer/close.png";

const cx = classNames.bind(classes);

export const FixedLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.fixedLinks}>
        <ul
          className={cx({
            open: open,
          })}>
          <li>
            <a href="https://t.me/angelika_czarownica" target={"_blank"} title="Telegramm">
              <img src={telegramIcon} alt="telegramIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100090081493619"
              target={"_blank"}
              title="Facebook">
              <img src={faceBookIcon} alt="faceBookIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/angelika_czarownica/"
              target={"_blank"}
              title="Instagramm">
              <img src={instagramIcon} alt="instagramIcon" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/48790898305" target={"_blank"} title="Whats app">
              <img src={whatsappIcon} alt="whatsappIcon" />
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.fixWrapper} onClick={() => setOpen((v) => !v)}>
        <img
          className={cx({
            arrow: true,
            arrowOpen: open,
          })}
          src={open ? close : chat}
          alt="chat"
        />
      </div>
    </>
  );
};
