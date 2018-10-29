import React from 'react';

const AppFooter = () => {
  return (
    <footer className=" footer center-align">
      <div className="container">
        <div className="social">
          <a href="https://www.facebook.com/shinystars" target="blank">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/shinystars" target="blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:shinystarsteam@gmail.com">
            <i className="fas fa-envelope-square"></i>
          </a>
        </div>
        <p>&copy; ShinyStars.org</p>
      </div>
    </footer>

  );
}

export default AppFooter;