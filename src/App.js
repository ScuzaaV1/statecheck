import React from "react";
import "./App.css";

import InfoCard from "./Component/InfoCard";
import experience from "./Component/experience";
import CVComponent from "./Component/CVComponent";
import education from "./Component/education"
import SkillsList from "./Component/SkillsList"




const info = {
  imgSrc: "./omarr.png",
  name: "Omar Ben Massoud",
  profession: "Web Developement",
  address: "Route De Tunis Km 2.5",
  phone: 28777139,
  email: "omarbm2090@gmail.com",
  about:
    "Experience in project coordination, team and customer management. What I've loved most of every job I've had is established new networks based on trust, because it makes everything thrive. My current focus is to become a Web Developer and an E-Commerce expert."
};

export default function App() {
  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map(item => <CVComponent item={item} />);
  
  return (

    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>
              <i className="fa fa-cogs" /> Skills
            </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>
              <i className="fa fa-briefcase fa" /> Work Experience{" "}
            </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1>
              {" "}
              <i className="fa fa-university" /> Education{" "}
            </h1>
            {educationComponent}
          </section>

          <section className="other">
            <h1>
              {" "}
              <i className="fa fa-desktop" /> Other Interests{" "}
            </h1>
            <h3> Gaming</h3>
            <ul>
              <li>
                <i className="fa fa-book" /> Streaming
              </li>
              <li>
                <i className="fa fa-book" /> Gym
              </li>
            </ul>
            
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Scuzaav1</p>
        <i className="fa fa-facebook-square" />
        <i className="fa fa-instagram" />
        <i className="fa fa-github" />
        <i className="fa fa-linkedin-in" />
      </footer>
    </div>
  );
}

