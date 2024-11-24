import Bradcrumb from "../../components/Bradcrumb"

 

const Checkout = () => {
    return (
      <>
        <Bradcrumb />
        <section>
          <div className="container">
            <form method="POST" action="#">
              <div className="checkout-form">
                <div className="row">
                  <div className="col-md-5">
                    <div className="title">
                      <h5 className="upper">Billing Address</h5>
                      <hr />
                    </div>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        name="fullname"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Address 1</label>
                      <input
                        name="address"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Address 2</label>
                      <input
                        name="address_2"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input name="city" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6 pl-0">
                        <label>State</label>
                        <input
                          name="state"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-xs-6 pr-0">
                        <label>Zip Code</label>
                        <input
                          name="zip"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                    <div className="title">
                      <h5 className="upper">Credit Card Info</h5>
                      <hr />
                    </div>
                    <div className="form-group">
                      <label>Name on Card</label>
                      <input
                        name="fullname"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        name="card"
                        type="text"
                        placeholder="0000-0000-0000-0000"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <div className="col-xs-4 pl-0">
                        <label>CVV</label>
                        <input
                          name="cvv"
                          type="text"
                          placeholder="CVV"
                          className="form-control"
                        />
                      </div>
                      <div className="col-xs-4 pl-0">
                        <label>Exp. Month</label>
                        <div className="form-select">
                          <select name="month" className="form-control">
                            <option selected="selected" value="">
                              Month
                            </option>
                            <option value={1}>01</option>
                            <option value={2}>02</option>
                            <option value={3}>03</option>
                            <option value={4}>04</option>
                            <option value={5}>05</option>
                            <option value={6}>06</option>
                            <option value={7}>07</option>
                            <option value={8}>08</option>
                            <option value={9}>09</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xs-4 p-0">
                        <label>Exp. Year</label>
                        <div className="form-select">
                          <select name="year" className="form-control">
                            <option selected="selected" value="">
                              Year
                            </option>
                            <option value={2015}>2015</option>
                            <option value={2016}>2016</option>
                            <option value={2017}>2017</option>
                            <option value={2018}>2018</option>
                            <option value={2019}>2019</option>
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-xs-6">
                          <h5 className="upper">Order Total</h5>
                        </div>
                        <div className="col-xs-6 text-right">
                          <h5>$299.99</h5>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="checkout-submit">
                        <button
                          type="button"
                          className="btn btn-color btn-block"
                        >
                          Place order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of row*/}
              </div>
            </form>
          </div>
        </section>
      </>
    );
}

export default Checkout