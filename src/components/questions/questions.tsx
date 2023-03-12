import { useState } from "react";
import classNames from "classnames/bind";

import "react-dropdown/style.css";

import classes from "./questions.module.scss";

let cx = classNames.bind(classes);

export const Questions = () => {
  const dataArr = [
    {
      title: "Koszt usług.",
      text: [
        "Wszystkie usługi, w tym diagnostyka, są odpłatne. Cena zależy od sytuacji, w jakiej się znajdujesz.",
      ],
    },
    {
      title: "Dlaczego praca bez diagnostyki jest niebezpieczna?",
      text: [
        ' "Czy możemy przejść od razu do rzeczy?" ',
        'Często słyszę to od klientów w pośpiechu, którzy chcą mieć efekty od razu. "Pomińmy zbędne gadanie i przejdźmy do rytuału", mówią mając nadzieję, że pójdę na spotkanie. Ale ja nie. ',
        "Przed podjęciem decyzji o rytuale i jego przeprowadzeniu, zawsze przeprowadzam diagnozę. To tam dowiaduję się, czy są zaklęcia na klienta, czy osoba, w której mój klient jest zakochany, jest dostępna, czy mój klient jest zakochany, czy jest coś jeszcze, czego nie uwzględniliśmy. To tak jak z rentgenem w szpitalu..",
        "Przecież jeśli boli Cię ręka, to może to być nie tylko złamanie, ale też np. stłuczenie lub po prostu zwichnięcie, a te wszystkie trzeba leczyć inaczej.",
        "Podobnie jest w dziedzinie Magii.",
        "Zawsze sprawdzam biopole klienta i osoby, na której zamierzam wykonać rytuał.",
        "Zdarza się, że klient prosi o zaklęcie na ukochaną osobę, ale okazuje się, że sam jest korona celibatu. Gdybym nie zrobiła diagnostyki i od razu zrobiłabym rytuał, to po pierwsze nie zadziałałby, a po drugie mogłyby być nieprzewidywalne konsekwencje, bo mój rytuał był nałożony na stary obrzęd celibatu.",
        "Dlatego nigdy nie idę na ustępstwa w tej kwestii. Jeśli klientowi bardzo się spieszy, zaproponuję przełożenie sesji na inny dzień.",
        "Nigdy jednak nie odwołam diagnozy. Jestem odpowiedzialna za wynik, więc nie pozwolę się pospieszać",
        "Co jest dla Ciebie ważniejsze? Jakość czy szybkość? Czy zaufałabyś/ zaufałbyś specjaliście, który nie dba o szczegóły?",
      ],
    },
    {
      title: "Kiedy mogę spodziewać się rezultatów?",
      text: [
        "W magii istnieją pewne magiczne liczby, od których zależy czas i skuteczność rytuałów, a mianowicie liczby 3, 9, 21 i 40.Pierwsze oznaki ważności rytuału pojawiają się trzeciego, dziewiątego, dwudziestego pierwszego lub czterdziestego dnia po wykonaniu rytuału.Termin ostatecznej realizacji wynosi zwykle 41 dni od ostatnich aktów.Rzadziej wykonanie rytuału odpowiada tym liczbom w miesiącach lub latach. ",
        "Jest też wiele czynników, które należy wziąć pod uwagę, aby określić ostateczny rezultat:",
        " 1. Indywidualne cechy klienta.",
        " 2. Charakterystyka samego rytuału.",
        " 3. Czy rytuał jest jasny czy ciemny, z jakimi siłami pracuje rytuał.",
        " 4. Ilość razy, kiedy należy wykonać rytuał - czasem są to trzy dni (czyli rytuał wykonuje się 3 razy) lub 1 raz, lub 9 razy itd.",
        " 5. Występowanie siły wyższej i jak wyjaśniłeś wystąpienie tych okoliczności.",
        " 6. Wiara w rytuał.",
      ],
    },
    {
      title: "Jak rozpoznać oszusta?",
      text: [
        "Zrobiłam niektóre badania na temat wróżbitów online, kim są ich i dlaczego ludzie trafiają w ręce aferzystów i ich zyski .",
        "Aby nie stać się ofiarą oszustów:",
        "1- Zwróć uwagę na numer konta naktóry proszą Cię o przesłanie pieniędzy za usługę, 90% pseudo wróżbitów prosi o dokonanie wpłaty na cudze konto, czyli jeśli jest to wróżka Amelia , to podajedane Hanny, gdy pytają dlaczego konto na cudze nazwisko? Odpowiadają, że tojej siostra lub ktoś inny, w niektórych przypadkach podają konto bankowe swoichmężów .",
        "2 - Poproś o rozmowę telefoniczną i upewnij się, że osoba z którąpiszesz jest prawdziwą osobą za którą się&nbsp;podaję ",
        "90% wróżbitów onlineodmówiło mi, mówiąc, że nie mają czasu na wykonywanie telefonów.",
        "A jazaproponowałam, aby wysłali mi wiadomość głosową, na co również niegrzecznie miodmówili i zaczęli mi wmawiać, że są dziedzicznymi czarownicami od 20-30 lat,jeśli mi nie wierzysz przeczytaj ich recenzje, to jest 100% oszustwo.",
        "3-Forum (recenzje).",
        "Wystarczy przeprowadzić analizę forum na których pisząrecenzje o wróżbitach.",
        "Przeczytałam recenzje 5-6 wróżbitów, i było jasne, żerecenzje są bardzo złe, a co najciekawsze wszystkie jednakowo napisane recenzje,ale od różnych osób, czyli widać, że konkurenci piszą złe recenzje sobienawzajem . ",
        "Nie zdziwiłambym się, gdyby i o mnie pisali bzdury.",
        "Mimo, że pracę w sieci rozpocząłem na początku 2023 roku.",
        "4- Dowód (wideo z rytuału)",
        "Poproś o krótkie wideo z rytuału, płacisz i masz do tego prawo.",
      ],
    },
  ];

  const [open, setOpen] = useState<{ [key: string]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  return (
    <section className={classes.questions} id="faq">
      <h2 className={classes.questions__title}>Najczęściej zadawane pytania (FAQ)</h2>
      <ul className={classes["questions-list"]}>
        {dataArr.map((item, index) => (
          <li className={classes["questions-list-item"]} key={index}>
            <div className={classes["questions-list-item-buttonsBlock"]}>
              <h3 className={classes["questions-list-item__title"]}>{item.title}</h3>
              <button
                className={cx({
                  "questions-list-item__button": true,
                  "questions-list-item__button--open": open[index],
                })}
                type="button"
                onClick={() => setOpen((v) => ({ ...v, [index]: !v[index] }))}>
                +
              </button>
            </div>

            <span
              className={classes["questions-list-item__text"]}
              style={open[index] ? { maxHeight: "10000px" } : { maxHeight: "0" }}>
              {item.text.map((item, index) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
