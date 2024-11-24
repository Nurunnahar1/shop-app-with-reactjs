const Header = () => {
  return (
    <>
      <header id="topnav" className="scroll">
        <div className="container">
          {/* Logo container*/}
          <div className="logo">
            <a href="index-2.html">
              <img src="images/logo_light.png" alt="" className="logo-light" />
              <img src="images/logo_dark.png" alt="" className="logo-dark" />
            </a>
          </div>
          {/* End Logo container*/}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Shopping cart*/}
              <div className="cart">
                <a href="#">
                  <i className="ti-bag" />
                  <span className="cart-number">2</span>
                </a>
                <div className="shopping-cart">
                  <div className="shopping-cart-info">
                    <div className="row">
                      <div className="col-xs-6">
                        <h6 className="upper">Your Cart</h6>
                      </div>
                      <div className="col-xs-6 text-right">
                        <h6 className="upper">$399.99</h6>
                      </div>
                    </div>
                    {/* end of row*/}
                  </div>
                  <ul className="nav product-list">
                    <li>
                      <div className="product-thumbnail">
                        <img src="images/shop/2.jpg" alt="" />
                      </div>
                      <div className="product-summary">
                        <a href="#">Premium Suit Blazer</a>
                        <span>$199.99</span>
                      </div>
                    </li>
                    <li>
                      <div className="product-thumbnail">
                        <img src="images/shop/5.jpg" alt="" />
                      </div>
                      <div className="product-summary">
                        <a href="#">Reiss Vara Tailored Blazer</a>
                        <span>$199.99</span>
                      </div>
                    </li>
                  </ul>
                  <p>
                    <a href="#" className="btn btn-color btn-block btn-sm">
                      Checkout
                    </a>
                  </p>
                </div>
              </div>
              {/* End shopping cart*/}
            </div>
            <div className="menu-item">
              {/* Search Form*/}
              <div className="search">
                <a href="#">
                  <i className="ti-search" />
                </a>
                <div className="search-form">
                  <form action="#" className="inline-form">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                      />
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-color">
                          <span>
                            <i className="ti-search" />
                          </span>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              {/* End search form*/}
            </div>
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a className="navbar-toggle">
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          <div id="navigation">
            {/* Navigation Menu*/}
            <ul className="navigation-menu">
              <li className="has-submenu">
                <a href="#">Home</a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <span>Multi Page</span>
                      </li>
                      <li>
                        <a href="index-2.html">Home Classic</a>
                      </li>
                      <li>
                        <a href="index-01.html">Video Background</a>
                      </li>
                      <li>
                        <a href="index-02.html">HTML5 Video BG</a>
                      </li>
                      <li>
                        <a href="index-03.html">Animated Zoom Slider</a>
                      </li>
                      <li>
                        <a href="index-04.html">Text Rotator</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <span>One Page</span>
                      </li>
                      <li>
                        <a href="index-op.html">One Page Classic</a>
                      </li>
                      <li>
                        <a href="index-op-01.html">Video Background</a>
                      </li>
                      <li>
                        <a href="index-op-02.html">HTML5 Video BG</a>
                      </li>
                      <li>
                        <a href="index-op-03.html">Animated Zoom Slider</a>
                      </li>
                      <li>
                        <a href="index-op-04.html">Text Rotator</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <span>Home Layouts</span>
                      </li>
                      <li>
                        <a href="home-restaurant.html">Restaurant</a>
                      </li>
                      <li>
                        <a href="home-architecture.html">Architecture</a>
                      </li>
                      <li>
                        <a href="home-photography.html">Photography</a>
                      </li>
                      <li>
                        <a href="home-landing.html">Landing Page</a>
                      </li>
                      <li>
                        <a href="home-resume.html">Resume</a>
                      </li>
                      <li>
                        <a href="home-models.html">
                          Model Agency<span className="label">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="home-fitness.html">
                          Fitness<span className="label">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">Pages</a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <span>Pages</span>
                      </li>
                      <li>
                        <a href="page-about.html">About Us</a>
                      </li>
                      <li>
                        <a href="page-about-2.html">About Us 2</a>
                      </li>
                      <li>
                        <a href="page-services.html">Services</a>
                      </li>
                      <li>
                        <a href="page-services-2.html">Services 2</a>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="page-contact-2.html">Contact 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <span>Other Pages</span>
                      </li>
                      <li>
                        <a href="page-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="page-careers.html">Careers</a>
                      </li>
                      <li>
                        <a href="page-login.html">Login / Register</a>
                      </li>
                      <li>
                        <a href="page-coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="page-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="page-faq.html">Faq</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">Elements</a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <span>Elements</span>
                      </li>
                      <li>
                        <a href="elements-accordions.html">
                          <i className="ti-layout-accordion-merged" />
                          Accordions
                        </a>
                      </li>
                      <li>
                        <a href="elements-alerts.html">
                          <i className="ti-comment-alt" />
                          Alerts
                        </a>
                      </li>
                      <li>
                        <a href="elements-buttons.html">
                          <i className="ti-control-play" />
                          Buttons
                        </a>
                      </li>
                      <li>
                        <a href="elements-countdowns.html">
                          <i className="ti-timer" />
                          Countdowns{" "}
                        </a>
                      </li>
                      <li>
                        <a href="elements-features.html">
                          <i className="ti-view-grid" />
                          Features Box
                        </a>
                      </li>
                      <li>
                        <a href="elements-forms.html">
                          <i className="ti-layout-cta-left" />
                          Forms
                        </a>
                      </li>
                      <li>
                        <a href="elements-grid.html">
                          <i className="ti-layout" />
                          Grid
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <span>Elements</span>
                      </li>
                      <li>
                        <a href="elements-icons.html">
                          <i className="ti-image" />
                          Icons{" "}
                        </a>
                      </li>
                      <li>
                        <a href="elements-media.html">
                          <i className="ti-volume" />
                          Media Elements
                        </a>
                      </li>
                      <li>
                        <a href="elements-titles.html">
                          <i className="ti-uppercase" />
                          Page Titles
                        </a>
                      </li>
                      <li>
                        <a href="elements-bars.html">
                          <i className="ti-align-left" />
                          Progress Bars
                        </a>
                      </li>
                      <li>
                        <a href="elements-sliders.html">
                          <i className="ti-layout-slider" />
                          Sliders &amp; Galleries
                        </a>
                      </li>
                      <li>
                        <a href="elements-tabs.html">
                          <i className="ti-layout-tab-window" />
                          Tabs
                        </a>
                      </li>
                      <li>
                        <a href="elements-typography.html">
                          <i className="ti-paragraph" />
                          Typography
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">Portfolio</a>
                <ul className="submenu">
                  <li className="has-submenu">
                    <a href="#">Boxed</a>
                    <ul className="submenu">
                      <li>
                        <a href="portfolio-boxed-2col.html">2 Columns</a>
                      </li>
                      <li>
                        <a href="portfolio-boxed-3col.html">3 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Wide</a>
                    <ul className="submenu">
                      <li>
                        <a href="portfolio-wide-2col.html">2 Columns</a>
                      </li>
                      <li>
                        <a href="portfolio-wide-3col.html">3 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Single</a>
                    <ul className="submenu">
                      <li>
                        <a href="portfolio-single-1.html">Single Work 1</a>
                      </li>
                      <li>
                        <a href="portfolio-single-2.html">Single Work 2</a>
                      </li>
                      <li>
                        <a href="portfolio-single-3.html">Single Work 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu last-elements">
                <a href="#">Blog</a>
                <ul className="submenu">
                  <li>
                    <a href="blog-fixed-image.html">Fixed Image</a>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Classic</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog.html">No Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-sidebar.html">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-sidebar-left.html">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Masonry</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog-masonry.html">No Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-masonry-sidebar.html">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-masonry-sidebar-left.html">
                          Left Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Single Post</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog-single.html">No Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-single-sidebar.html">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-single-sidebar-left.html">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu last-elements">
                <a href="#">Shop</a>
                <ul className="submenu">
                  <li className="has-submenu">
                    <a href="#">Shop Layout</a>
                    <ul className="submenu">
                      <li>
                        <a href="shop-2col.html">2 Columns</a>
                      </li>
                      <li>
                        <a href="shop-3col.html">3 Columns</a>
                      </li>
                      <li>
                        <a href="shop-4col.html">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-single.html">Single Product</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="shop-checkout.html">Checkout</a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* End navigation menu        */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
