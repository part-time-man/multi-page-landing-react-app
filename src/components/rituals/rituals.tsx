import React from "react";
import Popup from "reactjs-popup";

import { rutualsData } from "../../data/rituals/ritualsData";

import classes from "./rituals.module.scss";

export const Rituals = () => {
  return (
    <section className={classes.rituals} id='rituals'>
      <h2 className={classes.rituals__title}>Moje rytuały</h2>
      <p className={classes.rituals__text}>
        Proszę o uwagę, przed wykonaniem rytuału muszę wykonać diagnozę, która również kosztuje.
        Proszę przeczytać w sekcji FAQ dlaczego jest to konieczne.
      </p>
      <ul className={classes["rituals-list"]}>
        {rutualsData.map((item, index) => (
          <Popup
            position="top center"
            closeOnDocumentClick={true}
            modal={true}
            lockScroll={true}
            key={index} 
            trigger={
              <li className={classes["rituals-list-item"]}>
                <img src={item.img} alt="ritual" />
                <span>{item.title}</span>
                <button type="button">Zobacz więcej</button>{" "}
              </li>
            }>
            <div className={classes["popup-block"]}>
              <img src={item.img} alt="ritual" />
              <div>
                <h3>{item.title}</h3>
                {item.text.split(".").map((item, index) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          </Popup>
        ))}
      </ul>
    </section>
  );
};
