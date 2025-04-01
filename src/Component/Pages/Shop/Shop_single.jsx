import React from 'react'

const Shop_single = () => {
  return (
    <>
     <div className="body_content">
  {/* Blog Section */}
  <section className="breadcumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcumb-style1">
            <div className="breadcumb-list">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Creative &amp; Design </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop Single Area */}
  <section className="shop-checkout pt40 pb90">
    <div className="container">
      <div
        className="row wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "visible",
          animationDelay: "300ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="col-lg-6">
          <div className="shop-single">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-item1"
                role="tabpanel"
                aria-labelledby="pills-item1-tab"
              >
                <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                  <a className="popup-img" href="images/shop/shop-single-1.png">
                    <img
                      className="wa"
                      src="images/shop/shop-single-1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-item2"
                role="tabpanel"
                aria-labelledby="pills-item2-tab"
              >
                <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                  <a className="popup-img" href="images/shop/shop-single-1.png">
                    <img
                      className="wa"
                      src="images/shop/shop-single-1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-item3"
                role="tabpanel"
                aria-labelledby="pills-item3-tab"
              >
                <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                  <a className="popup-img" href="images/shop/shop-single-1.png">
                    <img
                      className="wa"
                      src="images/shop/shop-single-1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-item4"
                role="tabpanel"
                aria-labelledby="pills-item4-tab"
              >
                <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                  <a className="popup-img" href="images/shop/shop-single-1.png">
                    <img
                      className="wa"
                      src="images/shop/shop-single-1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link mr10 mb10 active"
                  id="pills-item1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-item1"
                  type="button"
                  role="tab"
                  aria-controls="pills-item1"
                  aria-selected="true"
                >
                  <img src="images/shop/shop-single-2.png" alt="" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link mr10 mb10"
                  id="pills-item2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-item2"
                  type="button"
                  role="tab"
                  aria-controls="pills-item2"
                  aria-selected="false"
                >
                  <img src="images/shop/shop-single-3.png" alt="" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link mr10 mb10"
                  id="pills-item3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-item3"
                  type="button"
                  role="tab"
                  aria-controls="pills-item3"
                  aria-selected="false"
                >
                  <img src="images/shop/shop-single-4.png" alt="" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link mr10 mb10"
                  id="pills-item4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-item4"
                  type="button"
                  role="tab"
                  aria-controls="pills-item4"
                  aria-selected="false"
                >
                  <img src="images/shop/shop-single-5.png" alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="shop-single-content">
            <h2 className="mb15">
              Bag For Boys Small Backpack School Bag For Men - Backpack - Bag
              for Boys
            </h2>
            <div className="list-style1 mb10">
              <ul className="mb-1">
                <li className="mb-1">
                  <i className="far fa-check text-thm3 bgc-thm3-light" />
                  432 in stock
                </li>
              </ul>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
              nulla faucibus viverra
              <br className="d-none d-lg-block" /> nisl non senectus tortor.
              Suspendisse pellentesque elementum proin diam.
            </p>
            <h4 className="price mb30">
              $765.99{" "}
              <small>
                <del className="body-light-color fz13 fw400">$959</del>
              </small>
            </h4>
            <div className="d-sm-flex">
              <div className="cart-quantity mb10-xs mr20">
                <div className="quantity-block">
                  <button className="quantity-arrow-minus">
                    {" "}
                    <span className="fa fa-minus" />{" "}
                  </button>
                  <input
                    className="quantity-num"
                    type="number"
                    defaultValue={12}
                  />
                  <button className="quantity-arrow-plus">
                    {" "}
                    <span className="fas fa-plus" />{" "}
                  </button>
                </div>
              </div>
              <a className="ud-btn btn-thm" href="page-shop-checkout.html">
                Add to cart
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
            <div className="d-flex mt30 mb20-sm">
              <ul className="ps-0">
                <li className="text">Sku:</li>
                <li className="text">Category:</li>
                <li className="text">Tags:</li>
              </ul>
              <ul className="ps-0 ms-4">
                <li className="text">RTA-0058</li>
                <li className="text">Book</li>
                <li className="text">business / seo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInUp mt90"
        data-wow-delay="300ms"
        style={{
          visibility: "hidden",
          animationDelay: "300ms",
          animationName: "none"
        }}
      >
        <div className="col-md-3 col-lg-4">
          <div className="vertical-tab">
            <div className="widget_list">
              <nav>
                <div
                  className="nav flex-column nav-tabs text-start"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active text-start"
                    id="nav-accountpayment-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-accountpayment"
                    type="button"
                    role="tab"
                    aria-controls="nav-accountpayment"
                    aria-selected="true"
                  >
                    <span>Description</span>
                  </button>
                  <button
                    className="nav-link text-start"
                    id="nav-manageother-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-manageother"
                    type="button"
                    role="tab"
                    aria-controls="nav-manageother"
                    aria-selected="false"
                  >
                    <span>Review</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-lg-8">
          <div className="terms_condition_grid text-start">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-accountpayment"
                role="tabpanel"
                aria-labelledby="nav-accountpayment-tab"
              >
                <div className="grids">
                  <h4 className="title mb20">Details</h4>
                  <p className="mb25 text fz15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempus nulla faucibus viverra nisl non senectus tortor.
                    Suspendisse pellentesque elementum proin diam. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="mb25 text fz15">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                    nulla faucibus viverra nisl non senectus tortor. Suspendisse
                    pellentesque elementum proin diam. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Tempus nulla faucibus
                    viverra nisl non senectus tortor. Suspendisse pellentesque
                    elementum proin diam.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Tempus nulla faucibus viverra nisl non
                    senectus tortor. Suspendisse pellentesque elementum proin
                    diam.
                  </p>
                  <h4 className="title">Material and care</h4>
                  <div className="custom_bsp_grid d-sm-flex align-items-center">
                    <ul className="list-style-type-bullet p-0 ml15 mb0-sm">
                      <li>Outside Material: Polyester</li>
                      <li>Soft twill.</li>
                      <li>Ribbed, diagonal pattern</li>
                    </ul>
                    <ul className="list-style-type-bullet p-0 ml80 ml15-sm">
                      <li>Colour : Black, Navy Blue,Red</li>
                      <li>Imported</li>
                      <li>Product color: Dark greenish</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-manageother"
                role="tabpanel"
                aria-labelledby="nav-manageother-tab"
              >
                <div className="grids">
                  <div className="product_single_content mb50">
                    <div className="mbp_pagination_comments">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="total_review d-flex align-items-center justify-content-between mb20">
                            <h4 className="mb15 mb0-sm">80 Reviews</h4>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                            <img
                              src="images/blog/comments-2.png"
                              className="mr-3"
                              alt="comments-2.png"
                            />
                            <div className="ml20">
                              <h6 className="mt-0 mb-0">Michael John</h6>
                              <div>
                                <span className="fz14">12 March 2024</span>
                              </div>
                            </div>
                          </div>
                          <p className="text mt20 mb20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tempus nulla faucibus viverra nisl non
                            senectus tortor. Suspendisse pellentesque elementum
                            proin diam. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Tempus nulla faucibus
                            viverra nisl non senectus tortor. Suspendisse
                            pellentesque elementum proin diam. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                          </p>
                          <div className="review_cansel_btns d-flex">
                            <a href="#">
                              <i className="fas fa-thumbs-up" />
                              Helpful
                            </a>
                            <a href="#">
                              <i className="fas fa-thumbs-down" />
                              Not helpful
                            </a>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
                            <img
                              src="images/blog/comments-2.png"
                              className="mr-3"
                              alt="comments-2.png"
                            />
                            <div className="ml20">
                              <h6 className="mt-0 mb-0">James David</h6>
                              <div>
                                <span className="fz14">12 March 2024</span>
                              </div>
                            </div>
                          </div>
                          <p className="text mt20 mb20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tempus nulla faucibus viverra nisl non
                            senectus tortor. Suspendisse pellentesque elementum
                            proin diam. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                          </p>
                          <div className="review_cansel_btns d-flex pb30">
                            <a href="#">
                              <i className="fas fa-thumbs-up" />
                              Helpful
                            </a>
                            <a href="#">
                              <i className="fas fa-thumbs-down" />
                              Not helpful
                            </a>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="position-relative bdrb1 pb50">
                            <a
                              href="page-service-single.html"
                              className="ud-btn btn-light-thm"
                            >
                              See More
                              <i className="fal fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bsp_reveiw_wrt">
                    <h6 className="fz17">Add a Review</h6>
                    <p className="text">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form className="comments_form mt30">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label className="fw500 ff-heading dark-color mb-2">
                              Comment
                            </label>
                            <textarea
                              className="pt15"
                              rows={6}
                              placeholder="Description"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb20">
                            <label className="fw500 ff-heading dark-color mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Angelica Pan"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb20">
                            <label className="fw500 ff-heading dark-color mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                            <label className="custom_checkbox fz15 ff-heading">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <a href="#" className="ud-btn btn-thm">
                            Send
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer */}
  <section className="footer-style1 pt25 pb-0">
    <div className="container">
      <div className="row bb-white-light pb10 mb60">
        <div className="col-md-7">
          <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
            <a className="fz17 fw500 text-white mr15-md mr30" href="">
              Terms of Service
            </a>
            <a className="fz17 fw500 text-white mr15-md mr30" href="">
              Privacy Policy
            </a>
            <a className="fz17 fw500 text-white" href="">
              Site Map
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="social-widget text-center text-md-end">
            <div className="social-style1">
              <span className="text-white me-2 fw500 fz17">Follow us:</span>
              <a href="">
                <i className="fab fa-facebook-f list-inline-item" />
              </a>
              <a href="">
                <i className="fab fa-instagram list-inline-item" />
              </a>
              <a href="">
                <i className="fab fa-linkedin-in list-inline-item" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="link-style1 mb-4 mb-sm-5">
            <h5 className="text-white mb15">About</h5>
            <div className="link-list">
              <a href="">Careers</a>
              <a href="">Press &amp; News</a>
              <a href="">Partnerships</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
              <a href="">Investor Relations</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="link-style1 mb-4 mb-sm-5">
            <h5 className="text-white mb15">Categories</h5>
            <ul className="ps-0">
              <li>
                <a href="">Graphics &amp; Design</a>
              </li>
              <li>
                <a href="">Digital Marketing</a>
              </li>
              <li>
                <a href="">Writing &amp; Translation</a>
              </li>
              <li>
                <a href="">Video &amp; Animation</a>
              </li>
              <li>
                <a href="">Music &amp; Audio</a>
              </li>
              <li>
                <a href="">Programming &amp; Tech</a>
              </li>
              <li>
                <a href="">Data</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">Lifestyle</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="link-style1 mb-4 mb-sm-5">
            <h5 className="text-white mb15">Support</h5>
            <ul className="ps-0">
              <li>
                <a href="">Help &amp; Support</a>
              </li>
              <li>
                <a href="">Trust &amp; Safety</a>
              </li>
              <li>
                <a href="">Selling on Taskhub</a>
              </li>
              <li>
                <a href="">Buying on Taskhub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="footer-widget">
            <div className="footer-widget mb-4 mb-sm-5">
              <form action="" className="mailchimp-widget">
                <h5 className="title text-white mb20">Subscribe</h5>
                <div className="mailchimp-style1">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                  />
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
            <div className="app-widget mb-4 mb-sm-5">
              <h5 className="title text-white mb20">Apps</h5>
              <div className="row mb-4 mb-lg-5">
                <div className="col-lg-12">
                  <a className="app-list d-flex align-items-center" href="">
                    <i className="fab fa-google-play fz15 mr15" />
                    <h6 className="app-title fz15 fw400 mb-0">Android App</h6>
                  </a>
                  <a className="app-list d-flex align-items-center" href="">
                    <i className="fab fa-google-play fz15 mr15" />
                    <h6 className="app-title fz15 fw400 mb-0">Android App</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container white-bdrt1 py-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">
              © 2024 Themebracket. All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footer_bottom_right_btns text-center text-lg-end">
            <ul className="p-0 m-0">
              <li className="list-inline-item">
                <div className="dropdown bootstrap-select show-tick">
                  <select className="selectpicker show-tick">
                    <option>US$ USD</option>
                    <option>Euro</option>
                    <option>Pound</option>
                  </select>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="btn dropdown-toggle btn-light"
                    data-bs-toggle="dropdown"
                    role="combobox"
                    aria-owns="bs-select-1"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    title="US$ USD"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">US$ USD</div>
                      </div>{" "}
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-1"
                      tabIndex={-1}
                    >
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="dropdown bootstrap-select show-tick">
                  <select className="selectpicker show-tick">
                    <option>English</option>
                    <option>Frenc</option>
                    <option>Italian</option>
                    <option>Spanish</option>
                  </select>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="btn dropdown-toggle btn-light"
                    data-bs-toggle="dropdown"
                    role="combobox"
                    aria-owns="bs-select-2"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    title="English"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">English</div>
                      </div>{" "}
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-2"
                      tabIndex={-1}
                    >
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a className="scrollToHome" href="#">
    <i className="fas fa-angle-up" />
  </a>
</div>

    </>
  )
}

export default Shop_single