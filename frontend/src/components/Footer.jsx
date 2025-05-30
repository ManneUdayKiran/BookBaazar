import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-content text-center p-3">
        <p>&copy; {new Date().getFullYear()} Book Bazaar. All rights reserved.</p>
        <p>Developed by:</p>
        <p>Manne Uday Kiran</p>
        <p>Follow me on:</p>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <a
            href="https://www.linkedin.com/in/uday-kiran-536520282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/ManneUdayKiran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/3d-fluency/50/github-logo.png"
              alt="github-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
