import ShopImage from "../../assets/images/shop/1.jpg";

const Product = ({ col }) => {
  return (
    <>
      <div className={`col-md-${col} col-sm-6`}>
        <div className="shop-product">
          <div className="product-thumb">
            <a href="#">
              <img src={ShopImage} alt="" />
            </a>
            <div className="product-overlay">
              <a href="#" className="btn btn-color-out btn-sm">
                Add To Cart
                <i className="ti-bag" />
              </a>
            </div>
          </div>
          <div className="product-info">
            <h4 className="upper">
              <a href="#">Premium Notch Blazer</a>
            </h4>
            <span>$79.99</span>
            <div className="save-product">
              <a href="#">
                <i className="icon-heart" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
