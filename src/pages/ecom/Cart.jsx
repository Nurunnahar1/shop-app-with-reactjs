import Bradcrumb from "../../components/Bradcrumb";

const Cart = () => {
  return (
    <>
      <Bradcrumb />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <table className="table cart">
                <thead>
                  <tr>
                    <th className="hidden-xs">Photo</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>In Stock</th>
                    <th>Price</th>
                    <th className="hidden-xs">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="hidden-xs">
                      <a href="#">
                        <img src="images/shop/1.jpg" alt="" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <span>Denim Jacket With Zip fastening</span>
                      </a>
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue={1}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <span className="circle" />
                    </td>
                    <td>
                      <span className="cart-price">$149.99</span>
                    </td>
                    <td className="hidden-xs">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden-xs">
                      <a href="#">
                        <img src="images/shop/2.jpg" alt="" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <span>Oversized Denim Jacket In Black</span>
                      </a>
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue={2}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <span className="circle red" />
                    </td>
                    <td>
                      <span className="cart-price">$49.99</span>
                    </td>
                    <td className="hidden-xs">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden-xs">
                      <a href="#">
                        <img src="images/shop/3.jpg" alt="" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <span>Slim Fit Denim Jacket In Off White</span>
                      </a>
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue={1}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <span className="circle" />
                    </td>
                    <td>
                      <span className="cart-price">$29.99</span>
                    </td>
                    <td className="hidden-xs">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="promo-code">
                <h6 className="upper">Apply Coupon Code</h6>
                <hr />
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="form-control input-group-sm"
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-color btn-group-sm"
                    >
                      Go!
                    </button>
                  </span>
                </div>
              </div>
              <div className="cart-summary">
                <h6 className="upper">Order Details</h6>
                <hr />
                <ul className="nav">
                  <li>
                    Cart subtotal:<span className="pull-right">$299.99</span>
                  </li>
                  <li>
                    Shipping:<span className="pull-right">$9.99</span>
                  </li>
                </ul>
                <hr />
                <h6 className="upper">
                  Order total:<span className="pull-right">$309.99</span>
                </h6>
              </div>
              <p>
                <a href="#" className="btn btn-color btn-block">
                  Checkout
                </a>
              </p>
              <p>
                <a href="#" className="btn btn-dark-out btn-block">
                  Update Cart
                </a>
              </p>
            </div>
          </div>
          {/* end of row*/}
        </div>
        {/* end of container*/}
      </section>
    </>
  );
};

export default Cart;
