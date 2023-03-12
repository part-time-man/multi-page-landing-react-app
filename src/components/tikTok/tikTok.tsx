import React from "react";
import classes from "./tikTok.module.scss";

import tikTokScreenshoot from "../../assets/imgs/main/tikTok.png";

import avatar from "../../assets/imgs/main/aboutMe_4.jpeg";

export const TikTok = () => {
  return (
    <section className={classes.tikTok} id='tik_tok'>
      <div className={classes["tikTok-firstBlock"]}>
        <ul className={classes["tikTok-firstBlock-list"]}>
          <li>
            <p>
              Drodzy klienci! Chcę Wam przekazać wspaniałą wiadomość! Mam konto na TikTok, gdzie
              będę prowadziła regularne transmisje!
            </p>
          </li>
          <li>
            <p>Będzie mi bardzo miło Was zobaczyć!</p>
          </li>
          <li>
            <p>
              <a href="https://www.tiktok.com/@angelika_czarownica">Mój TikTok</a>
            </p>
          </li>
        </ul>

        <img src={tikTokScreenshoot} alt="tik tok screenshoot" className={classes["tikTok-firstBlock__img"]}/>
      </div>
      <div className={classes["tikTok-secondBlock"]}>
        <p>
          Potrzebujesz pomocy? Skontaktuj się ze mną na dowolnym portalu społecznościowym, a znajdę
          odpowiedzi na Twoje pytania!
        </p>
      </div>
      <div className={classes["tikTok-thirdBlock"]}>
        <img src={avatar} alt="Angelika Karolak" />
        <span>Angelika Karolak</span>
      </div>
    </section>
  );
};
