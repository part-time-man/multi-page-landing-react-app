import { Presentation } from "../presentation";
import { AboutMe } from "../aboutMe";
import { Rituals } from "../rituals";
import { Reviews } from "../reviews";
import { Questions } from "../questions";
import { Contacts } from "../contacts";

import classes from "./main.module.scss";

export const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <Presentation />
        <AboutMe />
        <Rituals />
        <Reviews />
        <Questions />
        <Contacts />
      </div>
    </main>
  );
};
