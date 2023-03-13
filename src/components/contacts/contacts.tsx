import classes from "./tikTok.module.scss";

import tikTokScreenshoot from "../../assets/imgs/main/tikTok.png";
import telegramIcon from "../../assets/imgs/footer/telegram.png";
import faceBookIcon from "../../assets/imgs/footer/facebook.png";
import instagramIcon from "../../assets/imgs/footer/instagram.png";
import whatsappIcon from "../../assets/imgs/footer/whatsapp.png";

import avatar from "../../assets/imgs/main/aboutMe_4.jpeg";

export const Contacts = () => {
  return (
    <section className={classes.tikTok} id="tik_tok">
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

        <img
          src={tikTokScreenshoot}
          alt="tik tok screenshoot"
          className={classes["tikTok-firstBlock__img"]}
        />
      </div>
      <div className={classes["tikTok-thirdBlock"]}>
        <p>
          Potrzebujesz pomocy? Skontaktuj się ze mną na dowolnym portalu społecznościowym, a znajdę
          odpowiedzi na Twoje pytania!
        </p>
        <img src={avatar} alt="Angelika Karolak" />
        <span>Angelika Karolak</span>
        <ul className={classes["social-links"]} id="contacts">
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
    </section>
  );
};
