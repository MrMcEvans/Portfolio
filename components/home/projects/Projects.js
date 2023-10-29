import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Personal Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
      <SectionHeader title="Collaborative Projects" dir="r" />

      <div className={styles.projects}>
        {collabProject.map((collabProject) => {
          return <Project key={collabProject.title} {...collabProject} />;
        })}
      </div>
    </section>
  );
};

const collabProject = [
  {
    title: "LOOM",
    imgSrc: "project-imgs/Loom.png",
    code: "https://github.com/julianlosak/Loom",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Sequalize", "JavaScript", "Maria_Db", "FastAPI"],
    description:
      "A text adventure game that lets the users create their own branches of the story.",
    modalContent: (
      <>
        <p>
          A text adventure game that lets the users create their own branches of
          the story. The game is built with a Handlebars frontend and a Node backend.
        </p>
        <p>
        The database is built with MariaDB and Sequelize. The game is hosted on Heroku.
        </p>
        <p>
        The team in total consists of 5 developers. This is a passion project
          for all of us. I worked on the backend and database and handled the initial story.
        </p>
        <p>
        When a player creates their own branch it is hosted live with MariaDb to allow
          other players to play their story. With it being hosted on Heroku, the game has a bad
          word filter to prevent any inappropriate content from being posted.
        </p>
        <p>
        </p>
      </>
    ),
  },
  {
    title: "GitFit",
    imgSrc: "project-imgs/GitFit.png",
    code: "https://github.com/akecs512/Git-Fit-Fitness-Tracker",
    projectLink: "https://enigmatic-garden-97881-5a06f2d72820.herokuapp.com/login",
    tech: ["Node", "Express", "React", "GraphQl", "Redis"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
      </>
    ),
  },
  {
    title: "TicketBooth",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
      </>
    ),
  },
];

const projects = [
  {
    title: "Google Books",
    imgSrc: "project-imgs/GoogleSearch.png",
    code: "https://github.com/MrMcEvans/GoogleBooks",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Sequalize", "JavaScript", "Maria_Db", "FastAPI"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
            This is a full stack application that uses the Google Books API to search for books.
        </p>
        <p>
            The user can search for a book and save it to their list. The user can also view the book on Google Books.
        </p>
        <p>
          Future development will include a social aspect where users can share their favorite books
          with other users.
        </p>
        <p>
          Future Development will also link books to Amazon so users can purchase books.
        </p>
      </>
    ),
  },
  {
    title: "E_Commerce Database",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Node", "Express", "Postgres", "Kafka", "Redis"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p>
          The Canvas Club is a social community for painters to connect with
          others in their community.
        </p>
        <p>
          I work primarily on the backend, a collection of Node & Express
          microservices. Data is stored primarily in Postgres & cached in Redis.
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "BrushWire",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
        <p>
          Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
          creative {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Old Portfolio",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
