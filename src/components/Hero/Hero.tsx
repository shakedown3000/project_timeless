import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <header>
        <nav>
          <img id="logo" src="/logo.svg" alt="Logo" />
          <div className="nav_wrap">
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">News</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
          </div>
        </nav>

        <div className="lower_hero">
          <p>TIMELESS</p>
        </div>
      </header>
    </section>
  );
};

export default Hero;
