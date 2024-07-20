import "./Showroom.css";

const Showroom = () => {
  return (
    <section className="showRoom">
      <div className="showroom_outer_Wrapper">
        <img
          id="showroom_picture"
          src="/public/Imanoglou_About_Photo_4.jpg"
          alt="Kitchen Showroom"
        ></img>
        <div className="showRoom_innerWrapper">
          <h3>Showroom</h3>
          <p>
            For expert recommendations contact us or visit us in our state of
            the art showroom.
          </p>
          <p>Karagiorgi Servias 7, Athens, Syntagma, 10563</p>
          <p>&#8213; More Info</p>
        </div>
      </div>
    </section>
  );
};

export default Showroom;
