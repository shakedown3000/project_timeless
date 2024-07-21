import "./Showroom.css";

const Showroom = () => {
  return (
    <section className="showroom">
      <div className="showroom_outer_wrapper">
        <img
          id="showroom_picture"
          src="/Imanoglou_About_Photo_4.jpg"
          alt="Kitchen Showroom"
        ></img>
        <div className="showroom_inner_wrapper">
          <div className="showroom_headline_div">
            <h3>Showroom</h3>
          </div>
          <div className="showroom_expert_div">
            <p>
              For expert recommendations contact us or visit us in our state of
              the art showroom.
            </p>
            <p>Karagiorgi Servias 7, Athens, Syntagma, 10563</p>
            <p>&#8213; More Info &#10230;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;
