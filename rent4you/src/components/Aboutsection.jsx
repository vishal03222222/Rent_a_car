import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <section className="about_section layout_padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 px-0">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="detail-box">
                <h2>About Our Cars</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
