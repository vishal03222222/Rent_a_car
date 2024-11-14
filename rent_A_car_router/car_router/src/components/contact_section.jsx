import React, { Component } from 'react';

class ContactSection extends Component {
  render() {
    return (
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Request A Call Back</h2>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="form_container">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" id="inputName4" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" id="inputSubject4" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Email id" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="inputMessage" placeholder="Message" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contact_items">
            <a href="">
              <div className="img-box">
                <img src="images/location.png" alt="" />
              </div>
              <h6>Loram Ipusum ari lo elisant na</h6>
            </a>
            <a href="">
              <div className="img-box">
                <img src="images/call.png" alt="" />
              </div>
              <h6>(+12 1234456789)</h6>
            </a>
            <a href="">
              <div className="img-box">
                <img src="images/mail.png" alt="" />
              </div>
              <h6>demo@gmail.com</h6>
            </a>
          </div>
          <div className="social_container">
            <div className="social-box">
              <div><a href=""><img src="images/fb.png" alt="" /></a></div>
              <div><a href=""><img src="images/twitter.png" alt="" /></a></div>
              <div><a href=""><img src="images/linkedin.png" alt="" /></a></div>
              <div><a href=""><img src="images/insta.png" alt="" /></a></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactSection;
