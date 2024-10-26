import React, { Component } from 'react';

class BookSection extends Component {
  render() {
    return (
      <section className="book_section">
        <div className="form_container">
          <form action="">
            <div className="form-row">
              <div className="col-lg-8">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="parkingName">Pick Up Location</label>
                    <input type="text" className="form-control" placeholder="acb" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="parkingNumber">Drop Location</label>
                    <input type="text" className="form-control" placeholder="acb" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="parkingName">Pick Up Date</label>
                    <input type="text" className="form-control" placeholder="07/09/2020" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="parkingNumber">Return Date</label>
                    <input type="text" className="form-control" placeholder="07/09/2020" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-container">
                  <button type="submit" className="">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="img-box">
          <img src="images/book-car.png" alt="" />
        </div>
      </section>
    );
  }
}

export default BookSection;
