import "./Contact.css";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from "react-icons/fa";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import React, { useState } from "react";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";

const Contact = () => {
  const success = useState(false);

  const contactsData = {
    email: "procreates@gmail.com",
    phone: "+91 212173314",
    address: "Scaler School Of Technology, Bangalore, India",

    sheetAPI: "",
  };

  const socialsData = {
    github: "https://github.com/",
    facebook: "https://www.facebook.com/",
    linkedIn: "https://www.linkedin.com/in",
    instagram: "https://www.instagram.com/",
    codepen: "https://codepen.io/",
    twitter: "https://twitter.com/",
    reddit: "https://www.reddit.com/user/",
    blogger: "https://www.blogger.com/",
    medium: "https://medium.com/@",
    stackOverflow: "https://stackoverflow.com/users/",
    gitlab: "https://gitlab.com/",
    youtube: "https://youtube.com/",
  };

  return (
    <div className="contacts" id="Contact">
      <div className="contacts--container">
        <h1>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form>
              <div className="input-container">
                <label htmlFor="Name">Name</label>
                <input
                  placeholder="Batman"
                  type="text"
                  name="Name"
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email">Email</label>
                <input
                  placeholder="Bruce@Wayne.com"
                  type="email"
                  name="Email"
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message">Message</label>
                <textarea
                  placeholder="I am Batman!"
                  type="text"
                  name="Message"
                  className="form-message"
                />
              </div>
              <div className="submit-btn">
                <button type="submit">
                  <p>{!success ? "Send" : "Sent"}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <div>
                <FiAtSign className="iconsDetails"/>
              </div>
              <p>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className="personal-details">
              <div>
                <FiPhone className="iconsDetails" />
              </div>
              <p>{contactsData.phone}</p>
            </a>
            <div className="personal-details">
              <div>
                <HiOutlineLocationMarker className="iconsDetails" />
              </div>
              <p>{contactsData.address}</p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter aria-label="Twitter"  className="SocialconsDetails"/>
                </a>
              )}
              {socialsData.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer">
                  <FaGithub aria-label="GitHub" className="SocialconsDetails" />
                </a>
              )}
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedinIn aria-label="LinkedIn" className="SocialconsDetails" />
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram aria-label="Instagram"  className="SocialconsDetails"/>
                </a>
              )}
              {socialsData.medium && (
                <a href={socialsData.medium} target="_blank" rel="noreferrer">
                  <FaMediumM aria-label="Medium"  className="SocialconsDetails"/>
                </a>
              )}
              {socialsData.blogger && (
                <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                  <FaBloggerB aria-label="Blogger"  className="SocialconsDetails"/>
                </a>
              )}
              {socialsData.youtube && (
                <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                  <FaYoutube aria-label="YouTube"  className="SocialconsDetails"/>
                </a>
              )}
              {socialsData.reddit && (
                <a href={socialsData.reddit} target="_blank" rel="noreferrer">
                  <FaRedditAlien aria-label="Reddit" className="SocialconsDetails" />
                </a>
              )}
              {socialsData.stackOverflow && (
                <a
                  href={socialsData.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaStackOverflow aria-label="Stack Overflow" className="SocialconsDetails" />
                </a>
              )}
              {socialsData.codepen && (
                <a href={socialsData.codepen} target="_blank" rel="noreferrer">
                  <FaCodepen aria-label="CodePen" className="SocialconsDetails" />
                </a>
              )}
              {socialsData.gitlab && (
                <a href={socialsData.gitlab} target="_blank" rel="noreferrer">
                  <FaGitlab aria-label="GitLab" className="SocialconsDetails" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <img
                src="https://dev-portfolio-template.netlify.app/static/media/contactsOrange.75754594.svg"
                alt='contacts'
                className='contacts--img'
            /> */}
    </div>
  );
};

export default Contact;