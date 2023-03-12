import classes from "./presentation.module.scss";

import first from "../../assets/imgs/main/first.jpeg";

export const Presentation = () => {
  return (
    <section className={classes.presentation}>
      <div className={classes["presentation-first"]}>
        <div className={classes["presentation-first-titles"]}>
          <h1>Dziedziczna czarownica </h1>
          <h2>Angelika Karolak</h2>
          <p>
            Pomogę Ci skorygować takie problemy jak nieodwzajemniona miłość, niezgoda w rodzinie,
            chroniczne niepowodzenia, brak pieniędzy, lęki, choroby, złe oko, korona celibatu.
          </p>
        </div>
        <div className={classes["presentation-first-buttons"]}>
          <a href="#about_me" type="button">O mnie</a>
          <a href="#rituals" type="button">Moje rytuały</a>
        </div>
      </div>
      <div>
        <img src={first} alt="photo" className={classes.presentation__img} />
      </div>

    </section>
  );
};
