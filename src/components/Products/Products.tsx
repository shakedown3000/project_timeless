import "./Products.css";

const Products = () => {
  return (
    <section className="products">
      <h2>Curated</h2>
      <p>
        A selection of handmade jewels, Swiss made watches of haute horlogerie
        and unique objects.
      </p>
      <div className="curated_image_wrapper">
        <div className="product_gallery_left">
          <div className="popup_div">
            <h5>Humboldt</h5>
            <div className="gallery_line"></div>
            <p>Discover more</p>
          </div>
        </div>
        <div className="product_gallery_middle">
          <div className="popup_div">
            <h5>Rings</h5>
            <div className="gallery_line"></div>
            <p>Discover more</p>
          </div>
        </div>
        <div className="product_gallery_right">
          <div className="popup_div">
            <h5>Locherber Milano</h5>
            <div className="gallery_line"></div>
            <p>Discover more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
