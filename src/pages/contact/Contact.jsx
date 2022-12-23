import React from "react";
import "./contact.scss";
import contact from "../../assets/contact.svg";
import contactDark from "../../assets/contact-dark.svg";
import { social } from "../../data/data";
import { nanoid } from "nanoid";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { ContextP } from "../../contexts/ContextProvider";
const Contact = () => {
  const {
    themeToggle,
    handleFocus,
    nameInput,
    emailInput,
    messageInput,
    handleBlur,
    handleSubmit,
  } = ContextP();
  return (
    <div className="contact section" id="contact">
      <h1 className="cool-title">CONTACT ME</h1>
      <div className="container">
        <div className="contact__boxes">
          <div className="box">
            <form action="" onSubmit={handleSubmit}>
              <div className="input_container">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  ref={nameInput}
                  onFocus={() => handleFocus(nameInput)}
                  onBlur={() => handleBlur(nameInput)}
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="input_container">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  ref={emailInput}
                  onFocus={() => handleFocus(emailInput)}
                  onBlur={() => handleBlur(emailInput)}
                />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="input_container message">
                <textarea
                  name="user_message"
                  ref={messageInput}
                  onFocus={() => handleFocus(messageInput)}
                  onBlur={() => handleBlur(messageInput)}
                />
                <label htmlFor="name">Your Message</label>
              </div>
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.1,
                }}
              >
                Send <FaTelegramPlane />
              </motion.button>
            </form>
          </div>
          <div className="box">
            <div className="image">
              {themeToggle ? (
                <img src={contact} alt="" />
              ) : (
                <img src={contactDark} alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="social">
          <h1>Or You Can Contact With Me In One Of Those Guys !</h1>
          <motion.ul
            className="social__list"
            whileInView={{
              opacity: [0, 1],
              y: [100, 0],
              transition: {
                type: "spring",
                stiffness: 600,
              },
            }}
          >
            {social.map((item) => (
              <li key={nanoid()}>
                <span className="icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <span className="address">{item.address}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
