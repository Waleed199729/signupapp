import React from "react";
import "./About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 about">
        <center>
          <h2>ABOUT US</h2>
        </center>
        <div className="about-row">
          <div className="col-66 p-45 my-5">
            <h3> Meet The Team </h3>
            <p>
              If you're looking for random paragraphs, you've come to the right
              place. When a random word or a random sentence isn't quite enough,
              the next logical step is to find a random paragraph.
              <br></br>
              <br></br>A few examples of how some people use this generator are
              listed in the following paragraphs. If you're looking for random
              paragraphs, you've come to the right place. When a random word or
              a random sentence isn't quite enough, the next logical step is to
              find a random paragraph. We created the Random Paragraph Generator
              with you in mind. The process is quite simple. Choose the number
              of random paragraphs you'd like to see and click the button. Your
              chosen number of paragraphs will instantly appear. While it may
              not be obvious to everyone,<br></br>
              <br></br>
              there are a number of reasons creating random paragraphs can be
              useful. A few examples of how some people use this generator are
              listed in the following paragraphs. there are a number of reasons
              creating random paragraphs can be useful. A few examples of how
              some people use this generator are listed in the following
              paragraphs.
            </p>
            <div className="btn">
              <a href="" className="btn">
                {" "}
                Read More{" "}
              </a>
            </div>
          </div>

          <div className="col-6 my-5">
            <div>
              <img
                src="./images/aboutteam.jpg"
                width="100%"
                height="500vh"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
