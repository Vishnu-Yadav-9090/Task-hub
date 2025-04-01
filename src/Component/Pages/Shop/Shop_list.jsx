import React from 'react'

const Shop_list = () => {
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
  <section className="pt40 pb0">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title">
            <h2 className="title">Shop Pages</h2>
            <p className="text mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop Area */}
  <section className="shop-checkout pt-0">
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
        <div className="col-lg-3">
          <div className="shop-sidebar">
            <div className="default-box-shadow1 mb30">
              <div className="search_area">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <label>
                  <span className="flaticon-loupe" />
                </label>
              </div>
            </div>
            <div className="sidebar-accordion">
              <div className="accordion" id="accordionExample2">
                <div className="card mb20 pb0">
                  <div className="card-header active" id="headingTwos">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwos"
                        aria-expanded="true"
                        aria-controls="collapseTwos"
                      >
                        Category
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseTwos"
                    className="collapse show"
                    aria-labelledby="headingTwos"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <div className="checkbox-style1 mb15">
                        <label className="custom_checkbox">
                          UI/UX Designer
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(1,945)</span>
                        </label>
                        <label className="custom_checkbox">
                          Web Developers
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                          <span className="right-tags">(8,136)</span>
                        </label>
                        <label className="custom_checkbox">
                          Wordpress
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(917)</span>
                        </label>
                        <label className="custom_checkbox">
                          Node.js
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(240)</span>
                        </label>
                        <label className="custom_checkbox">
                          Project Managers
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">((2,460)</span>
                        </label>
                      </div>
                      <a className="text-thm" href="#">
                        +20 more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header active" id="headingOnes">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOnes"
                        aria-expanded="true"
                        aria-controls="collapseOnes"
                      >
                        Price
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseOnes"
                    className="collapse show"
                    aria-labelledby="headingOnes"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      {/* Range Slider Mobile Version */}
                      <div className="range-slider-style2">
                        <div className="range-wrapper">
                          <div
                            className="mb10 mt15 noUi-target noUi-ltr noUi-horizontal noUi-background"
                            id="slider"
                          >
                            <div className="noUi-base">
                              <div
                                className="noUi-origin noUi-connect"
                                style={{ left: "0.02%" }}
                              >
                                <div className="noUi-handle noUi-handle-lower" />
                              </div>
                              <div
                                className="noUi-origin noUi-background"
                                style={{ left: "61.839%" }}
                              >
                                <div className="noUi-handle noUi-handle-upper" />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-center">
                            <span id="slider-range-value1">$20</span>
                            <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                            <span id="slider-range-value2">$61,839</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row mb20">
            <div className="col-sm-6">
              <div className="text-center text-sm-start">
                <p className="text mb-0">
                  <span className="fw500">7,512</span> available services{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
                <div className="pcs_dropdown dark-color pr10">
                  <span>Sort by</span>
                  <div className="dropdown bootstrap-select show-tick">
                    <select className="selectpicker show-tick">
                      <option>Best Seller</option>
                      <option>Recommended</option>
                      <option>New Arrivals</option>
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
                      title="Best Seller"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Best Seller
                          </div>
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
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/1.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Album</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/2.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Beanie</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/3.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10"> Backpack School Bag</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/4.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Beanie with Logo</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/5.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Belt</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/6.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Hoodie with Zipper</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/7.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Long Sleeve Tee</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/8.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Logo</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="shop-item text-center">
                <div className="thumb">
                  <img className="w-100" src="images/shop/2.png" alt="" />
                </div>
                <div className="details">
                  <p className="mb10">T-Shirts, Clothing, Glasses</p>
                  <h5 className="mb10">Front Originals</h5>
                  <h5 className="mb20">$55.00</h5>
                  <a
                    href="page-shop-cart.html"
                    className="ud-btn btn-light-thm"
                  >
                    Add to cart
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mbp_pagination text-center mt30">
              <ul className="page_navigation">
                <li className="page-item">
                  <a className="page-link" href="">
                    {" "}
                    <span className="fas fa-angle-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    20
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    <span className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
              <p className="mt10 mb-0 pagination_page_count text-center">
                1 – 20 of 200+ property available
              </p>
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
                    aria-owns="bs-select-2"
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
                    aria-owns="bs-select-3"
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
                      id="bs-select-3"
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

export default Shop_list