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
    projectLink: "https://loom2-a5eb78e7d369.herokuapp.com",
    tech: ["Sequalize", "JavaScript", "Maria_Db", "BadWords"],
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
    tech: ["Node", "Express", "React", "GraphQl", "Mongoose", "Tailwind CSS"],
    description:
      "Introducuing GitFit, a fitness tracker that allows you to track your workouts and your progress.",
    modalContent: (
      <>
        <p>
            This project was built with a team of 5 developers. Git-Fit was made with the thought of the user in mind.
        </p>
        <p>
            Git-Fit allows the user to create a profile and track their workouts. The user can also view their progress on a graph that calculates which field of exercise they have done the most.
        </p>
        <p>
          This database allows for creation of profiles, workouts, and exercises. The database is built with MongoDB and Mongoose.
        </p>
        <p>
          The frontend is built with React and Tailwind CSS. The backend is built with Node, Express, and GraphQl.  
        </p>
        <p>
          Future development I would like to pursue is adding a social aspect to the app where users can share their progress with other users and compete with each other.
        </p>
      </>
    ),
  },
  {
    title: "TicketBooth",
    imgSrc: "project-imgs/vader.jpeg",
    code: "https://github.com/TheIanAnderson/Movie-Trailer-Search",
    projectLink: "https://theiananderson.github.io/Movie-Trailer-Search/",
    tech: ["YoutubeAPI", "imdb api", "jQuery", "Materialize CSS"],
    description:
      "This collaborative project was built with a team of 5 developers. This project was to show off our skills with api and fetch calls.",
    modalContent: (
      <>
        <p>
            This website allows the user to search for a movie and watch the trailer, view the case, and see all awards the movie was nominated for.
        </p>
        <p>
            This project was using calls from the imdb and youtube api to get the information needed based on queries that did not bring unusable data.
        </p>
        <p>
          The JS files were also built in jQuery to show our skills with the framework.
        </p>
      </>
    ),
  },
];

const projects = [
  {
    title: "Google Books",
    imgSrc: "project-imgs/Capture2.JPG",
    code: "https://github.com/MrMcEvans/GoogleBooks",
    projectLink: "https://googlebooks13-0e8ae4e0af6e.herokuapp.com",
    tech: ["Sequalize", "JavaScript", "Mongoose", "React", "Node", "Express"],
    description:
      "Ever wanted to keep track of books you want to read? This is the app for you. Google Books allows you to search for books and save them to your list.",
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
    imgSrc: "project-imgs/EcommerceDB.png",
    code: "https://github.com/MrMcEvans/eCommerce-Database",
    projectLink: "https://www.youtube.com/watch?v=m2GJ_BeAvoE",
    tech: ["Node", "Express", "MongoDB"],
    description:
      "An eccomerce database that allows the user to view, add, update, and delete products.",
    modalContent: (
      <>
        <p>
          This database is a framework that allows users to keep track of their inventory.
        </p>
        <p>
          The user can view all products, add a product, update a product, and delete a product.
        </p>
        <p>
          As well as assign products to different departments or tags to keep organized.
        </p>
      </>
    ),
  },
  {
    title: "Employee SQL Database",
    imgSrc: "project-imgs/Employee_db.png",
    code: "https://github.com/MrMcEvans/Employee_DataBase?tab=readme-ov-file",
    projectLink: "https://www.youtube.com/watch?v=xMCi9YksA58",
    tech: ["Node", "Inquirer", "Sequalize", "MySQL"],
    description:
      "A database that allows the user to view, add, update, and delete employees, roles, and departments.",
    modalContent: (
      <>
        <p>
          This database is a framework that allows users to keep track of their employees.
        </p>
        <p>
          The user can view all employees, add an employee, update an employee, and delete an employee.
        </p>
        <p>
          This application also allows the user to view all roles and departments, add a role or department, update a role or department, delete a role or department, and update salaries.
        </p>
      </>
    ),
  },
  {
    title: "User Generated Logo",
    imgSrc: "project-imgs/meme.png",
    code: "https://github.com/MrMcEvans/Logo_Creator/tree/main/CHALLENGES/Challenge08",
    projectLink: "",
    tech: ["Inquirer", "Jast", "JS"],
    description:
      "User generated logo is a backend inquirer app that allows the user to create a logo based on their input.",
    modalContent: (
      <>
        <p>
          This application asks the user questions about how they would wants their logo to looks.
        </p>
        <p>
          Those answers are taken and used to create a simple svg logo that will represent the answers provided and will be saved to the user's computer.
        </p>
        <p>
          The source code also went through complete jest testing to ensure the code is working properly.
        </p>
      </>
    ),
  },
  {
    title: "Old Portfolio",
    imgSrc: "project-imgs/Capture.jpg",
    code: "https://github.com/MrMcEvans/Challeng02",
    projectLink: "https://mrmcevans.github.io/Challeng02/",
    tech: ["HTML", "CSS"],
    description:
      "My initial portfolio that I built in my bootcamp. I have since updated it to be more modern as you have noticed Lol.",
    modalContent: (
      <>
        <p>My old portfolio was made just over six months ago using basic coding frameworks like html and css</p>
        <p>
          I have included this project to show how far I have come in such a short time and how I can better my knowlegde with you.
        </p>
        <p>You get the idea.</p>
      </>
    ),
  },
  {
    title: "This Page",
    imgSrc: "project-imgs/Portfolio.png",
    code: "https://github.com/MrMcEvans/Portfolio",
    projectLink: "#",
    tech: ["React", "nextJs", "SCSS", "Framer-Motion"],
    description:
      "My digital showcase of my skills as a web developer. This page has been a joy to create and I hope you enjoy it too!",
    modalContent: (
      <>
        <p>This page is my showcase of what I have achieved in my process of web development</p>
        <p>
          This application was made with my heart in development and design.
        </p>
        <p>Future development will greatly improve the technologies of this portfolio as I show off
          my skills as a backend developer as well
        </p>
      </>
    ),
  },
];
