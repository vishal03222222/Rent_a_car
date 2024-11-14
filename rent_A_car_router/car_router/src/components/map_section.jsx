import React, { Component } from 'react';

class MapSection extends Component {
  render() {
    return (
      <section className="map_section">
        <div className="map_container">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
              width="600"
              height="300"
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default MapSection;
