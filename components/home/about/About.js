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
                former restaurant worker that has always had the passion for coding.
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
                Outside of work I&apos;m a huge fan of the outdoors. I love
                hiking, biking, and camping. I also love my two amazing dogs.
                Aside from touching grass I am a huge fan of video games and
                movies. I love to play games with my friends and I love to
                watch movies with my incredible wife.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I&apos;m passively looking for new positions where I can merge my
                love for code with my work life. Once again THANK YOU for taking
                the time to review my portfolio. I hope you have a great day and
                would love to talk to you soon!
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
  