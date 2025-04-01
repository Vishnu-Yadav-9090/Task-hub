import React from 'react'

const Home_v3 = () => {
  return (
    <>
     <div className="body_content">
  <section className="categories_list_section overflow-hidden bgc-thm5">
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
                <a href="">Digital Marketing</a>
              </li>
              <li>
                <a href="">Writing &amp; Translation</a>
              </li>
              <li>
                <a href="" className="active">
                  Video &amp; Animation
                </a>
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
  {/* Home Banner Style V1 */}
  <section className="home3-hero">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-7">
          <div className="home3-hero-content pe-xl-5 position-relative zi1">
            <h2 className="title text-thm2 animate-up-1">
              Employ Professionals for <br className="d-none d-lg-block" />
              Seamless Task Completion
            </h2>
            <p className="ff-heading mb30 mt20 animate-up-2">
              Collaborate with skilled individuals at budget-friendly rates for
              optimal time and cost utilization.
            </p>
            <div className="advance-search-tab at-home3 default-box-shadow1 bgc-white bgct-sm bdrn-sm p10 p0-md bdrs4 position-relative zi9 animate-up-3">
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
                <div className="col-md-4 col-lg-4 col-xl-3 d-none d-md-block">
                  <div className="bselect-style1 bdrl1 bdrn-sm">
                    <div
                      className="dropdown bootstrap-select"
                      style={{ width: "100%" }}
                    >
                      <select className="selectpicker" data-width="100%">
                        <option>City, state, or zip</option>
                        <option data-tokens="Graphics&Design">
                          Graphics &amp; Design
                        </option>
                        <option data-tokens="DigitlMarketing">
                          Digital Marketing
                        </option>
                        <option data-tokens="Writing&Translation">
                          Writing &amp; Translation
                        </option>
                        <option data-tokens="Video&Animation">
                          Video &amp; Animation
                        </option>
                        <option data-tokens="Music&Audio">
                          Music &amp; Audio
                        </option>
                        <option data-tokens="Programming&Tech">
                          Programming &amp; Tech
                        </option>
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
                  <div className="text-center text-xl-end">
                    <button className="ud-btn btn-home3 w-100-sm" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="text fz15 me-2 mb-0 mt30 animate-up-4">
              Trusted by :
            </p>
            <div className="home3-hero-partner mt20 animate-up-4">
              <li className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0">
                <img src="images/partners/4.png" alt="" />
              </li>
              <li className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0">
                <img src="images/partners/2.png" alt="" />
              </li>
              <li className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0">
                <img src="images/partners/1.png" alt="" />
              </li>
              <li className="d-inline-block">
                <img src="images/partners/5.png" alt="" />
              </li>
            </div>
          </div>
        </div>
        <div className="col-xl-5 d-none d-xl-block">
          <div className="position-relative">
            <div className="home3-hero-img">
              <div className="d-flex align-items-center">
                <img
                  src="images/about/home3-hero-img-1.jpg"
                  alt=""
                  className="animate-up-1"
                />
                <div className="wrapper ml10">
                  <img
                    src="images/about/home3-hero-img-2.jpg"
                    alt=""
                    className="animate-up-2 mb10"
                  />
                  <img
                    src="images/about/home3-hero-img-3.jpg"
                    alt=""
                    className="animate-up-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Popular Services */}
  <section className="pt200 pb-0 pb30-md">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-9 mx-auto">
          <div className="main-title text-center mb30">
            <h2 className="title">Popular Services</h2>
            <p className="paragraph">
              Highly popular and best-selling services of all time.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="navpill-style2">
            <ul
              className="nav nav-pills mb60 justify-content-center"
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
            <div className="tab-content ha" id="pills-tabContent">
              <div
                className="tab-pane fade fz15 text show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
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
                          <div className="listing-style1">
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
                                  I will do mobile app development for ios and
                                  android
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will do mobile app development for ios and
                                  android
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                          <div className="listing-style1">
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
                                  I will do mobile app development for ios and
                                  android
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="navi_pagi_bottom_center slider-4-grid owl-carousel owl-theme owl-loaded owl-drag">
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will do mobile app development for ios and
                                  android
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="navi_pagi_bottom_center slider-4-grid owl-carousel owl-theme owl-loaded owl-drag">
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will do mobile app development for ios and
                                  android
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-music"
                role="tabpanel"
                aria-labelledby="pills-audio-tab"
              >
                <div className="navi_pagi_bottom_center slider-4-grid owl-carousel owl-theme owl-loaded owl-drag">
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will do mobile app development for ios and
                                  android
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-video"
                role="tabpanel"
                aria-labelledby="pills-video-tab"
              >
                <div className="navi_pagi_bottom_center slider-4-grid owl-carousel owl-theme owl-loaded owl-drag">
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
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will do mobile app development for ios and
                                  android
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will convert figma to HTML CSS using
                                  bootstrap or tailwind
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                      <div className="owl-item">
                        <div className="item">
                          <div className="listing-style1">
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
                                  I will build a fully responsive design in
                                  HTML,CSS, bootstrap, and javascript
                                </a>
                              </h5>
                              <div className="review-meta d-flex align-items-center">
                                <i className="fas fa-star fz10 review-color me-2" />
                                <p className="mb-0 body-color fz14">
                                  <span className="dark-color me-2">4.82</span>
                                  94 reviews
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Talent by category */}
  <section className="pb40-md pb90">
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
            <p className="paragraph">Find inspiration in 1700+ skills.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4 mb-lg-0">
            <a className="ud-btn2" href="page-service-single.html">
              All Categories
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="row d-none d-lg-flex wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-developer" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Development &amp; IT</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-web-design-1" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Creative &amp; Design </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-digital-marketing" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Digital Marketing</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-translator" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Writing &amp; Translation</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-microphone" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Music &amp; Audio</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-video-file" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Video &amp; Animation</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-ruler" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Engineers &amp; Architects</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1 bdr1 d-flex align-items-start mb30">
            <div className="icon flex-shrink-0">
              <span className="flaticon-goal" />
            </div>
            <div className="details ml40">
              <p className="mb-0 text">1.800 skills</p>
              <h5 className="title">Finance &amp; Accounting</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-block d-lg-none">
        <div className="col-lg-12">
          <div
            className="slider-outer-dib navi_pagi_top_right slider-5-grid owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag animated"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
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
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-developer" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">Development &amp; IT</h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="item">
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-web-design-1" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">Creative &amp; Design </h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="item">
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-digital-marketing" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">Digital Marketing</h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="item">
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-translator" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">Writing &amp; Translation</h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="item">
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-microphone" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">Music &amp; Audio</h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="item">
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-video-file" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">Video &amp; Animation</h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="item">
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-ruler" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">
                          Engineering &amp; Architecture
                        </h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="item">
                    <div className="iconbox-style1">
                      <div className="icon">
                        <span className="flaticon-goal" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h4 className="title">Finance &amp; Accounting</h4>
                        <p className="mb-0">
                          Software Engineer, Master of Web and Mobile
                          Development, and More
                        </p>
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
  {/* About Us */}
  <section className="pt0 pb40-md">
    <div className="cta-banner bgc-light-yellow mx-auto maxw1700 pt110 pb80 pb30-md bdrs12 position-relative">
      <div className="container">
        <div className="row align-items-start align-items-xl-center">
          <div className="col-md-6 col-lg-7 col-xl-6">
            <div
              className="position-relative mb35 mb0-sm wow fadeInRight"
              data-wow-delay="300ms"
              style={{
                visibility: "hidden",
                animationDelay: "300ms",
                animationName: "none"
              }}
            >
              <div className="freelancer-widget d-none d-lg-block">
                <h5 className="title mb20">
                  <span className="text-thm">200+</span> Verified Freelancer
                </h5>
                <div className="thumb d-flex align-items-center mb20">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-1.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title mb-0">Marvin McKinney</h6>
                    <p className="fz14 mb-0">Designer</p>
                  </div>
                </div>
                <div className="thumb d-flex align-items-center mb20">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-2.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title mb-0">Ralph Edwards</h6>
                    <p className="fz14 mb-0">Designer</p>
                  </div>
                </div>
                <div className="thumb d-flex align-items-center mb20">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-3.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title mb-0">Annette Black</h6>
                    <p className="fz14 mb-0">Designer</p>
                  </div>
                </div>
                <div className="thumb d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-4.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title mb-0">Jane Cooper</h6>
                    <p className="fz14 mb-0">Designer</p>
                  </div>
                </div>
              </div>
              <div className="freelancer-style1 about-page-style text-center d-none d-lg-block">
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
                      <span className="dark-color">4.9</span> (495 reviews)
                    </p>
                  </div>
                  <div className="skill-tags d-flex align-items-center justify-content-center">
                    <span className="tag">Figma</span>
                    <span className="tag mx10">Sketch</span>
                    <span className="tag">HTML5</span>
                  </div>
                  <hr />
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
                </div>
              </div>
              <img
                className="d-block d-lg-none w-100"
                src="images/about/verified-freelancer.png"
                alt=""
              />
              <div className="imgbox-about-page position-relative d-none d-xl-block">
                <img
                  className="img-1 spin-right"
                  src="images/about/element-1.png"
                  alt=""
                />
                <img
                  className="img-2 bounce-x"
                  src="images/about/element-2.png"
                  alt=""
                />
                <img
                  className="img-3 bounce-y"
                  src="images/about/element-3.png"
                  alt=""
                />
                <img
                  className="img-4 bounce-y"
                  src="images/about/element-4.png"
                  alt=""
                />
                <img
                  className="img-5 spin-right"
                  src="images/about/element-5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-5 offset-xl-1">
            <div
              className="about-box-1 pe-4 mt100 mt0-lg mb30-lg wow fadeInLeft"
              data-wow-delay="300ms"
              style={{
                visibility: "hidden",
                animationDelay: "300ms",
                animationName: "none"
              }}
            >
              <h2 className="title mb10">
                Endorsed by leading freelancers <br />
                globally
              </h2>
              <p className="text mb25 mb30-md">
                Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                <br /> tempor incididunt temp or incididunt.
              </p>
              <div className="list-style3 mb40 mb30-md">
                <ul>
                  <li>
                    <i className="far fa-check text-white bgc-review-color2" />
                    The most recent education completed was a Computer's degree
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-review-color2" />
                    Bringing over 15+ years of experience to the table
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-review-color2" />
                    Recipient of 21 education awards
                  </li>
                </ul>
              </div>
              <a href="page-service-single.html" className="ud-btn btn-thm2">
                See More
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Partners */}
  <section className="our-partners pt0">
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
  {/* CTA Banner */}
  <section className="p-0">
    <div className="cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 wow fadeInRight"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="mb30">
              <div className="main-title">
                <h2 className="title">
                  Unlock a universe of freelance{" "}
                  <br className="d-none d-xl-block" /> expertise right at your
                  fingertips.
                </h2>
              </div>
            </div>
            <div className="why-chose-list">
              <div className="list-one d-flex align-items-start mb30">
                <span className="list-icon flex-shrink-0 flaticon-badge" />
                <div className="list-content flex-grow-1 ml20">
                  <h4 className="mb-1">Get quality work done quickly</h4>
                  <p className="text mb-0 fz15">
                    Verify a pro's portfolio, client approval, and identity{" "}
                    <br className="d-none d-lg-block" /> verification.
                  </p>
                </div>
              </div>
              <div className="list-one d-flex align-items-start mb30">
                <span className="list-icon flex-shrink-0 flaticon-money" />
                <div className="list-content flex-grow-1 ml20">
                  <h4 className="mb-1">Zero charges until you hire</h4>
                  <p className="text mb-0 fz15">
                    Conduct interviews, discuss rates, and make payments solely{" "}
                    <br className="d-none d-lg-block" /> for work you endorse.
                  </p>
                </div>
              </div>
              <div className="list-one d-flex align-items-start mb30">
                <span className="list-icon flex-shrink-0 flaticon-security" />
                <div className="list-content flex-grow-1 ml20">
                  <h4 className="mb-1">Protected and well-secured</h4>
                  <p className="text mb-0 fz15">
                    Focus on your work knowing we help protect your data and
                    privacy. We’re here with 24/7 customer support if you need
                    it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="cta-banner3-img wow fadeInLeft"
        src="images/about/about-5.jpg"
        alt=""
        data-wow-delay="300ms"
        style={{
          visibility: "hidden",
          animationDelay: "300ms",
          animationName: "none"
        }}
      />
    </div>
  </section>
  {/* Customers Testimonials */}
  <section>
    <div className="container">
      <div
        className="row wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-12">
          <div className="home3-testimonial-slider navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-2292px, 0px, 0px)",
                  transition: "all",
                  width: 6876
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: 1116, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-xl-4">
                        <div className="testimonial-style4-img position-relative">
                          <img
                            className="bdrs4"
                            src="images/about/about-8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-8">
                        <div className="testimonial-style4 position-relative">
                          <h2 className="sub-title text-thm mb25">Template</h2>
                          <h4 className="title mb35">
                            “ Could you please provide more context or clarify
                            your input? Are you referring to the field of
                            architecture, or is "architecture" related to
                            something specific in your previous question or
                            previous question or conversation conversation
                            previous.”
                          </h4>
                          <h6 className="author fz14">Henry Courtney </h6>
                          <p className="desig mb-0">
                            Product Manager | Template
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 1116, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-xl-4">
                        <div className="testimonial-style4-img position-relative">
                          <img
                            className="bdrs4"
                            src="images/about/about-8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-8">
                        <div className="testimonial-style4 position-relative">
                          <h2 className="sub-title text-thm mb25">Template</h2>
                          <h4 className="title mb35">
                            “ I have used Taskhub numerous times for several
                            different companies. I have always had great
                            experiences. I once tried using someone else and I
                            ended up having to cancel the order and move back to
                            Taskhub. ”
                          </h4>
                          <h6 className="author fz14">Henry Courtney </h6>
                          <p className="desig mb-0">
                            Product Manager | Template
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 1116, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-xl-4">
                        <div className="testimonial-style4-img position-relative">
                          <img
                            className="bdrs4"
                            src="images/about/about-8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-8">
                        <div className="testimonial-style4 position-relative">
                          <h2 className="sub-title text-thm mb25">Template</h2>
                          <h4 className="title mb35">
                            “ Could you please provide more context or clarify
                            your input? Are you referring to the field of
                            architecture, or is "architecture" related to
                            something specific in your previous question or
                            previous question or conversation conversation
                            previous.”
                          </h4>
                          <h6 className="author fz14">Henry Courtney </h6>
                          <p className="desig mb-0">
                            Product Manager | Template
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: 1116, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-xl-4">
                        <div className="testimonial-style4-img position-relative">
                          <img
                            className="bdrs4"
                            src="images/about/about-8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-8">
                        <div className="testimonial-style4 position-relative">
                          <h2 className="sub-title text-thm mb25">Template</h2>
                          <h4 className="title mb35">
                            “ I have used Taskhub numerous times for several
                            different companies. I have always had great
                            experiences. I once tried using someone else and I
                            ended up having to cancel the order and move back to
                            Taskhub. ”
                          </h4>
                          <h6 className="author fz14">Henry Courtney </h6>
                          <p className="desig mb-0">
                            Product Manager | Template
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 1116, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-xl-4">
                        <div className="testimonial-style4-img position-relative">
                          <img
                            className="bdrs4"
                            src="images/about/about-8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-8">
                        <div className="testimonial-style4 position-relative">
                          <h2 className="sub-title text-thm mb25">Template</h2>
                          <h4 className="title mb35">
                            “ Could you please provide more context or clarify
                            your input? Are you referring to the field of
                            architecture, or is "architecture" related to
                            something specific in your previous question or
                            previous question or conversation conversation
                            previous.”
                          </h4>
                          <h6 className="author fz14">Henry Courtney </h6>
                          <p className="desig mb-0">
                            Product Manager | Template
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 1116, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-xl-4">
                        <div className="testimonial-style4-img position-relative">
                          <img
                            className="bdrs4"
                            src="images/about/about-8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-8">
                        <div className="testimonial-style4 position-relative">
                          <h2 className="sub-title text-thm mb25">Template</h2>
                          <h4 className="title mb35">
                            “ I have used Taskhub numerous times for several
                            different companies. I have always had great
                            experiences. I once tried using someone else and I
                            ended up having to cancel the order and move back to
                            Taskhub. ”
                          </h4>
                          <h6 className="author fz14">Henry Courtney </h6>
                          <p className="desig mb-0">
                            Product Manager | Template
                          </p>
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
  {/* CTA Banner */}
  <section className="cta-banner-about2 mx-auto maxw1700 position-relative pt60-lg pb60-lg">
    <img
      className="cta-about2-img bdrs4 d-none d-xl-block"
      src="images/about/about-9.jpg"
      alt=""
    />
    <div className="container">
      <div className="row">
        <div
          className="col-md-11 wow fadeInUp"
          data-wow-delay="200ms"
          style={{
            visibility: "hidden",
            animationDelay: "200ms",
            animationName: "none"
          }}
        >
          <div className="main-title">
            <h2 className="title text-capitalize">Require assistance?</h2>
            <p className="text">
              Highly popular and best-selling services of all time.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInDown"
        data-wow-delay="400ms"
        style={{
          visibility: "hidden",
          animationDelay: "400ms",
          animationName: "none"
        }}
      >
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
            <span className="icon fz40 flaticon-cv" />
            <h4 className="iconbox-title mt20">Post a job</h4>
            <p className="text mb-0">
              It’s free and easy to post a job.
              <br className="d-none d-md-block" /> Simply fill in a title,
              description.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
            <span className="icon fz40 flaticon-web-design" />
            <h4 className="iconbox-title mt20">Choose freelancers</h4>
            <p className="text mb-0">
              It’s free and easy to post a job.
              <br className="d-none d-md-block" /> Simply fill in a title,
              description.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
            <span className="icon fz40 flaticon-secure" />
            <h4 className="iconbox-title mt20">Pay safely</h4>
            <p className="text mb-0">
              It’s free and easy to post a job.
              <br className="d-none d-md-block" /> Simply fill in a title,
              description.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Faq Area */}
  <section className="our-faq pb90">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 m-auto wow fadeInUp"
          data-wow-delay="300ms"
          style={{
            visibility: "hidden",
            animationDelay: "300ms",
            animationName: "none"
          }}
        >
          <div className="main-title text-center">
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="paragraph mt10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus illo.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "hidden",
          animationDelay: "300ms",
          animationName: "none"
        }}
      >
        <div className="col-lg-8 mx-auto">
          <div className="ui-content">
            <div className="accordion-style1 faq-page mb-4 mb-lg-5">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item active">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Which ways of payment are currently endorsed?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                      neque repellat facere ipsum quasi, officia animi libero
                      liquid. Quia, quo obcaecati.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Is it possible for me to cancel at any time?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                      neque repellat facere ipsum quasi, officia animi libero
                      liquid. Quia, quo obcaecati.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I get a receipt for my purchase?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                      neque repellat facere ipsum quasi, officia animi libero
                      liquid. Quia, quo obcaecati.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What type of license is necessary for my situation?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                      neque repellat facere ipsum quasi, officia animi libero
                      liquid. Quia, quo obcaecati.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How can I access a theme I've bought?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                      neque repellat facere ipsum quasi, officia animi libero
                      liquid. Quia, quo obcaecati.
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
  <section className="our-cta cta-home3-last pt90 pb90 pt60-md pb60-md mt100 mt0-lg">
    <div className="container">
      <div className="row justify-content-between">
        <div
          className="col-md-6 col-lg-7 col-xl-5 wow fadeInLeft"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="cta-style3">
            <h2 className="cta-title">
              Finding the right talent is crucial for business growth.
            </h2>
            <p className="cta-text">
              Reach millions of users, advertise jobs, and access 12.8 million
              CVs.
            </p>
            <a href="page-contact.html" className="ud-btn btn-thm2">
              Get Started <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-5 col-xl-5 position-relative wow zoomIn"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="cta-img">
            <img className="w-100" src="images/about/about-5.png" alt="" />
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

export default Home_v3