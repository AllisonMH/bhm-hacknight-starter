const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__color-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="footer__text">
        Celebrating Black History &mdash; Past, Present, and Future
      </p>
      <br></br>
      <p>
        &copy; {new Date().getFullYear()} BHM Hacknight Starter. All rights reserved. | Built with 💜 by <a href="https://www.kolorkodedenterprises.com/" target="_blank">Kolor Koded Enterprises, LLC</a>
      </p>
    </footer>
  );
};

export default Footer;
