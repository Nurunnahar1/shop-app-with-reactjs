import Bradcrumb from "../../components/Bradcrumb";
import Product from "../../components/product/Product";
import Sidebar from "../../layouts/Sidebar";

const Shop = () => {
  return (
    <>
      <Bradcrumb />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 hidden-sm hidden-xs">
              <Sidebar />
              {/* end of sidebar*/}
            </div>
            <div className="col-md-9">
              <div className="shop-menu">
                <div className="row">
                  <div className="col-sm-8">
                    <h6 className="upper">Displaying 6 of 18 results</h6>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-select">
                      <select name="type" className="form-control">
                        <option selected="selected" value="">
                          Sort By
                        </option>
                        <option value="">Whats new</option>
                        <option value="">Price high to low</option>
                        <option value="">Price low to high</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end of row*/}
              </div>
              <div className="container-fluid">
                <div className="row">
                  <Product col="4"/> 
                </div>
                {/* end of row*/}
                <ul className="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="ti-arrow-left" />
                      </span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </li>
                </ul>
                {/* end of pagination*/}
              </div>
            </div>
          </div>
        </div>
        {/* end of container*/}
      </section>
    </>
  );
};

export default Shop;
