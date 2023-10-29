import React from "react";
import { SideBar } from "../nav/SideBar";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { Header } from "./header/Header";
import { OpenPage } from "./OpenPage/opening";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";


export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        
        <SideBar />
        <main className="main">
          <Heading />
          <OpenPage />
          <Header />
          <About />
          <Projects />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};

