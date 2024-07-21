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
        <img src="/public/03_Curated_WAT_HUBLOT_b.jpg" alt="goldwatch" />
        <img
          src="/public/04_Curated_Fine_Ring_Product_b.jpg"
          alt="silver ring"
        />
        <img
          src="/public/07_Curated_DEC_Locherber_b-1.jpg"
          alt="sented_sticks"
        />
      </div>
    </section>
  );
};

export default Products;
