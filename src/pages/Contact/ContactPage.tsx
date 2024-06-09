import React, { useRef, useState } from "react";
import styles from "./ContactPage.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qjn684b", "template_zvpnc38", form.current!, {
        publicKey: "iVPr8KIM1m4ClcFkH",
      })
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setFormData({ name: "", email: "", message: "" });
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        alert("Error sending email");
      });

    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contactContainer}>
        <h1>Contact</h1>
        <div className={styles.contact_form}>
          <form ref={form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
