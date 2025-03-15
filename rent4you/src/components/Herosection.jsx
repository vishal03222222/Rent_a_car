// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class HeroSection extends Component {
//   openNav = () => {
//     const nav = document.getElementById("myNav");
//     if (nav) {
//       nav.style.width = "100%"; // Open the menu
//     }
//   };

//   closeNav = () => {
//     const nav = document.getElementById("myNav");
//     if (nav) {
//       nav.style.width = "0%"; // Close the menu
//     }
//   };
//   render() {
//     return (
//       <div className="hero_area">
//         <header className="header_section">
//           <div className="container-fluid">
//             <nav className="navbar navbar-expand-lg custom_nav-container">
//               <a className="navbar-brand" href="index.html">
//                 <span>Rent4u</span>
//               </a>
//               <div className="navbar-collapse">
//                 <div className="user_option">
//                   <a href="">Login</a>
//                 </div>
//                 <div className="custom_menu-btn">
//                   <button onClick={() => this.openNav()}>
//                     <span className="s-1"></span>
//                     <span className="s-2"></span>
//                     <span className="s-3"></span>
//                   </button>
//                 </div>
//                 <div id="myNav" className="overlay">
//                   <div className="overlay-content">
//                     <a href="index.html">Home</a>
//                     <a href="about.html">About</a>
//                     <a href="car.html">Cars</a>
//                     <a href="blog.html">Blog</a>
//                     <a href="contact.html">Contact Us</a>
//                     <a href="#">Login</a>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </header>
//         <section className="slider_section position-relative">
//           <div className="slider_container">
//             <div className="img-box">
//               <img src="images/hero-img.jpg" alt="" />
//             </div>
//             <div className="detail_container">
//               <div
//                 id="carouselExampleControls"
//                 className="carousel slide"
//                 data-ride="carousel"
//               >
//                 <div className="carousel-inner">
//                   <div className="carousel-item active">
//                     <div className="detail-box">
//                       <h1>
//                         Rent Car <br />
//                         Experts <br />
//                         Service
//                       </h1>
//                       <a href="">Contact Us</a>
//                     </div>
//                   </div>
//                   <div className="carousel-item">
//                     <div className="detail-box">
//                       <h1>
//                         Rent Car <br />
//                         Experts <br />
//                         Service
//                       </h1>
//                       <a href="">Contact Us</a>
//                     </div>
//                   </div>
//                   <div className="carousel-item">
//                     <div className="detail-box">
//                       <h1>
//                         Rent Car <br />
//                         Experts <br />
//                         Service
//                       </h1>
//                       <a href="">Contact Us</a>
//                     </div>
//                   </div>
//                 </div>
//                 <a
//                   className="carousel-control-prev"
//                   href="#carouselExampleControls"
//                   role="button"
//                   data-slide="prev"
//                   style={{position:"absolute"}}
//                 >
//                   <span className="sr-only">Previous</span>
//                 </a>
//                 <a
//                   className="carousel-control-next"
//                   href="#carouselExampleControls"
//                   role="button"
//                   data-slide="next"
//                 >
//                   <span className="sr-only">Next</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default HeroSection;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeroSection extends Component {
 
  openNav = () => {
    const nav = document.getElementById("myNav");
    if (nav) {
      nav.style.width = "100%"; // Open the menu
    }
  };

  closeNav = () => {
    const nav = document.getElementById("myNav");
    if (nav) {
      nav.style.width = "0%"; // Close the menu
    }
  };

  render() {
    return (
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Rent4u</span>
              </a>
              <div className="navbar-collapse">
              
                <div className="user_option">
                <span  style={{marginRight:"50px"}}>
                  <a href="#">Signup</a>
                </span>
                  <a href="#">Login</a>
                </div>
                <div className="custom_menu-btn">
                  <button onClick={this.openNav} style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <span className="s-1"></span>
                    <span className="s-2"></span>
                    <span className="s-3"></span>
                  </button>
                </div>
                <div
                  id="myNav"
                  className="overlay"
                  style={{
                    height: "100%",
                    width: "0%",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    overflowX: "hidden",
                    transition: "0.5s"
                  }}
                >
                  <button
                    onClick={this.closeNav}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "20px",
                      fontSize: "30px",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer"
                    }}
                  >
                    &times;
                  </button>
                  <div className="overlay-content" style={{ textAlign: "center", marginTop: "100px" }}>
                    <a href="index.html" style={{ display: "block", color: "#fff", fontSize: "25px", padding: "10px" }}>Home</a>
                    <a href="about.html" style={{ display: "block", color: "#fff", fontSize: "25px", padding: "10px" }}>About</a>
                    <a href="car.html" style={{ display: "block", color: "#fff", fontSize: "25px", padding: "10px" }}>Cars</a>
                    <a href="blog.html" style={{ display: "block", color: "#fff", fontSize: "25px", padding: "10px" }}>Blog</a>
                    <a href="contact.html" style={{ display: "block", color: "#fff", fontSize: "25px", padding: "10px" }}>Contact Us</a>
                    <a href="#" style={{ display: "block", color: "#fff", fontSize: "25px", padding: "10px" }}>Login</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="slider_section position-relative">
          <div className="slider_container">
            <div className="img-box">
              <img src="images/hero-img.jpg" alt="" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="detail_container">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="detail-box" style={{ textAlign: "center", padding: "50px", color: "#fff" }}>
                      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                        Rent Car <br />
                        Experts <br />
                        Service
                      </h1>
                      <a href="#" style={{ padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="detail-box" style={{ textAlign: "center", padding: "50px", color: "#fff" }}>
                      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                        Rent Your <br />
                        Dream Car <br />
                        Today
                      </h1>
                      <a href="#" style={{ padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="detail-box" style={{ textAlign: "center", padding: "50px", color: "#fff" }}>
                      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                        Affordable <br />
                        Car Rental <br />
                        Solutions
                      </h1>
                      <a href="#" style={{ padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                  style={{position:"absolute"}}
                >
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span className="sr-only">Next</span>
                  </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HeroSection;
