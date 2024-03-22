import ContactForm from "../contactForm/ContactForm";
import phone from "../../assets/images/Phoneicon.png";
import email from "../../assets/images/email.png";
import "./contact.scss";
import logo from "../../assets/images/logo.png";
import insta from "../../assets/images/insta.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import wave from "../../assets/images/wave.svg";

const Contact = () => {
  return (
    <div className="contact" style={{backgroundImage: `url("${wave}")`}}>
      <div className="contactMapAddress">
        <h1>Contact Us</h1>
        <div className="map">
          <iframe
            title="place"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.328259314668!2d-118.30322632367972!3d34.163524111845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bff63417cb69%3A0x667583f9f3a97353!2s400%20Thompson%20Ave%2C%20Glendale%2C%20CA%2091201!5e0!3m2!1sen!2sus!4v1706467665084!5m2!1sen!2sus"
            onLoad={() => console.log("laded")}
            width="93%"
            height="350px"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h3>400 Thompson Ave 400 Thompson Ave, Glendale, CA 91201</h3>
      </div>
      <div className="contactEmailPhone">
        <ContactForm />
        <div className="phoneEmail">
          <h2>
            <img src={phone} alt="phone" height="26" />
            <a id="phone" href="tel:8188606802">
              {" "}
              818-860-6802
            </a>
          </h2>
          <h2>
            <img src={email} alt="email" height="26" />
            <a id="email" href="mailto:marinebalyan1980@gmail.com">
              {" "}
              marinebalyan1980@gmail.com
            </a>
          </h2>
        </div>
      </div>
      <div className="contactLogoSocialMedia">
          <img src={logo} alt="logo" />
        <div className="socialMediaRight">
          <div className="SocialLogos">
            <img src={insta} alt="insta" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </div>
          <h3>Copyright 2024 Fluent Friends. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
