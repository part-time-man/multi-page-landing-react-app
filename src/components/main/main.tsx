import React from "react";

import { Presentation } from "../presentation";
import { AboutMe } from "../aboutMe";
import { Rituals } from '../rituals';
import { Reviews } from '../reviews';
import { Questions } from "../questions";
import { TikTok } from '../tikTok/';


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
        <TikTok />
      </div>
    </main>
  );
};
