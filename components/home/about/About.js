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
                Hi, I’m Andrew — a Texas-based web developer with a non-traditional path into tech and a deep passion for building meaningful digital experiences.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I transitioned from the restaurant industry into software development and have been working professionally as a developer for the past two years. That background gave me a strong foundation in communication, adaptability, and performing under pressure — skills I now apply to building reliable, scalable applications. 
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                My primary stack includes React, Next.js, GraphQL, and Node.js, with hands-on experience building full-stack applications and production-ready web platforms. I’m currently expanding my expertise in TypeScript and Python to deepen my backend and systems-level capabilities. I enjoy working across the stack — from crafting intuitive front-end experiences to designing structured APIs and data flows.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I’m especially interested in joining a collaborative team where I can contribute to clean architecture, thoughtful UX, and maintainable codebases while continuing to grow as an engineer.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                Outside of development, I’m usually outdoors hiking, biking, or camping. I’m also a big fan of gaming and movies — whether that’s playing online with friends or watching something great with my wife. Balance matters to me, and I bring that same intentionality to my work.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I’m currently open to new opportunities and would love to connect if you think I’d be a strong fit for your team.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                Thanks for taking the time to review my portfolio.
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
  
