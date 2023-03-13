import { useEffect, useMemo, useState } from "react";

import classNames from "classnames/bind";

import classes from "./questions.module.scss";

import { questions } from "../../data/questions/questions";

let cx = classNames.bind(classes);

export const Questions = () => {
  
  const dataArr = useMemo(() => [...questions], []);

  const [open, setOpen] = useState<{ [key: string]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const [firstMount, setFirstMount] = useState(false);

  useEffect(() => {
    const elems = Array.from(document.querySelectorAll(".hide"));
    elems.forEach((item, index) => {
      dataArr[index].height = `${(item as HTMLSpanElement).offsetHeight + 20}px`;
    });
    setFirstMount(true);
  }, []);

  return (
    <section className={classes.questions} id="faq">
      <h2 className={classes.questions__title}>Najczęściej zadawane pytania (FAQ)</h2>
      <ul className={classes["questions-list"]}>
        {dataArr.map((item, index) => (
          <li className={classes["questions-list-item"]} key={index}>
            <div
              className={classes["questions-list-item-buttonsBlock"]}
              onClick={() => setOpen((v) => ({ ...v, [index]: !v[index] }))}>
              <h3 className={classes["questions-list-item__title"]}>{item.title}</h3>
              <button
                className={cx({
                  "questions-list-item__button": true,
                  "questions-list-item__button--open": open[index],
                })}
                type="button">
                +
              </button>
            </div>

            <span
              className={classes["questions-list-item__text"]}
              style={open[index] ? { height: item.height } : { height: "0" }}>
              <div style={{ display: "inline-block" }} className="hide">
                {item.text.map((item) => (
                  <span key={item}>
                    {item}
                    <br />
                  </span>
                ))}
              </div>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
