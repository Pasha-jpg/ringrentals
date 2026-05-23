import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';
function Contact() {
  return (
  	      <div className="content">
	        <div className="container">
	          <div className="row">
	            <div className="main col-sm-12">
	              <h1 className="section-title">Contact Us</h1>
	              <div className="contact-htmlForm">
	                <htmlForm action="contact.php" method="post">
	                  <div className="htmlForm-group">
	                    <label htmlFor="name">Name:</label>
	                    <input
	                      type="text"
	                      className="htmlForm-control"
	                      id="name"
	                      name="name"
	                      required
	                    />
	                  </div>
	                  <div className="htmlForm-group">
	                    <label htmlFor="email">Email:</label>
	                    <input
	                      type="email"
	                      className="htmlForm-control"
	                      id="email"
	                      name="email"
	                      required
	                    />
	                  </div>
	                  <div className="htmlForm-group">
	                    <label htmlFor="subject">Subject:</label>
	                    <input
	                      type="text"
	                      className="htmlForm-control"
	                      id="subject"
	                      name="subject"
	                      required
	                    />
	                  </div>
	                  <div className="htmlForm-group">
	                    <label htmlFor="message">Message:</label>
	                    <textarea
	                      className="htmlForm-control"
	                      id="message"
	                      name="message"
	                      rows="5"
	                      required
	                    ></textarea>
	                  </div>
	                  <button type="submit" className="btn btn-primary">
	                    Send Message
	                  </button>
	                </htmlForm>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    
  );
}

export default Contact;

