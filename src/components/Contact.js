import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 contact">
        <center>
          <h2> Contact Us </h2>
        </center>
        <div className="contact-row">
          <div className="col-66 p-45 my-5">
            <h3> Contact Details </h3>

            <h5>Pakistan office: +92 3114413598</h5>
            <h5> Dubai office: +92 3114413598</h5>
            <h5> America office: +92 3114413598</h5>
            <h5> Canada office: +92 3114413598</h5>

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
                src="./images/laptop.jpg"
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

export default Contact;
