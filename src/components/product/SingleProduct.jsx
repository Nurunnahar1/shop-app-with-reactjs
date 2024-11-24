import Bradcrumb from "../Bradcrumb";
import ShopImage from "../../assets/images/shop/1.jpg";
import Product from "./Product";
 

const SingleProduct = () => {
  return (
    <>
      <Bradcrumb />
      <section>
        <div className="container">
          <div className="single-product-details">
            <div className="row">
              <div className="col-md-6">
                <div
                  data-options='{"animation": "slide", "controlNav": true}'
                  className="flexslider nav-inside control-nav-dark"
                >
                  <div
                    className="flex-viewport"
                    style={{ overflow: "hidden", position: "relative" }}
                  >
                    <ul
                      className="slides"
                      style={{
                        width: "1200%",
                        transitionDuration: "0s",
                        transform: "translate3d(-555px, 0px, 0px)",
                      }}
                    >
                      <li
                        className="clone"
                        aria-hidden="true"
                        style={{ width: 555, float: "left", display: "block" }}
                      >
                        <img src={ShopImage} alt="" draggable="false" />
                      </li>
                      <li
                        style={{ width: 555, float: "left", display: "block" }}
                        className="flex-active-slide"
                      >
                        <img src={ShopImage} alt="" draggable="false" />
                      </li>
                      <li
                        style={{ width: 555, float: "left", display: "block" }}
                        className=""
                      >
                        <img
                          src="images/shop/single-2.jpg"
                          alt=""
                          draggable="false"
                        />
                      </li>
                      <li
                        style={{ width: 555, float: "left", display: "block" }}
                        className=""
                      >
                        <img
                          src="images/shop/single-3.jpg"
                          alt=""
                          draggable="false"
                        />
                      </li>
                      <li
                        style={{ width: 555, float: "left", display: "block" }}
                        className=""
                      >
                        <img
                          src="images/shop/single-4.jpg"
                          alt=""
                          draggable="false"
                        />
                      </li>
                      <li
                        style={{ width: 555, float: "left", display: "block" }}
                        className="clone"
                        aria-hidden="true"
                      >
                        <img
                          src="images/shop/single-1.jpg"
                          alt=""
                          draggable="false"
                        />
                      </li>
                    </ul>
                  </div>
                  <ol className="flex-control-nav flex-control-paging">
                    <li>
                      <a className="flex-active">1</a>
                    </li>
                    <li>
                      <a className="">2</a>
                    </li>
                    <li>
                      <a className="">3</a>
                    </li>
                    <li>
                      <a className="">4</a>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="col-md-5 col-md-offset-1">
                <div className="title mt-0">
                  <h2>
                    Notch Blazer in Longline
                    <span className="red-dot" />
                  </h2>
                  <p className="m-0">Free Shipping Worldwide</p>
                </div>
                <div className="single-product-price">
                  <div className="row">
                    <div className="col-xs-6">
                      <h3>
                        <del>$29.99</del>
                        <span>$24.99</span>
                      </h3>
                    </div>
                    <div className="col-xs-6 text-right">
                      <span className="rating-stars">
                        {" "}
                        <i className="ti-star full" />
                        <i className="ti-star full" />
                        <i className="ti-star full" />
                        <i className="ti-star full" />
                        <i className="ti-star" />
                        <span className="hidden-xs">(3 Reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="single-product-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis repellat iste natus at impedit quo consequuntur,
                    quam, vel saepe voluptatum minus temporibus excepturi
                    aspernatur labore molestiae fugit tempora veritatis unde.
                  </p>
                </div>
                <div className="single-product-add">
                  <form action="#" className="inline-form">
                    <div className="input-group">
                      <input
                        type="number"
                        placeholder="QTY"
                        defaultValue={1}
                        min={1}
                        className="form-control"
                      />
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-color">
                          Add to Cart
                          <i className="ti-bag" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="single-product-list">
                  <ul>
                    <li>
                      <span>Sizes:</span> S, M, L, XL
                    </li>
                    <li>
                      <span>Colors:</span> Blue, Red, Grey
                    </li>
                    <li>
                      <span>Category:</span>
                      <a href="#">Blazers</a>
                    </li>
                    <li>
                      <span>Tags:</span>
                      <a href="#">Outfit</a>-<a href="#">Jeans</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end of row*/}
          </div>
          <div className="product-tabs">
            <ul role="tablist" className="nav nav-tabs">
              <li role="presentation" className="active">
                <a href="#first-tab" role="tab" data-toggle="tab">
                  Description
                </a>
              </li>
              <li role="presentation">
                <a href="#second-tab" role="tab" data-toggle="tab">
                  Sizes
                </a>
              </li>
              <li role="presentation">
                <a href="#third-tab" role="tab" data-toggle="tab">
                  Reviews (3)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="first-tab" role="tabpanel" className="tab-pane active">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum hic doloribus dolore explicabo, a voluptate optio
                  culpa, aut nulla voluptatem sit nam sed molestias adipisci!
                  Eius nulla beatae, quidem quae. Praesentium eveniet ullam quos
                  accusamus, ea nemo cupiditate. Nemo harum sit, necessitatibus
                  voluptates, sapiente dolorum minima, placeat explicabo
                  consequuntur at neque deserunt.
                </p>
                <p>
                  Quidem illum, enim aut, minus nesciunt, distinctio inventore
                  sunt autem numquam eveniet non asperiores unde! Corrupti modi
                  minima doloremque, illum aperiam nemo.
                </p>
              </div>
              <div id="second-tab" role="tabpanel" className="tab-pane">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="upper">Size</th>
                      <th className="upper">Bust (CM)</th>
                      <th className="upper">Waist (CM)</th>
                      <th className="upper">Hips (CM)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>78</td>
                      <td>60</td>
                      <td>83</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>80</td>
                      <td>62</td>
                      <td>86</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>88</td>
                      <td>65</td>
                      <td>88</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="third-tab" role="tabpanel" className="tab-pane">
                <div id="comments">
                  <ul className="comments-list">
                    <li className="rating">
                      <h5 className="upper">
                        Jesse Pinkman -{" "}
                        <span className="rating-stars">
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star" />
                        </span>
                      </h5>
                      <span className="comment-date">
                        Posted on 29 September at 10:41
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo voluptatem quo sit. Sint fugit quidem
                        totam similique suscipit animi veniam reiciendis, unde
                        facere quia, optio, at ad possimus perferendis
                        asperiores.
                      </p>
                    </li>
                    <li className="rating">
                      <h5 className="upper">
                        Rust Cohle -{" "}
                        <span className="rating-stars">
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star" />
                        </span>
                      </h5>
                      <span className="comment-date">
                        Posted on 29 September at 10:41
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quasi aspernatur vero dolorum asperiores ratione
                        obcaecati atque quidem aliquid dicta illo, quod,
                        similique suscipit maiores, aperiam expedita cum. Ut
                        fugiat, dolores.
                      </p>
                    </li>
                    <li className="rating">
                      <h5 className="upper">
                        Arya Stark -{" "}
                        <span className="rating-stars">
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                          <i className="ti-star full" />
                        </span>
                      </h5>
                      <span className="comment-date">
                        Posted on 29 September at 10:41
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quasi aspernatur vero dolorum asperiores ratione
                        obcaecati atque quidem aliquid dicta illo, quod,
                        similique suscipit maiores, aperiam expedita cum. Ut
                        fugiat, dolores.
                      </p>
                    </li>
                  </ul>
                </div>
                <div id="respond">
                  <h5 className="upper">Leave a rating</h5>
                  <div className="comment-respond">
                    <form className="comment-form">
                      <div className="form-double">
                        <div className="form-group">
                          <input
                            name="author"
                            type="text"
                            placeholder="Name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group last">
                          <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-select">
                          <select className="form-control">
                            <option value="" selected="selected">
                              Chose a rating
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          placeholder="Comment"
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-submit text-right">
                        <button type="button" className="btn btn-color-out">
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related-products">
            <h5 className="upper">Related Products</h5>
            <div className="row">
             <Product col="3"/> 
          
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct