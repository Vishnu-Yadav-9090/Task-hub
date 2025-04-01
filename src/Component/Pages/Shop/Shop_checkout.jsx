import React from 'react'

const Shop_checkout = () => {
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
            <h2 className="title">Shop Checkout</h2>
            <p className="text mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop Checkout Area */}
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
        <div className="col-md-7 col-lg-8">
          <div className="checkout_form">
            <h4 className="title mb30">Billing details</h4>
            <div className="checkout_coupon">
              <form
                className="form2"
                id="coupon_form"
                name="contact_form"
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb25">
                      <h6 className="mb15">First Name</h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Jone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb25">
                      <h6 className="mb15">Last Name</h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h6 className="mb15">Company Name</h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="ABCD"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb25">
                      <h6 className="mb15">Country / Region *</h6>
                      <div className="bootselect-multiselect">
                        <div className="dropdown bootstrap-select">
                          <select className="selectpicker">
                            <option>Select</option>
                            <option>United Kingdom</option>
                            <option>United State</option>
                            <option>Ukraine</option>
                            <option>Uruguay</option>
                            <option>UK</option>
                            <option>Uzbekistan</option>
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
                            title="Select"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  Select
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
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h6 className="mb15">House number and street name</h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Jone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h6 className="mb15">
                        Apartment, suite, unit, etc. (optional)
                      </h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Jone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb25">
                      <h6 className="mb15">Country / Region *</h6>
                      <div className="bootselect-multiselect">
                        <div className="dropdown bootstrap-select">
                          <select className="selectpicker">
                            <option>United Kingdom</option>
                            <option>United State</option>
                            <option>Ukraine</option>
                            <option>Uruguay</option>
                            <option>UK</option>
                            <option>Uzbekistan</option>
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
                            title="United Kingdom"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  United Kingdom
                                </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb25">
                      <h6 className="mb15">Town / City *</h6>
                      <div className="bootselect-multiselect">
                        <div className="dropdown bootstrap-select">
                          <select className="selectpicker">
                            <option data-tokens="California">California</option>
                            <option data-tokens="Chicago">Chicago</option>
                            <option data-tokens="LosAngeles">
                              Los Angeles
                            </option>
                            <option data-tokens="Manhattan">Manhattan</option>
                            <option data-tokens="NewJersey">New Jersey</option>
                            <option data-tokens="NewYork">New York</option>
                            <option data-tokens="SanDiego">San Diego</option>
                            <option data-tokens="SanFrancisco">
                              San Francisco
                            </option>
                            <option data-tokens="Texas">Texas</option>
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
                            title="California"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  California
                                </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h6 className="mb15">State *</h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Jone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h6 className="mb15">ZIP *</h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Code"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h6 className="mb15">Phone *</h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h6 className="mb15">Email Address</h6>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb25">
                      <h4 className="mb15">Additional information</h4>
                      <h6>Order Notes (optional)</h6>
                      <textarea
                        name="form_message"
                        className=""
                        rows={7}
                        placeholder="Description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-4">
          <div className="shop-sidebar ms-md-auto">
            <div className="order_sidebar_widget mb30 default-box-shadow1">
              <h4 className="title">Your Order</h4>
              <ul className="p-0 mb-0">
                <li className="bdrb1 mb20">
                  <h6>
                    Product <span className="float-end">Subtotal</span>
                  </h6>
                </li>
                <li className="mb20">
                  <p className="body-color">
                    Hoodie x2 <span className="float-end">$59.00</span>
                  </p>
                </li>
                <li className="mb20">
                  <p className="body-color">
                    Seo Books x 1 <span className="float-end">$67.00</span>
                  </p>
                </li>
                <li className=" bdrb1 mb15">
                  <h6>
                    Subtotal <span className="float-end">$178.00</span>
                  </h6>
                </li>
                <li className=" bdrb1 mb15">
                  <h6>
                    Shipping <span className="float-end">$178.00</span>
                  </h6>
                </li>
                <li>
                  <h6>
                    Total <span className="float-end">$9,218.00</span>
                  </h6>
                </li>
              </ul>
            </div>
            <div className="payment_widget default-box-shadow1">
              <h4 className="title">Payment</h4>
              <div className="radio-element">
                <div className="form-check d-flex align-items-center mb15">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked="checked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Direct bank transfer
                  </label>
                </div>
                <div className="pw-details">
                  <p className="fz13 mb30">
                    Complete your payment directly into our bank account,
                    ensuring to utilize your Order ID as the payment reference.
                    Kindly note that your order will only be dispatched once the
                    funds have successfully cleared in our account.
                  </p>
                </div>
                <div className="form-check d-flex align-items-center mb15">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Check payments
                  </label>
                </div>
                <div className="form-check d-flex align-items-center mb15">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    Cash on delivery
                  </label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault4"
                  >
                    PayPal
                  </label>
                </div>
              </div>
            </div>
            <div className="d-grid default-box-shadow2">
              <button className="ud-btn btn-thm">
                Place Order
                <i className="fal fa-arrow-right-long" />
              </button>
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
                    aria-owns="bs-select-4"
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
                      id="bs-select-4"
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
                    aria-owns="bs-select-5"
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
                      id="bs-select-5"
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

export default Shop_checkout