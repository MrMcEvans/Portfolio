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
      


    </section>
  );
};

const projects = [
  {
    title: "Just USA Jeans",
    imgSrc: "project-imgs/JustUSAJeans.webp",
    code: "",
    projectLink: "https://justusajeans.com/",
    tech: ["Shoppify", "JavaScript"],
    description:
      "Brand & E-Commerce",
    modalContent: (
      <>
        <p>
          I designed and developed the complete e-commerce experience for Just USA Jeans, a California-based women’s denim brand with over 30 years of industry heritage. The project involved building a conversion-focused online storefront that balances strong brand storytelling with streamlined product merchandising.
        </p>
        <p>
        The site features structured product collections organized by fit (wide-leg, straight, skinny, flare, bootcut), intuitive navigation, responsive design, and a seamless shopping cart experience. I implemented a scalable layout to support new arrivals, best-seller highlights, seasonal lookbooks, and promotional campaigns while maintaining performance and usability across devices.
        </p>
        <p>
        Beyond front-end development, I ensured the brand’s messaging around craftsmanship, comfort, and sustainability was clearly integrated into the site architecture. The build supports strong product imagery, customer testimonials, and email capture flows to drive engagement and repeat traffic.
        </p>
        <p>
        Key Contributions:
        </p>
        <ul className="projectList">
        <li>
          Full front-end development and site structure
        </li>
        <li>
          E-commerce integration and product catalog organization
        </li>
        <li>
          Responsive, mobile-optimized design
        </li>
        <li>
          UX focused on product discovery and conversion
        </li>
        </ul>
      </>
    ),
  },
  {
    title: "Home High School Help",
    imgSrc: "project-imgs/HomeHighSchoolHelp.webp",
    code: "",
    projectLink: "https://enigmatic-garden-97881-5a06f2d72820.herokuapp.com/login",
    tech: ["Node", "Express", "React", "Tailwind CSS"],
    description:
      "Course Platform & Subscription System",
    modalContent: (
      <>
        <p>
          I architected and developed HomeHighSchoolHelp.com, a digital education platform designed to deliver structured homeschool curriculum through a purchase- and subscription-based model. The site combines content marketing, product sales, and gated course delivery within a unified system.
        </p>
        <p>
        Beyond the public-facing website, I built a backend course management structure that dynamically ties curriculum data to user purchases and subscription levels. Course access is automatically controlled based on payment status, enabling secure content delivery, scalable enrollment, and recurring subscription management.
        </p>
        <p>
        The platform supports individual course purchases as well as bundled access models, with user authentication, gated lesson content, and structured curriculum progression. The architecture was designed to scale as new courses and educational products are added.
        </p>
        <p>
        Key Contributions:
        </p>
        <ul className="projectList">
        <li>
          Full website design and front-end development
        </li>
        <li>
          Backend course data architecture tied to purchases and subscriptions
        </li>
        <li>
          User authentication and gated content delivery
        </li>
        <li>
          Subscription logic for recurring access control
        </li>
        <li>
          Scalable course framework for future expansion
        </li>
        <li>
          E-commerce integration with secure checkout
        </li>
        </ul>
      </>
    ),
  },
  {
    title: "Select Materials",
    imgSrc: "project-imgs/SelectMaterials.webp",
    code: "https://github.com/MrMcEvans/Select_Materials",
    projectLink: "selectmaterials409.com",
    tech: ["React, Bootstrap, Node, Express"],
    description:
      "SEO optimized site for building materials business in Port Arthur, TX.",
    modalContent: (
      <>
        <p>
        I designed and developed SelectMaterials409.co, a streamlined business website for a regional construction materials supplier serving Southeast Texas. The site was built to establish credibility, clearly communicate services, and drive inbound quote requests from contractors and residential customers.
        </p>
        <p>
        The architecture focuses on clarity and speed — organizing material offerings, service areas, and contact pathways into a simple, conversion-driven layout. I implemented responsive design for field contractors accessing the site on mobile devices, along with structured service pages to improve search visibility and local SEO performance.
        </p>
        <p>
        The build supports scalable content updates, allowing the business to easily add new materials, service offerings, and project examples as operations expand.
        </p>
        <ul className="projectList">
          <li>
            Full website design and development
          </li>
          <li>
            Service-based content structure for local SEO
          </li>
          <li>
            Mobile-first, contractor-friendly UX
          </li>
          <li>
            Lead capture and quote request integration
          </li>
          <li>
            Scalable framework for business growth
          </li>
        </ul>
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
