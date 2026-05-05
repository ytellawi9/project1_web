import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} <span>CineVault</span> — Built with React.js &amp; deployed on Render.com
      </p>
    </footer>
  );
}

export default Footer;
