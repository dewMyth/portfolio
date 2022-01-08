import "./About.css";

import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quia
          fugiat id inventore, quas pariatur.
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est
          ut, debitis explicabo reiciendis voluptate assumenda provident ducimus
          quo sed tempore harum et nesciunt atque nam excepturi quia pariatur.
          Ex.
        </p>
        <div className="about-award">
          <img src={Award} alt="" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">Lorem Ipsum</h4>
            <p className="about-award-desc">
              Lorem Tpusmu uhsl lebitis explicabo reiciendis voluptate assumenda
              provident ducimus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
