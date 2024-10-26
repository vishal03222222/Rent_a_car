import React, { Component } from 'react';

class UsSection extends Component {
  render() {
    return (
      <section className="us_section">
        <div className="container">
          <div className="heading_container">
            <h2>Why choose Us</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
          </div>
        </div>
        <div className="us_container layout_padding2">
          <div className="content_box">
            <div className="box">
              <div className="img-box">
                <img src="images/u-1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Low Rent</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Fast Car</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Safe Car</h5>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Quick Support</h5>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>
    );
  }
}

export default UsSection;
