import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_timeless">
        <p>Timeless</p>
      </div>
      <div className="left_footer">
        <p>
          <a href="#">Company</a>
        </p>
        <p>
          <a href="#">News</a>
        </p>
        <p>
          <a href="#">Contact</a>
        </p>
      </div>
      <div className="right_footer">
        <a href="https://www.instagram.com/">
          <img src="/facebook.svg" alt="FB Icon"></img>
        </a>
        <a href="https://www.facebook.com/">
          <img src="/insta.svg" alt="Insta Icon"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
