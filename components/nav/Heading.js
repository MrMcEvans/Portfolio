import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { Reveal } from "../utils/Reveal";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <Reveal>
      <OutlineButton onClick={() => window.open("./Resume.pdf")}>
        View Resume
      </OutlineButton>
      <OutlineButton onClick={() => document.getElementById("contact")?.scrollIntoView()}>
        Contact Me
      </OutlineButton>
      </Reveal>
    </header>
  );
};
