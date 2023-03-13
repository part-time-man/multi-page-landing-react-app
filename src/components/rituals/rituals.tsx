import React, { useState } from "react";
import Popup from "reactjs-popup";

import { RitualsTYPE, rutualsData } from "../../data/rituals/ritualsData";

import left from '../../assets/imgs/rituals/left.png'

import classes from "./rituals.module.scss";

export const Rituals = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ img: "", title: "", text: "" });

  const closeModal = () => setOpen(false);

  return (
    <section className={classes.rituals} id="rituals">
      <h2 className={classes.rituals__title}>Moje rytuały</h2>
      <p className={classes.rituals__text}>
        Proszę o uwagę, przed wykonaniem rytuału muszę wykonać diagnozę, która również kosztuje.
        Proszę przeczytać w sekcji FAQ dlaczego jest to konieczne.
      </p>
      <ul className={classes["rituals-list"]}>
        {rutualsData.map((item, index) => (
          <li
            className={classes["rituals-list-item"]}
            onClick={() => {
              setData({ ...item });
              setOpen((o) => !o);
            }}
            key={index}>
            <img src={item.img} alt="ritual" />
            <span>{item.title}</span>
            <button type="button">Zobacz więcej</button>
          </li>
        ))}
      </ul>
      <PopBlock closeModal={closeModal} open={open} item={data}></PopBlock>
    </section>
  );
};

const PopBlock: React.FC<{ open: boolean; item: RitualsTYPE; closeModal: () => void }> = ({
  open,
  item,
  closeModal,
}) => {
  return (
    <Popup
      position="top center"
      closeOnDocumentClick={true}
      modal
      lockScroll={true}
      open={open}
      onClose={closeModal}>
      <div className={classes["popup-block"]}>
        <button onClick={closeModal} className={classes["popup-block__button"]}>
          <img src={left} alt="return back" />
        </button>
        <div className={classes["popup-block-value"]}>
          <img className={classes["popup-block__img"]} src={item.img} alt="ritual" />
          <div className={classes["popup-block-text"]}>
            <h3>{item.title}</h3>
            {item.text.split(".").map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Popup>
  );
};
