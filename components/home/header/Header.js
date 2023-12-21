import { StandardButton } from '@/components/buttons/StandardButton';
import { Reveal } from '@/components/utils/Reveal';
import styles from './header.module.scss';
import Image from 'next/image';
import Port from 'public/Port.jpg';

export const Header = () => {
  return (
    <div className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hello, My Name Is Andrew Evans<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Full Stack Developer</span>
          </h2>
          
          <h2 className={styles.subTitle}>
            <span>React.js</span> | <span>Node.js</span> | <span>Next.js</span> | <span>Express.js</span> | <span>Sequelize</span> | <span>GraphQL</span> | <span>MongoDB</span> | <span>MySQL</span> | <span>JavaScript</span> | <span>Git</span> | <span>GitHub</span> | 

            
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
          I&apos;ve been working hard to build my skills in web development and I&apos;m excited to
            share my work with you. I&apos;m currently looking for a full-time position as a
            developer.
          </p>
        </Reveal>
        <Reveal>
      <Image
        src="/Port.jpg"
        width={300}
        height={400}
        alt="Picture of the author"
      />
    </Reveal>
      </div>
    </div>
  );
};

      