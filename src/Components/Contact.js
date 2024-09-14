import React from "react";
import Contactboxes from "./Contactboxes";
import "../Style.css";
import map from "../Images/Contact-img/map.png";
import telephone from "../Images/Contact-img/telephone .png";
import email from "../Images/Contact-img/email.png";
import checked from "../Images/Contact-img/checked.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23303863-7d29-48bb-b481-d2ebd9631346");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact-section" className="contact-us">
      <div className="container border-bottom border-danger pb-5">
        <p className="contact-small-heading"> CONTACT </p>
        <p className="contact-heading">Contact With Me </p>
        <div className="row">
          <div className="col-lg-4 order-lg-1 order-2 banner-content contact-us-box mt-5">
            <div className="row cont-width">
              <Contactboxes image={map} detail="Jagatpura, Jaipur, Rajasthan" />
            </div>
            <div className="row cont-width pt-3">
              <Contactboxes image={telephone} detail="+91 8257060642" />
            </div>
            <div className="row cont-width pt-3">
              <Contactboxes
                image={email}
                detail="chandankumarray4255@gmail.com"
              />
            </div>
            <div className="row cont-width pt-3">
              <Contactboxes image={checked} detail="Freelance Available" />
            </div>
          </div>
          <div class="col-lg-8 order-lg-2 order-1 mt-5">
            <div className="form-card1">
              <div className="form-card2">
                <form onSubmit={onSubmit} className="form">
                  <p className="form-heading">Get In Touch</p>
                  <div className="form-field">
                    <input
                      required=""
                      placeholder="Name"
                      className="input-field"
                      type="text"
                      name="name"
                    />
                  </div>

                  <div className="form-field">
                    <input
                      required=""
                      placeholder="Email"
                      className="input-field"
                      type="email"
                      name="email"
                    />
                  </div>

                  <div className="form-field">
                    <input
                      required=""
                      placeholder="Subject"
                      className="input-field"
                      type="text"
                      name="subject"
                    />
                  </div>

                  <div className="form-field">
                    <textarea
                      required=""
                      placeholder="Message"
                      cols="30"
                      rows="3"
                      className="input-field"
                      name="message"
                    ></textarea>
                  </div>

                  <button type="submit" className="sendMessage-btn">Send Message</button>
                </form>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
