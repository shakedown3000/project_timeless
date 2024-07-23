import "./News.css";

const News = () => {
  return (
    <div className="news-wrapper">
      <h3>News</h3>

      <div className="gallery">
        <div className="img-container"></div>
        <div className="inner-gallery-img">
          <div className="inner-img"></div>
          <p>TRUE THINLINE LES COULEURS LE CORBUSIER</p>
          <p>
            We are proud to present a highlight from our new collection – the
            True Thinline Les Couleurs™ Le Corbusier.
          </p>
          <p className="all_news">&#8213; See all the news &#10230;</p>
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
};

export default News;
