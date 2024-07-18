import "./Footer.css";

const Footer = () => {
  return (
    <footer>
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
        <img src="/facebook.svg" alt="FB Icon"></img>
        <img src="/insta.svg" alt="Insta Icon"></img>
      </div>
    </footer>
  );
};

export default Footer;
