import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";


export const About = () => {
    return (
      <section id="about" className="section-wrapper">
        <SectionHeader title="About" dir="l" />
        <div className={styles.about}>
          <div>
            <Reveal>
              <p className={`${styles.aboutText} `}>
                Hello! I&apos;m Andrew, a web developer based in Texas. I&apos;m a
                former restraunt worker that has always had the passion for coding.
                I&apos;ve been working as a developer for around 6 months now and
                I&apos;m loving every minute of it.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I&apos;m currently trying to find a job in the tech world and
                am looking forward to bringing my skills to a dedicated team.
                 I&apos;m working with React, Next.js, and GraphQL. I&apos;m also
                quite talented with Node.js and am currently learning typeScript and Python. 
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                Outside of work, I still love to paint. Any given Sunday
                you&apos;ll find me scribbling some happy clouds with my son ☁️ I
                even teach courses online if you&apos;re looking to learn!
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I&apos;m passively looking for new positions where I can merge my
                love for code with my love for the canvas. If you think
                you&apos;ve got an opening that I might like, let&apos;s connect
                🔗
              </p>
            </Reveal>
            <Reveal>
              <div className={styles.links}>
                <div className={styles.linksText}>
                  <span>My links</span>
                </div>
                <MyLinks />
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    );
  };
  