import { useState } from "react";
import classes from "./header.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export const Header = () => {
  const linksArr = [
    "O mnie",
    "Moje rytuały",
    "Opinie klientów",
    "FAQ",
    "Nowy! Audycje w TikTok",
    "Kontakt",
  ];

  const idArr = ["about_me", "rituals", "reviews", "faq", "tik_tok", "contacts"];

  const [open, setOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav
          className={cx({
            nav: true,
            navOpen: open,
          })}>
          <ul className={classes["nav-list"]}>
            {linksArr.map((item, id) => (
              <li key={id} className={classes["nav-list-item"]}>
                <a
                  href={`#${idArr[id]}`}
                  className={classes["nav-list-item__link"]}
                  onClick={() => setOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={() => setOpen((v) => !v)}
          className={open ? classes.hamburger__active : classes.hamburger}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};
