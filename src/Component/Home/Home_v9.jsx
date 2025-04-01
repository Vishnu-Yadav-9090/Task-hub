import React from 'react'

const Home_v9 = () => {
  return (
    <>
     <div className="body_content">
  {/* Home Banner Style V1 */}
  <section className="hero-home10 p-0 overflow-hidden">
    <div className="container-fluid p-0" style={{ zIndex: 0 }}>
      <div className="row">
        <div className="col-lg-12">
          <div className="main-banner-wrapper home9-hero-content">
            <div className="navi_pagi_vertical_right dots_nav_light banner-style-one slider-1-grid owl-theme owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-2762px, 0px, 0px)",
                    transition: "all",
                    width: 9667
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 1351, marginRight: 30 }}
                  >
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-3.jpg)" }}
                    />
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 1351, marginRight: 30 }}
                  >
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 1351, marginRight: 30 }}
                  >
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-2.jpg)" }}
                    />
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 1351, marginRight: 30 }}
                  >
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-3.jpg)" }}
                    />
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 1351, marginRight: 30 }}
                  >
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 1351, marginRight: 30 }}
                  >
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-2.jpg)" }}
                    />
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 1351, marginRight: 30 }}
                  >
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-3.jpg)" }}
                    />
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="far fa-arrow-left-long" />
                </button>
                <button type="button" role="presentation" className="owl-next">
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
              </div>
            </div>
            {/* /.carousel-btn-block banner-carousel-btn */}
          </div>
          {/* /.main-banner-wrapper */}
        </div>
      </div>
    </div>
    <div className="home1-banner-content at-home9">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <h3 className="banner-title">
              Your Business, <br className="d-none d-lg-block" />
              Our Freelance Expertise
            </h3>
            <p className="banner-text text-white ff-heading mb30">
              Taskhub.com empowers millions to transform ideas into reality.
            </p>
            <div className="advance-search-tab bgc-white bdrs60 p10 bdrs4-sm banner-btn position-relative">
              <div className="row">
                <div className="col-md-5 col-lg-6 col-xl-6">
                  <div className="advance-search-field mb10-sm">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon far fa-magnifying-glass" />
                        <input
                          className="form-control"
                          type="text"
                          name="search"
                          placeholder="What are you looking for?"
                        />
                        <div className="search-suggestions">
                          <h6 className="fz14 ml30 mt25 mb-3">
                            Popular Search
                          </h6>
                          <div className="box-suggestions">
                            <ul className="px-0 m-0 pb-4">
                              <li>
                                <div className="info-product">
                                  <div className="item_title">
                                    mobile app development
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="info-product">
                                  <div className="item_title">
                                    mobile app builder
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="info-product">
                                  <div className="item_title">
                                    mobile legends
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="info-product">
                                  <div className="item_title">
                                    mobile app ui ux design
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="info-product">
                                  <div className="item_title">
                                    mobile game app development
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="info-product">
                                  <div className="item_title">
                                    mobile app design
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-3">
                  <div className="bselect-style1 bdrl1 bdrn-sm">
                    <div
                      className="dropdown bootstrap-select"
                      style={{ width: "100%" }}
                    >
                      <select className="selectpicker" data-width="100%">
                        <option>City, state, or zip</option>
                        <option data-tokens="Miami">Miami</option>
                        <option data-tokens="NewYork">New York</option>
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
                        title="City, state, or zip"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                              City, state, or zip
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
                <div className="col-md-3 col-lg-2 col-xl-3">
                  <div className="text-center text-xl-start">
                    <button
                      className="ud-btn btn-dark bdrs60 bdrs4-sm w-100"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="banner-text text-white ff-heading mt30 mb15">
              Popular Searches
            </p>
            <div className="home9-tags d-md-flex align-items-center banner-btn">
              <a className="bdrs60 mb-2 mb-md-0" href="#">
                Designer
              </a>
              <a className="bdrs60 mb-2 mb-md-0" href="#">
                Developer
              </a>
              <a className="bdrs60 mb-2 mb-md-0" href="#">
                Web
              </a>
              <a className="bdrs60 mb-2 mb-md-0" href="#">
                IOS
              </a>
              <a className="bdrs60 mb-2 mb-md-0" href="#">
                PHP
              </a>
              <a className="bdrs60 mb-2 mb-md-0" href="#">
                Senior
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Partners */}
  <section className="our-partners">
    <div className="container">
      <div
        className="row wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-12">
          <div className="main-title text-center">
            <h6>The world's top brands trust us</h6>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30-lg">
            <img
              className="wa m-auto"
              src="images/partners/1.png"
              alt="1.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30-lg">
            <img
              className="wa m-auto"
              src="images/partners/2.png"
              alt="2.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30-lg">
            <img
              className="wa m-auto"
              src="images/partners/3.png"
              alt="3.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30-lg">
            <img
              className="wa m-auto"
              src="images/partners/4.png"
              alt="4.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30-lg">
            <img
              className="wa m-auto"
              src="images/partners/5.png"
              alt="5.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30-lg">
            <img
              className="wa m-auto"
              src="images/partners/6.png"
              alt="6.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* talent by category */}
  <section className="pb40-md pb90 pt-0">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "hidden",
          animationDelay: "300ms",
          animationName: "none"
        }}
      >
        <div className="col-lg-9">
          <div className="main-title2">
            <h2 className="title">Explore talent by category</h2>
            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4">
            <a
              className="ud-btn3 ud-btn btn-white2 double-border bdrs60"
              href="page-project-v1.html"
            >
              All Category
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-12 wow fadeInUp"
          data-wow-delay="300ms"
          style={{
            visibility: "hidden",
            animationDelay: "300ms",
            animationName: "none"
          }}
        >
          <div className="dots_none slider-dib-sm slider-5-grid vam_nav_style owl-theme owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1146px, 0px, 0px)",
                  transition: "all",
                  width: 3725
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Creative &amp; Design </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Digital Marketing</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Writing &amp; Translation</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Music &amp; Audio</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Development &amp; IT</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Creative &amp; Design </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Digital Marketing</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Writing &amp; Translation</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Music &amp; Audio</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Development &amp; IT</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Creative &amp; Design </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Digital Marketing</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div
                      className="feature-style1 mb30 bdrs16"
                      style={{ height: 297 }}
                    >
                      <div className="feature-img bdrs16 overflow-hidden">
                        <img
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          src="images/listings/category-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="feature-content">
                        <div className="top-area">
                          <h6 className="title mb-1">1.800 skills</h6>
                          <h5 className="text">Writing &amp; Translation</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="far fa-arrow-left-long" />
              </button>
              <button type="button" role="presentation" className="owl-next">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Popular Services */}
  <section className="pt-0 pb-0 pb30-md service-blog-thumb-size">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-xl-3">
          <div className="main-title mb30-lg">
            <h2 className="title">Popular Services</h2>
            <p className="paragraph">
              Highly and best-selling services of all time.
            </p>
          </div>
        </div>
        <div className="col-xl-9">
          <div className="navpill-style2 at-home9 mb50-lg">
            <ul
              className="nav nav-pills mb20 justify-content-xl-end"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fw500 dark-color"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Development &amp; IT
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Creative &amp; Design{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Digital Marketing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-music-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-music"
                  type="button"
                  role="tab"
                  aria-controls="pills-music"
                  aria-selected="false"
                >
                  Music &amp; Audio
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-video-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-video"
                  type="button"
                  role="tab"
                  aria-controls="pills-video"
                  aria-selected="false"
                >
                  Video &amp; Animation
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="navpill-style2">
            <div className="tab-content ha" id="pills-tabContent">
              <div
                className="tab-pane fade fz15 text show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(-578px, 0px, 0px)",
                                transition: "all",
                                width: 2312
                              }}
                            >
                              <div
                                className="owl-item cloned"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-4.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-5.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-2.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-3.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-4.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-5.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-2.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 259, marginRight: 30 }}
                              >
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-3.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
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
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
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
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all"
                              }}
                            >
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-2.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-3.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-4.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-5.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
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
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
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
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all"
                              }}
                            >
                              <div className="owl-item">
                                <div className="item">
                                  <img
                                    className="w-100"
                                    src="images/listings/g-2.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <img
                                    className="w-100"
                                    src="images/listings/g-3.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <img
                                    className="w-100"
                                    src="images/listings/g-4.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <img
                                    className="w-100"
                                    src="images/listings/g-5.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
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
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
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
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-music"
                role="tabpanel"
                aria-labelledby="pills-audio-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all"
                              }}
                            >
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-2.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-3.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-4.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-5.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
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
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
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
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-video"
                role="tabpanel"
                aria-labelledby="pills-video-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all"
                              }}
                            >
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-2.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-3.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-4.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item" style={{ height: 245 }}>
                                  <img
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                    src="images/listings/g-5.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="listing-fav fz12">
                                    <span className="far fa-heart" />
                                  </a>
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
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
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
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our CTA */}
  <section className="our-cta bgc-thm4 maxw1400 mx-auto pt80 pb90 pt60-md pb60-md mt110 mt0-lg bdrs16">
    <div className="container">
      <div className="row justify-content-between">
        <div
          className="col-md-7 col-xl-5 wow fadeInLeft"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="cta-style3 pl80 pl0-lg">
            <h2 className="cta-title">
              Achieve greater productivity with skilled freelancers.
            </h2>
            <div className="d-sm-flex align-items-center mt30">
              <a
                href="page-project-v1.html"
                className="ud-btn btn-dark bdrs60 me-sm-3"
              >
                Find Work <i className="fal fa-arrow-right-long" />
              </a>
              <a
                href="page-freelancer-v1.html"
                className="ud-btn btn-transparent double-border bdrs60"
              >
                Find Talent <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-5 col-xl-4 position-relative wow zoomIn"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="cta-img me-4">
            <img className="w-100" src="images/about/about-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Top-rated freelancers. */}
  <section className="pb120">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-9">
          <div className="main-title">
            <h2 className="title">Top-rated freelancers.</h2>
            <p className="paragraph">
              Numquam acorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4">
            <a
              className="ud-btn btn-white2 double-border bdrs60"
              href="page-freelancer-v1.html"
            >
              All Freelancers
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="navi_pagi_bottom_center slider-4-grid owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1146px, 0px, 0px)",
                  transition: "all",
                  width: 4298
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-4.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Theresa Webb</h5>
                        <p className="mb-0">Marketing Coordinator</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-1.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Jone Doe</h5>
                        <p className="mb-0">Nursing Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-2.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Watson Kristin </h5>
                        <p className="mb-0">Dog Trainer</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-3.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">James David</h5>
                        <p className="mb-0">Medical Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-1.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Jone Doe</h5>
                        <p className="mb-0">Nursing Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-2.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Watson Kristin </h5>
                        <p className="mb-0">Dog Trainer</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-3.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">James David</h5>
                        <p className="mb-0">Medical Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-4.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Theresa Webb</h5>
                        <p className="mb-0">Marketing Coordinator</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-1.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Jone Doe</h5>
                        <p className="mb-0">Nursing Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-2.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Watson Kristin </h5>
                        <p className="mb-0">Dog Trainer</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-3.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">James David</h5>
                        <p className="mb-0">Medical Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-1.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Jone Doe</h5>
                        <p className="mb-0">Nursing Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-2.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Watson Kristin </h5>
                        <p className="mb-0">Dog Trainer</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-3.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">James David</h5>
                        <p className="mb-0">Medical Assistant</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                      <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-4.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="details">
                        <h5 className="title mb-1">Theresa Webb</h5>
                        <p className="mb-0">Marketing Coordinator</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (495
                            reviews)
                          </p>
                        </div>
                        <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                          <span className="tag">Figma</span>
                          <span className="tag mx10">Sketch</span>
                          <span className="tag">HTML5</span>
                        </div>
                        <hr className="opacity-100 mt20 mb15" />
                        <div className="fl-meta d-flex align-items-center justify-content-between">
                          <a className="meta fw500 text-start">
                            Location
                            <br />
                            <span className="fz14 fw400">Newyork</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Rate
                            <br />
                            <span className="fz14 fw400">$90 / hr</span>
                          </a>
                          <a className="meta fw500 text-start">
                            Job Success
                            <br />
                            <span className="fz14 fw400">%98</span>
                          </a>
                        </div>
                        <div className="d-grid mt15">
                          <a
                            href="page-freelancer-single.html"
                            className="ud-btn btn-white2 double-border bdrs60"
                          >
                            View Profile
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="far fa-arrow-left-long" />
              </button>
              <button type="button" role="presentation" className="owl-next">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Funfact */}
  <section className="hover-bgc-color pb90 pb30-md overflow-hidden">
    <img
      className="left-top-img wow zoomIn d-none d-lg-block"
      src="images/vector-img/left-top.png"
      alt=""
      style={{ visibility: "hidden", animationName: "none" }}
    />
    <img
      className="right-bottom-img wow zoomIn d-none d-lg-block"
      src="images/vector-img/right-bottom.png"
      alt=""
      style={{ visibility: "hidden", animationName: "none" }}
    />
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-md-6 col-xl-4 wow fadeInRight"
          data-wow-delay="100ms"
          style={{
            visibility: "hidden",
            animationDelay: "100ms",
            animationName: "none"
          }}
        >
          <div className="cta-style6 mb30-sm">
            <h2 className="cta-title mb25">
              Finding the right talent is <br className="d-none d-lg-block" />
              crucial for business growth.
            </h2>
            <p className="text-thm2 fz15 mb25">
              Identifying the right talent is vital for business expansion{" "}
              <br className="d-none d-md-block" /> do eiusmod tempor incididunt.
            </p>
            <a href="page-contact.html" className="ud-btn btn-dark bdrs60">
              Get Started <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
        <div
          className="col-md-6 col-xl-6 offset-xl-2 wow fadeInLeft"
          data-wow-delay="300ms"
          style={{
            visibility: "hidden",
            animationDelay: "300ms",
            animationName: "none"
          }}
        >
          <div className="row align-items-center position-relative">
            <div className="home9-floating-img position-absolute">
              <img
                className="w-100-lg"
                src="images/about/element-6.png"
                alt=""
              />
            </div>
            <div className="col-sm-6">
              <div className="funfact-style1 bdrs16 text-center ms-md-auto">
                <ul className="ps-0 mb-0 d-flex justify-content-center">
                  <li>
                    <div className="timer title mb15">4</div>
                  </li>
                  <li>
                    <span>.9/5</span>
                  </li>
                </ul>
                <p className="fz15 dark-color">
                  Clients rate <br />
                  professionals on Taskhub
                </p>
              </div>
              <div className="funfact-style1 bdrs16 text-center ms-md-auto">
                <ul className="ps-0 mb-0 d-flex justify-content-center">
                  <li>
                    <div className="timer title mb15">95</div>
                  </li>
                  <li>
                    <span>%</span>
                  </li>
                </ul>
                <p className="fz15 dark-color">
                  95% customer satisfaction through to see their freelancers
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="funfact-style1 bdrs16 text-center">
                <ul className="ps-0 mb-0 d-flex justify-content-center">
                  <li>
                    <div className="title mb15">Award</div>
                  </li>
                </ul>
                <p className="fz15 dark-color">
                  G2’s 2024 Best <br />
                  Software Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Popular Services */}
  <section className="bgc-dark pb90 pb30-md">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-9">
          <div className="main-title">
            <h2 className="title text-white">Popular Services</h2>
            <p className="paragraph text-white">
              Highly popular and best-selling services of all time.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-lg-end mb-4">
            <a
              href="page-contact.html"
              className="ud-btn btn-light-white bdrs60"
            >
              Get Started <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="slider-outer-dib vam_nav_style dots_none slider-4-grid owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1432px, 0px, 0px)",
                  transition: "all",
                  width: 5444
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will design mobile app UI UX for ios and android
                            with figma or xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-2.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will create custom isometric flat design
                            illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Angelica Pan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-2.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will create custom isometric flat design
                            illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Angelica Pan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will design mobile app UI UX for ios and android
                            with figma or xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will create 5 an amazing 4k videos animated logo
                            intro
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will design mobile app UI UX for ios and android
                            with figma or xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-2.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will create custom isometric flat design
                            illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Angelica Pan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-2.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will create custom isometric flat design
                            illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Angelica Pan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Creative &amp; Design{" "}
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will design mobile app UI UX for ios and android
                            with figma or xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-service-single.html">
                            I will create 5 an amazing 4k videos animated logo
                            intro
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; Logo Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-service-single.html">
                            I will convert figma to HTML CSS using bootstrap or
                            tailwind
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Jone Doe</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $799
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="far fa-arrow-left-long" />
              </button>
              <button type="button" role="presentation" className="owl-next">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Learn With Taskhub */}
  <section className="bgc-light-yellow">
    <div className="container">
      <div className="row align-items-md-center">
        <div
          className="col-md-6 col-lg-8 mb30-md wow fadeInUp"
          data-wow-delay="100ms"
          style={{
            visibility: "hidden",
            animationDelay: "100ms",
            animationName: "none"
          }}
        >
          <div className="main-title">
            <h2 className="title">Taskhub: Loved for Learning</h2>
            <p className="paragraph">
              Numquam acorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="funfact_one">
                <div className="details">
                  <ul className="ps-0 d-flex mb-0">
                    <li>
                      <div className="timer">4</div>
                    </li>
                    <li>
                      <div>.</div>
                    </li>
                    <li>
                      <div className="timer">9</div>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      <div className="timer">5</div>
                    </li>
                  </ul>
                  <p className="text mb-0">
                    Clients rate professionals on Taskhub
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="funfact_one">
                <div className="details">
                  <ul className="ps-0 d-flex mb-0">
                    <li>
                      <div className="timer">99</div>
                    </li>
                    <li>
                      <span>%</span>
                    </li>
                  </ul>
                  <p className="text mb-0">
                    95% customer satisfaction <br /> when they see freelancers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="funfact_one">
                <div className="details">
                  <h2>Award winner</h2>
                  <p className="text mb-0">Home ownership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4">
          <div
            className="testimonial-slider2 navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag"
            data-wow-delay="300ms"
            style={{
              visibility: "hidden",
              animationDelay: "300ms",
              animationName: "none"
            }}
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-772px, 0px, 0px)",
                  transition: "all",
                  width: 3088
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-1.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-2.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-1.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 356, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors were supportive and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="images/testimonials/testimonial-2.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Henry Courtney </h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="far fa-arrow-left-long" />
              </button>
              <button type="button" role="presentation" className="owl-next">
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
      </div>
    </div>
  </section>
  {/* Skills */}
  <section className="pb90 pb30-md">
    <div className="container">
      <div className="row align-items-md-center">
        <div className="col-lg-12">
          <div className="home9-navtab-style">
            <div className="navtab-style2">
              <nav>
                <div className="nav nav-tabs mb50" id="nav-tab2" role="tablist">
                  <button
                    className="nav-link active fw600"
                    id="nav-item1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-item1"
                    type="button"
                    role="tab"
                    aria-controls="nav-item1"
                    aria-selected="true"
                  >
                    Top skills
                  </button>
                  <button
                    className="nav-link fw600"
                    id="nav-item2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-item2"
                    type="button"
                    role="tab"
                    aria-controls="nav-item2"
                    aria-selected="false"
                  >
                    Popular Services
                  </button>
                  <button
                    className="nav-link fw600"
                    id="nav-item3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-item3"
                    type="button"
                    role="tab"
                    aria-controls="nav-item3"
                    aria-selected="false"
                  >
                    Best skills in UK
                  </button>
                  <button
                    className="nav-link fw600"
                    id="nav-item4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-item4"
                    type="button"
                    role="tab"
                    aria-controls="nav-item4"
                    aria-selected="false"
                  >
                    Portfolio of Projects
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-item1"
                  role="tabpanel"
                  aria-labelledby="nav-item1-tab"
                >
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Entry Specialists</a>
                          </li>
                          <li>
                            <a href="">Video Editors</a>
                          </li>
                          <li>
                            <a href="">Data Analyst</a>
                          </li>
                          <li>
                            <a href="">Shopify Developer</a>
                          </li>
                          <li>
                            <a href="">Ruby on Rails Developer</a>
                          </li>
                          <li>
                            <a href="">Social Media Manager</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Android Developer</a>
                          </li>
                          <li>
                            <a href="">Bookkeeper</a>
                          </li>
                          <li>
                            <a href="">Content Writer</a>
                          </li>
                          <li>
                            <a href="">Copywriter</a>
                          </li>
                          <li>
                            <a href="">Database Administrator</a>
                          </li>
                          <li>
                            <a href="">Software Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Scientist</a>
                          </li>
                          <li>
                            <a href="">Front-End Developer</a>
                          </li>
                          <li>
                            <a href="">Game Developer</a>
                          </li>
                          <li>
                            <a href="">Graphic Designer</a>
                          </li>
                          <li>
                            <a href="">iOS Developer</a>
                          </li>
                          <li>
                            <a href="">Java Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">JavaScript Developer</a>
                          </li>
                          <li>
                            <a href="">Logo Designer</a>
                          </li>
                          <li>
                            <a href="">Mobile App Developer</a>
                          </li>
                          <li>
                            <a href="">PHP Developer</a>
                          </li>
                          <li>
                            <a href="">Python Developer</a>
                          </li>
                          <li>
                            <a href="">Resume Writer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Technical Writer</a>
                          </li>
                          <li>
                            <a href="">UI Designer</a>
                          </li>
                          <li>
                            <a href="">UX Designer</a>
                          </li>
                          <li>
                            <a href="">Virtual Assistant</a>
                          </li>
                          <li>
                            <a href="">Web Designer</a>
                          </li>
                          <li>
                            <a href="">Wordpress Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-item2"
                  role="tabpanel"
                  aria-labelledby="nav-item2-tab"
                >
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Entry Specialists</a>
                          </li>
                          <li>
                            <a href="">Video Editors</a>
                          </li>
                          <li>
                            <a href="">Data Analyst</a>
                          </li>
                          <li>
                            <a href="">Shopify Developer</a>
                          </li>
                          <li>
                            <a href="">Ruby on Rails Developer</a>
                          </li>
                          <li>
                            <a href="">Social Media Manager</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Android Developer</a>
                          </li>
                          <li>
                            <a href="">Bookkeeper</a>
                          </li>
                          <li>
                            <a href="">Content Writer</a>
                          </li>
                          <li>
                            <a href="">Copywriter</a>
                          </li>
                          <li>
                            <a href="">Database Administrator</a>
                          </li>
                          <li>
                            <a href="">Software Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Scientist</a>
                          </li>
                          <li>
                            <a href="">Front-End Developer</a>
                          </li>
                          <li>
                            <a href="">Game Developer</a>
                          </li>
                          <li>
                            <a href="">Graphic Designer</a>
                          </li>
                          <li>
                            <a href="">iOS Developer</a>
                          </li>
                          <li>
                            <a href="">Java Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">JavaScript Developer</a>
                          </li>
                          <li>
                            <a href="">Logo Designer</a>
                          </li>
                          <li>
                            <a href="">Mobile App Developer</a>
                          </li>
                          <li>
                            <a href="">PHP Developer</a>
                          </li>
                          <li>
                            <a href="">Python Developer</a>
                          </li>
                          <li>
                            <a href="">Resume Writer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Technical Writer</a>
                          </li>
                          <li>
                            <a href="">UI Designer</a>
                          </li>
                          <li>
                            <a href="">UX Designer</a>
                          </li>
                          <li>
                            <a href="">Virtual Assistant</a>
                          </li>
                          <li>
                            <a href="">Web Designer</a>
                          </li>
                          <li>
                            <a href="">Wordpress Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-item3"
                  role="tabpanel"
                  aria-labelledby="nav-item3-tab"
                >
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Entry Specialists</a>
                          </li>
                          <li>
                            <a href="">Video Editors</a>
                          </li>
                          <li>
                            <a href="">Data Analyst</a>
                          </li>
                          <li>
                            <a href="">Shopify Developer</a>
                          </li>
                          <li>
                            <a href="">Ruby on Rails Developer</a>
                          </li>
                          <li>
                            <a href="">Social Media Manager</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Android Developer</a>
                          </li>
                          <li>
                            <a href="">Bookkeeper</a>
                          </li>
                          <li>
                            <a href="">Content Writer</a>
                          </li>
                          <li>
                            <a href="">Copywriter</a>
                          </li>
                          <li>
                            <a href="">Database Administrator</a>
                          </li>
                          <li>
                            <a href="">Software Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Scientist</a>
                          </li>
                          <li>
                            <a href="">Front-End Developer</a>
                          </li>
                          <li>
                            <a href="">Game Developer</a>
                          </li>
                          <li>
                            <a href="">Graphic Designer</a>
                          </li>
                          <li>
                            <a href="">iOS Developer</a>
                          </li>
                          <li>
                            <a href="">Java Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">JavaScript Developer</a>
                          </li>
                          <li>
                            <a href="">Logo Designer</a>
                          </li>
                          <li>
                            <a href="">Mobile App Developer</a>
                          </li>
                          <li>
                            <a href="">PHP Developer</a>
                          </li>
                          <li>
                            <a href="">Python Developer</a>
                          </li>
                          <li>
                            <a href="">Resume Writer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Technical Writer</a>
                          </li>
                          <li>
                            <a href="">UI Designer</a>
                          </li>
                          <li>
                            <a href="">UX Designer</a>
                          </li>
                          <li>
                            <a href="">Virtual Assistant</a>
                          </li>
                          <li>
                            <a href="">Web Designer</a>
                          </li>
                          <li>
                            <a href="">Wordpress Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-item4"
                  role="tabpanel"
                  aria-labelledby="nav-item4-tab"
                >
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Entry Specialists</a>
                          </li>
                          <li>
                            <a href="">Video Editors</a>
                          </li>
                          <li>
                            <a href="">Data Analyst</a>
                          </li>
                          <li>
                            <a href="">Shopify Developer</a>
                          </li>
                          <li>
                            <a href="">Ruby on Rails Developer</a>
                          </li>
                          <li>
                            <a href="">Social Media Manager</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Android Developer</a>
                          </li>
                          <li>
                            <a href="">Bookkeeper</a>
                          </li>
                          <li>
                            <a href="">Content Writer</a>
                          </li>
                          <li>
                            <a href="">Copywriter</a>
                          </li>
                          <li>
                            <a href="">Database Administrator</a>
                          </li>
                          <li>
                            <a href="">Software Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Data Scientist</a>
                          </li>
                          <li>
                            <a href="">Front-End Developer</a>
                          </li>
                          <li>
                            <a href="">Game Developer</a>
                          </li>
                          <li>
                            <a href="">Graphic Designer</a>
                          </li>
                          <li>
                            <a href="">iOS Developer</a>
                          </li>
                          <li>
                            <a href="">Java Developer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">JavaScript Developer</a>
                          </li>
                          <li>
                            <a href="">Logo Designer</a>
                          </li>
                          <li>
                            <a href="">Mobile App Developer</a>
                          </li>
                          <li>
                            <a href="">PHP Developer</a>
                          </li>
                          <li>
                            <a href="">Python Developer</a>
                          </li>
                          <li>
                            <a href="">Resume Writer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-list-style1 mb20">
                        <ul className="p-0 mb-0">
                          <li>
                            <a href="">Technical Writer</a>
                          </li>
                          <li>
                            <a href="">UI Designer</a>
                          </li>
                          <li>
                            <a href="">UX Designer</a>
                          </li>
                          <li>
                            <a href="">Virtual Assistant</a>
                          </li>
                          <li>
                            <a href="">Web Designer</a>
                          </li>
                          <li>
                            <a href="">Wordpress Developer</a>
                          </li>
                        </ul>
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
  </section>
  {/* Our Footer */}
  <section className="footer-style1 at-home2 pb-0 pt60">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="footer-widget mb-4 mb-lg-5">
            <div className="mailchimp-widget mb90">
              <h6 className="title text-white mb20">Subscribe</h6>
              <div className="mailchimp-style1 at-home9 bdrs60 overflow-hidden">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                />
                <button className="text-thm" type="submit">
                  Send
                </button>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-auto">
                <div className="link-style1 mb-3">
                  <h6 className="text-white mb25">About</h6>
                  <div className="link-list">
                    <a href="#">Careers</a>
                    <a href="#">Press &amp; News</a>
                    <a href="#">Partnerships</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Investor Relations</a>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="link-style1 mb-3">
                  <h6 className="text-white mb25">Categories</h6>
                  <ul className="ps-0">
                    <li>
                      <a href="#">Graphics &amp; Design</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Writing &amp; Translation</a>
                    </li>
                    <li>
                      <a href="#">Video &amp; Animation</a>
                    </li>
                    <li>
                      <a href="#">Music &amp; Audio</a>
                    </li>
                    <li>
                      <a href="#">Programming &amp; Tech</a>
                    </li>
                    <li>
                      <a href="#">Data</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="link-style1 mb-3">
                  <h6 className="text-white mb25">Support</h6>
                  <ul className="ps-0">
                    <li>
                      <a href="#">Help &amp; Support</a>
                    </li>
                    <li>
                      <a href="#">Trust &amp; Safety</a>
                    </li>
                    <li>
                      <a href="#">Selling on Taskhub</a>
                    </li>
                    <li>
                      <a href="#">Buying on Taskhub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 offset-xl-2">
          <div className="footer-widget mb-4 mb-lg-5">
            <a className="footer-logo" href="index.html">
              <img className="mb40" src="images/header-logo4.svg" alt="" />
            </a>
            <div className="row mb-4 mb-lg-5">
              <div className="col-auto">
                <div className="contact-info">
                  <p className="info-title mb-2">Toll Free Customer Care</p>
                  <h5 className="info-phone">
                    <a className="text-white" href="">
                      +(2) 321 654 9870
                    </a>
                  </h5>
                </div>
              </div>
              <div className="col-auto">
                <div className="contact-info">
                  <p className="info-title mb-2">Need live support?</p>
                  <h5 className="info-mail">
                    <a className="text-white" href="mailto:hi@abcd.com">
                      hi@abcd.com
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="app-widget at-home9">
              <h5 className="title text-white mb20">Apps</h5>
              <div className="row mb-4 mb-lg-5">
                <div className="col-auto">
                  <a href="">
                    <div className="app-info d-flex align-items-center mb10 bdrs60">
                      <div className="flex-shrink-0 pr15 border-0">
                        <i className="fab fa-apple fz30 text-white" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="app-text text-white fz13 mb0">
                          Download on the
                        </p>
                        <h6 className="app-title mb-1 text-white">
                          Apple Store
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="">
                    <div className="app-info d-flex align-items-center mb10 bdrs60">
                      <div className="flex-shrink-0 pr15 border-0">
                        <i className="fab fa-google-play fz24 text-white" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="app-text text-white fz13 mb0">
                          Get in on
                        </p>
                        <h6 className="app-title mb-1 text-white">
                          Google Play
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="social-widget">
              <h5 className="text-white mb20">Follow us:</h5>
              <div className="social-style1">
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
      </div>
    </div>
    <div className="container white-bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">
              © 2024 Themebracket. All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="footer_bottom_right_btns at-home9 text-center text-lg-end">
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

export default Home_v9