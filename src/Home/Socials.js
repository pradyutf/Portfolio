
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";




function Socials() {
  return (
    <div className="Socials">
      <a href="https://www.facebook.com/" className="icony"><FaFacebook /></a>
      <a href="https://www.twitter.com/" className="icony"><FaTwitter /></a>
      <a href="https://www.instagram.com/" className="icony"><FaInstagram /></a>
      <a href="https://www.linkedin.com/" className="icony"><FaLinkedin /></a>
      <a href="https://www.github.com/" className="icony"><FaGithub /></a>
    </div>
  );
}

export default Socials;