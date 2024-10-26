import React, { Component } from 'react';

class BlogSection extends Component {
  render() {
    return (
      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Latest Blog</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
          </div>
        </div>
        <div className="blog_container">
          <div className="layout_padding2-top">
            <div className="carousel-wrap">
              <div className="owl-carousel">
                <div className="item">
                  <div className="box">
                    <div className="date-box">
                      <h6>04 Nov 2019</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/b-1.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Vintage</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable The point of using Lorem</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="date-box">
                      <h6>04 Nov 2019</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/b-2.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Steering wheels</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable The point of using Lorem</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="date-box">
                      <h6>04 Nov 2019</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/b-3.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Buick Car</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable The point of using Lorem</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="date-box">
                      <h6>04 Nov 2019</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/b-2.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Steering wheels</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable The point of using Lorem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogSection;
