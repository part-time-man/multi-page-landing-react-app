import React from "react";
import classes from "./header.module.scss";

export const Header = () => {
  const linksArr = [
    "O mnie",
    "Moje rytuały",
    "Opinie klientów",
    "FAQ",
    "Nowy! Audycje w TikTok",
    "Kontakt",
  ];

  const idArr = ['about_me', 'rituals', 'reviews', 'faq', 'tik_tok', 'contacts']

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <ul className={classes["nav-list"]}>
            {linksArr.map((item, id) => (
              <li key={id} className={classes["nav-list-item"]}>
                <a href={`#${idArr[id]}`} className={classes["nav-list-item__link"]}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
