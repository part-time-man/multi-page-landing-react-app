import aboutMe_1 from "../../assets/imgs/main/aboutMe_1.jpeg";
import aboutMe_2 from "../../assets/imgs/main/aboutMe_2.jpeg";
import aboutMe_3 from "../../assets/imgs/main/aboutMe_3.jpeg";

import classes from "./aboutMe.module.scss";

export const AboutMe = () => {
  const textArr = [
    "Nazywam się Angelika, a moja magiczna historia zaczęła się jeszcze przed moimi narodzinami. Nazywam się Angelika, a moja magiczna historia zaczęła się jeszcze przed moimi narodzinami. ",
    "Poszłam w ich ślady i od dziecka uczyłam się naszego rodzinnego rzemiosła, bo pomaganie ludziom to moje powołanie.   Ludzie przychodzą do mnie z wieloma problemami: nieodwzajemnioną miłością, problemami rodzinnymi, brakiem pieniędzy, niepowodzeniami, lękami, nieszczęściem, chorobą. Wszystkie te problemy można rozwiązać, a jeśli nie da się ich rozwiązać normalnymi sposobami, pomagam magicznymi mocami!",
    "Kiedy pracuję z klientem, poświęcam dużo wewnętrznej energii, czasem nawet więcej niż wynosi moja bezpieczna norma; bo chcę mieć pewność, że naprawdę wszystko zrobiłam idealnie. Moi klienci otrzymują rezultaty i szczerze mi dziękują. Dają mi dużo jasnej, wypoczętej energii. I czuję się upoważniona do tego, by znów pomagać. ",
  ];

  const imgArr = [aboutMe_1, aboutMe_2, aboutMe_3];

  const dataArr = [];

  for (let i = 0; i < textArr.length; i++) {
    dataArr.push({
      img: imgArr[i],
      text: textArr[i],
    });
  }

  return (
    <section className={classes.aboutMe} id="about_me">
      <h2 className={classes.aboutMe__title}>O mnie</h2>
      <ul className={classes["aboutMe-list"]}>
        {dataArr.map((item, index) => (
          <li key={index} className={classes["aboutMe-list__item"]}>
            <img src={item.img} alt="photo" />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <a href="#contacts" className={classes.aboutMe__link}>
        Napisz do mnie!
      </a>
    </section>
  );
};
