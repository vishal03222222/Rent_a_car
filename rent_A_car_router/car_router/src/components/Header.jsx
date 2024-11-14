import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    };

    closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    };
  render(){
    return (
        <div style={{backgroundColor:"blue"}}> 
            <div className="navbar-collapse">
                {/* <div className="user_option">
                  <a href="/">Login</a>
                </div> */}
                <div className="user_option-btn">
                    <button onClick={this.openNav}>
                        <span className="s-1"> </span>
                        <span className="s-2"> </span>
                        <span className="s-3"> </span>
                    </button>
                </div>
                <div id="myNav" className="overlay">
                    <button className="closebtn" onClick={this.closeNav}>
                        &times;
                    </button>
                    <div className="overlay-content">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/About'}>About</Link>
                        <Link to={'/Cars'}>Cars</Link>
                        <Link to={'/Blog'}>Blog</Link>
                        <Link to={'/Contact'}>Contact Us</Link>
                        <Link to={'/Login'}> Logins</Link>
                        {/* <a href="about.html">About</a>
                    <a href="car.html">Cars</a>
                    <a href="blog.html">Blog</a>
                    <a href="contact.html">Contact Us</a> */}
                        <a href="#">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default Header
