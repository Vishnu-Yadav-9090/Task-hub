import React from 'react'

const Service_v2 = () => {
  return (
    <>
    <div className="body_content">
  <section className="categories_list_section overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="listings_category_nav_list_menu">
            <ul className="mb0 d-flex ps-0">
              <li>
                <a href="">All Categories</a>
              </li>
              <li>
                <a href="">Graphics &amp; Design</a>
              </li>
              <li>
                <a className="active" href="">
                  Digital Marketing
                </a>
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
                <a href="">Business</a>
              </li>
              <li>
                <a href="">Lifestyle</a>
              </li>
              <li>
                <a href="">Trending</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcumb Sections */}
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
  {/* Breadcumb Sections */}
  <section className="breadcumb-section pt-0">
    <div className="cta-service-v2 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
      <img
        className="left-top-img wow zoomIn"
        src="images/vector-img/left-top.png"
        alt=""
        style={{ visibility: "visible", animationName: "zoomIn" }}
      />
      <img
        className="right-bottom-img wow zoomIn"
        src="images/vector-img/right-bottom.png"
        alt=""
        style={{ visibility: "visible", animationName: "zoomIn" }}
      />
      <img
        className="service-v1-vector bounce-y d-none d-lg-block"
        src="images/vector-img/vector-service-v1.png"
        alt=""
      />
      <div className="container">
        <div
          className="row wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="col-xl-5">
            <div className="position-relative">
              <h2>Creative &amp; Design </h2>
              <p className="text mb30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus illo.
              </p>
              <div className="d-flex align-items-center">
                <a
                  className="video-btn mr10 popup-iframe popup-youtube"
                  href="https://www.youtube.com/watch?v=Yy9Uf5fENHI"
                >
                  <i className="fal fa-play" />
                </a>
                <h6 className="mb-0">How Taskhub Works</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Listings All Lists */}
  <section className="pt30 pb90 service-blog-thumb-size style-two">
    <div className="container">
      <div className="row align-items-center mb20">
        <div className="col-6 col-sm-6 col-lg-9 pe-0">
          <div className="text-center text-sm-start">
            <div className="dropdown-lists">
              <ul className="p-0 mb-0 text-center text-sm-start">
                <li className="list-inline-item">
                  {/* Advance Features modal trigger */}
                  <button
                    type="button"
                    className="open-btn filter-btn-left mb10"
                  >
                    {" "}
                    <img
                      className="me-2"
                      src="images/icon/all-filter-icon.svg"
                      alt=""
                    />{" "}
                    All Filter
                  </button>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Delivery Time <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu">
                    <div className="widget-wrapper pb25 mb0">
                      <div className="radio-element">
                        <div className="form-check d-flex align-items-center mb10">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Express 24H
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center mb10">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked="checked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Up to 3 days
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center mb10">
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
                            Up to 7 days
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
                            Anytime
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="done-btn ud-btn btn-thm drop_btn">
                      Apply
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Budget <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu dd3">
                    <div className="widget-wrapper pb25 mb0 pr20">
                      {/* Range Slider Desktop Version */}
                      <div className="range-slider-style1">
                        <div className="range-wrapper">
                          <div className="slider-range mb20 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                            <div
                              className="ui-slider-range ui-corner-all ui-widget-header"
                              style={{ left: "0.02%", width: "61.819%" }}
                            />
                            <span
                              tabIndex={0}
                              className="ui-slider-handle ui-corner-all ui-state-default"
                              style={{ left: "0.02%" }}
                            />
                            <span
                              tabIndex={0}
                              className="ui-slider-handle ui-corner-all ui-state-default"
                              style={{ left: "61.839%" }}
                            />
                          </div>
                          <div className="text-center">
                            <input
                              type="text"
                              className="amount"
                              placeholder="$20"
                            />
                            <span className="fa-sharp fa-solid fa-minus mx-1 dark-color" />
                            <input
                              type="text"
                              className="amount2"
                              placeholder="$61839"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="done-btn ud-btn btn-thm drop_btn3">
                      Apply
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Level <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu">
                    <div className="widget-wrapper pb25 mb0">
                      <div className="checkbox-style1">
                        <label className="custom_checkbox">
                          Top Rated Seller
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="custom_checkbox">
                          Level Two
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                        <label className="custom_checkbox">
                          Level One
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="custom_checkbox">
                          New Seller
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                    <button className="done-btn ud-btn btn-thm dropdown-toggle">
                      Apply
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Location <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu dd4 pb20">
                    <div className="widget-wrapper pr20">
                      <div className="checkbox-style1">
                        <label className="custom_checkbox">
                          United States
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="custom_checkbox">
                          United Kingdom
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                        <label className="custom_checkbox">
                          Canada
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="custom_checkbox">
                          Germany
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="custom_checkbox">
                          French
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                    <button className="done-btn ud-btn btn-thm drop_btn4">
                      Apply
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-lg-3 px-0">
          <div className="page_control_shorting mb10 d-flex align-items-center justify-content-center justify-content-sm-end">
            <div className="pcs_dropdown dark-color pr10 pr0-xs">
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
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-1.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Web &amp; Logo Design
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will design modern websites in HTML/CSS or WordPress
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-1.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-718px, 0px, 0px)",
                      transition: "all",
                      width: 2872
                    }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 329, marginRight: 30 }}
                    >
                      <div className="item" style={{ height: 245 }}>
                        <img
                          className="h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="far fa-arrow-left-long" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                <div className="owl-dots">
                  <button role="button" className="owl-dot active">
                    <span />
                  </button>
                  <button role="button" className="owl-dot">
                    <span />
                  </button>
                  <button role="button" className="owl-dot">
                    <span />
                  </button>
                  <button role="button" className="owl-dot">
                    <span />
                  </button>
                </div>
              </div>
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Art &amp; Illustration
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will create custom isometric flat design illustration
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-2.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Angelica Pan</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-3.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Creative &amp; Design{" "}
              </p>
              <h5 className="list-title line-clamp2">
                <a href="page-service-single.html">
                  I will design mobile app UI UX for ios and android with figma
                  or xd
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-3.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-4.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Web &amp; Logo Design
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will do mobile app development for ios and android
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-4.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-5.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Web &amp; Logo Design
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will design modern websites in HTML/CSS or WordPress
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-1.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-6.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Art &amp; Illustration
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will create custom isometric flat design illustration
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-2.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Angelica Pan</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-7.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Creative &amp; Design{" "}
              </p>
              <h5 className="list-title line-clamp2">
                <a href="page-service-single.html">
                  I will design mobile app UI UX for ios and android with figma
                  or xd
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-3.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-8.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Web &amp; Logo Design
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will do mobile app development for ios and android
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-4.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-9.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Web &amp; Logo Design
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will design modern websites in HTML/CSS or WordPress
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-1.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-10.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Art &amp; Illustration
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will create custom isometric flat design illustration
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-2.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Angelica Pan</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-11.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Creative &amp; Design{" "}
              </p>
              <h5 className="list-title line-clamp2">
                <a href="page-service-single.html">
                  I will design mobile app UI UX for ios and android with figma
                  or xd
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-3.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-12.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Web &amp; Logo Design
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will do mobile app development for ios and android
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-4.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-13.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Web &amp; Logo Design
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will design modern websites in HTML/CSS or WordPress
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-1.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Jone Doe</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-center">
            <div className="list-thumb flex-shrink-0">
              <img className="w-100" src="images/listings/g-14.jpg" alt="" />
            </div>
            <div className="list-content flex-grow-1 ms-1">
              <a href="#" className="listing-fav fz12">
                <span className="far fa-heart" />
              </a>
              <p className="list-text body-color fz14 mb-1">
                Art &amp; Illustration
              </p>
              <h5 className="list-title">
                <a href="page-service-single.html">
                  I will create custom isometric flat design illustration
                </a>
              </h5>
              <div className="review-meta d-flex align-items-center">
                <i className="fas fa-star fz10 review-color me-2" />
                <p className="mb-0 body-color fz14">
                  <span className="dark-color me-2">4.82</span>94 reviews
                </p>
              </div>
              <hr className="my-2" />
              <div className="list-meta d-flex justify-content-between align-items-center mt15">
                <a href="#">
                  <span className="position-relative mr10">
                    <img
                      className="rounded-circle"
                      src="images/team/fl-s-2.png"
                      alt="Freelancer Photo"
                    />
                    <span className="online-badge" />
                  </span>
                  <span className="fz14">Angelica Pan</span>
                </a>
                <div className="budget">
                  <p className="mb-0 body-color">
                    Starting at
                    <span className="fz17 fw500 dark-color ms-1">$799</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mbp_pagination mt30 text-center">
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
            <li className="page-item d-inline-block d-sm-none">
              <a className="page-link" href="">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                5
              </a>
            </li>
            <li className="page-item d-none d-sm-inline-block">
              <a className="page-link" href="">
                ...
              </a>
            </li>
            <li className="page-item d-none d-sm-inline-block">
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

export default Service_v2