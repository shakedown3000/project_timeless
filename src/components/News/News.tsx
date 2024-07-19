import "./News.css";

const News = () => {
  return (
    <div className="news-wrapper">
      <h3>News</h3>
      <div className="grid-container">
        <div className="grid-item image1">
          <img
            src="../../../public/omega131-63-41-21-01-001amb-jpg-2.-1024x683.jpg"
            alt="Image 1"
          />
        </div>
        <div className="grid-item image2">
          <img
            src="../../../public/featured_rado-1-1024x525.jpg"
            alt="Image 2"
          />
        </div>
        <div className="grid-item image3">
          <img
            src="../../../public/01_chronomat-b01-42-with-a-silver-dial-and-black-contrasting-chronograph-counters-1024x579.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
