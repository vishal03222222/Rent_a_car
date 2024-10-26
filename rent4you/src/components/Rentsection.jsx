import React, { Component } from 'react';

class RentSection extends Component {
  render() {
    return (
      <section className="rent_section layout_padding">
        <div className="container">
          <div className="rent_container">
            <div className="box">
              <div className="img-box">
                <img src="images/r-1.png" alt="" />
              </div>
              <div className="price">
                <a href="">Rent $200</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/r-2.png" alt="" />
              </div>
              <div className="price">
                <a href="">Rent $200</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/r-3.png" alt="" />
              </div>
              <div className="price">
                <a href="">Rent $200</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/r-4.png" alt="" />
              </div>
              <div className="price">
                <a href="">Rent $200</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/r-5.png" alt="" />
              </div>
              <div className="price">
                <a href="">Rent $200</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/r-6.png" alt="" />
              </div>
              <div className="price">
                <a href="">Rent $200</a>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">See More</a>
          </div>
        </div>
      </section>
    );
  }
}

export default RentSection;
