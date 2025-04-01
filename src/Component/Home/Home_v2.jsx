import React from 'react'

const Home_v2 = () => {
  return (
    <>
    <div className="body_content">
  {/* Home Banner Style V1 */}
  <section className="hero-home2 pb100-xs">
    <div className="container">
      <div className="row mb60 mb0-xl">
        <div className="col-xl-7">
          <div className="pr30 pr0-lg mb30-md position-relative">
            <h1 className="animate-up-1 mb25 text-white">
              Unearth ideal freelance <br className="d-none d-xl-block" />
              services for your business
            </h1>
            <p className="text-white animate-up-2">
              Leverage skilled professionals at a budget-friendly rate to
              optimize both
              <br className="d-none d-lg-block" /> your efficiency and
              expenditure.
            </p>
            <div className="advance-search-tab bgc-white p10 bdrs4-sm bdrs60 banner-btn position-relative zi1 animate-up-3 mt30">
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
                        <option>Choose Category</option>
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
                        title="Choose Category"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                              Choose Category
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
                      className="ud-btn btn-thm w-100 bdrs60"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt20 animate-up-4">
              <div className="col-xl-9">
                <div className="row justify-content-between">
                  <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">850</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text-white mb-0">Total Freelancer</p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">722</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text-white mb-0">Positive Review</p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">90</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text-white mb-0">Order recieved</p>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3 funfact_one at-home2-hero pe-0">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">500</div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text-white mb-0">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 d-none d-xl-block position-relative">
          <img
            src="images/about/about-1.png"
            alt=""
            className="animate-up-1 main-img-home2"
          />
          <div className="home2-hero-content position-relative">
            <div
              className="iconbox-small1 d-none d-xl-flex wow fadeInRight default-box-shadow4 bounce-x animate-up-1 animated"
              style={{ visibility: "visible", animationName: "bounceX" }}
            >
              <span className="icon flaticon-review" />
              <div className="details pl20">
                <h6 className="mb-1">Get quality work done quickly</h6>
                <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
              </div>
            </div>
            <div
              className="iconbox-small2 d-none d-xl-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2 animated"
              style={{ visibility: "visible", animationName: "bounceY" }}
            >
              <span className="icon flaticon-review" />
              <div className="details pl20">
                <h6 className="mb-1">Protected and well-secured</h6>
                <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
              </div>
            </div>
            <img
              src="images/about/happy-client.png"
              alt=""
              className="bounce-x bdrs16 img-1 default-box-shadow4"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Need something */}
  <section className="our-features pb90 pb30-md pt60">
    <div
      className="container wow fadeInUp"
      style={{ visibility: "hidden", animationName: "none" }}
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title">
            <h2>Require assistance?</h2>
            <p className="text">
              Highly popular and best-selling services of all time.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 at-home5 p-0">
            <div className="icon before-none">
              <span className="flaticon-cv" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Post a job</h4>
              <p className="text">
                Posting a job is simple and free. Just enter{" "}
                <br className="d-none d-xxl-block" /> a title and description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 at-home5 p-0">
            <div className="icon before-none">
              <span className="flaticon-web-design" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Choose freelancers</h4>
              <p className="text">
                Posting a job is simple and free. Just enter{" "}
                <br className="d-none d-xxl-block" /> a title and description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 at-home5 p-0">
            <div className="icon before-none">
              <span className="flaticon-secure" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Pay safely</h4>
              <p className="text">
                Posting a job is simple and free. Just enter{" "}
                <br className="d-none d-xxl-block" /> a title and description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 at-home5 p-0">
            <div className="icon before-none">
              <span className="flaticon-customer-service" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">We’re here to help</h4>
              <p className="text">
                Posting a job is simple and free. Just enter{" "}
                <br className="d-none d-xxl-block" /> a title and description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Popular Services */}
  <section className="pt-0 pb100 service-blog-thumb-size">
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
                        className="ud-btn btn-light-thm bdrs60"
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
                        className="ud-btn btn-light-thm bdrs60"
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
                        className="ud-btn btn-light-thm bdrs60"
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
                        className="ud-btn btn-light-thm bdrs60"
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
                        className="ud-btn btn-light-thm bdrs60"
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
  {/* CTA Banner */}
  <section className="cta-banner-about2 before-none at-home2 position-relative py-0">
    <div className="container position-relative">
      <div className="row align-items-center">
        <div className="col-lg-7 col-xl-5 mb100-md">
          <div className="mb30">
            <h5 className="text-thm">For clients</h5>
            <h2 className="title">Discover talent on your terms.</h2>
          </div>
          <p className="text">
            Collaborate with a vast network of skilled freelancers for tasks of
            all scales, <br className="d-none d-lg-block" />
            whether swift turnarounds or significant transformations.
          </p>
          <a
            className="ud-btn btn-thm bdrs90 default-box-shadow2 mt15 mb30-sm"
            href="page-contact.html"
          >
            Contact Us
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
        <div className="col-lg-5 col-xl-4 offset-xl-1 position-relative">
          <div className="listbox-style1 px30 py-5 bdrs16 bgc-thm2 mt30-md position-relative">
            <div className="list-style1">
              <ul className="mb-0">
                <li className="text-white fw500">
                  <i className="far fa-check dark-color bgc-white" />
                  Best options for every budget
                </li>
                <li className="text-white fw500">
                  <i className="far fa-check dark-color bgc-white" />
                  High-quality work delivered
                </li>
                <li className="text-white fw500">
                  <i className="far fa-check dark-color bgc-white" />
                  Secure payments, all transaction.
                </li>
                <li className="text-white fw500 mb-0">
                  <i className="far fa-check dark-color bgc-white" />
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img className="home2-cta-img" src="images/about/about-10.jpg" alt="" />
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
  <section className="pb-0 pt0">
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
              className="ud-btn btn-light-thm bdrs90"
              href="page-service-v1.html"
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
  {/* Top-rated freelancers. */}
  <section className="pt90 pt60-md pb130 pb60-md">
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
              className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
                            className="ud-btn btn-light-thm bdrs90"
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
  {/* Learn With Taskhub */}
  <section className="bgc-thm3">
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
            <h2 className="title">People find joy in learning with Taskhub</h2>
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
            className="testimonial-slider2 mb15 navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag"
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors instructors were supportive and
                          communicative.”
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          Course material was captivating, and the instructors
                          were supportive and instructors communicative.”
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “The course material was captivating, and the
                          instructors instructors were supportive and
                          communicative.”
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
                    <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16 mb35">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          Course material was captivating, and the instructors
                          were supportive and instructors communicative.”
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
  {/* Pricing Table Area */}
  <section className="our-pricing pb90">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 m-auto wow fadeInUp"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="main-title text-center mb30">
            <h2 className="title">Membership Plans</h2>
            <p className="paragraph mt10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus illo.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInUp"
        data-wow-delay="200ms"
        style={{
          visibility: "hidden",
          animationDelay: "200ms",
          animationName: "none"
        }}
      >
        <div className="col-lg-12">
          <div className="pricing_packages_top d-flex align-items-center justify-content-center mb60">
            <div className="toggle-btn">
              <span className="pricing_save1 dark-color ff-heading">
                Billed Monthly
              </span>
              <label className="switch">
                <input type="checkbox" id="checbox" onclick="check()" />
                <span className="pricing_table_switch_slide round" />
              </label>
              <span className="pricing_save2 dark-color ff-heading">
                Billed Yearly
              </span>
              <span className="pricing_save3">Save 50%</span>
            </div>
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
        <div className="col-sm-6 col-xl-3">
          <div className="pricing_packages at-home2 text-center bdrs16">
            <div className="heading mb10">
              <h1 className="text2" style={{ display: "block" }}>
                $29 <small>/ monthly</small>
              </h1>
              <h1 className="text1" style={{ display: "none" }}>
                $39 <small>/ monthly</small>
              </h1>
              <h4 className="package_title mt-2">Basic Plan</h4>
            </div>
            <div className="details">
              <p className="text mb30">
                Single payment for featuring a listing or task in highlighted
                search results
              </p>
              <div className="pricing-list mb40">
                <ul className="px-0">
                  <li>10 Listing</li>
                  <li>30 Days Visibility</li>
                  <li>Highlighted in Search Results</li>
                  <li>4 Revisions</li>
                  <li>7 days Delivery Time</li>
                  <li>Products Support</li>
                </ul>
              </div>
              <div className="d-grid">
                <a href="#" className="ud-btn btn-light-thm">
                  Buy Now
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="pricing_packages at-home2 active text-center bdrs16">
            <div className="heading mb10">
              <h1 className="text2" style={{ display: "block" }}>
                $49 <small>/ monthly</small>
              </h1>
              <h1 className="text1" style={{ display: "none" }}>
                $59 <small>/ monthly</small>
              </h1>
              <h4 className="package_title mt-2">Standard Plan</h4>
            </div>
            <div className="details">
              <p className="text mb30">
                Single payment for featuring a listing or task in highlighted
                search results
              </p>
              <div className="pricing-list mb40">
                <ul className="px-0">
                  <li>10 Listing</li>
                  <li>30 Days Visibility</li>
                  <li>Highlighted in Search Results</li>
                  <li>4 Revisions</li>
                  <li>7 days Delivery Time</li>
                  <li>Products Support</li>
                </ul>
              </div>
              <div className="d-grid">
                <a href="#" className="ud-btn btn-light-thm border-0">
                  Buy Now
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="pricing_packages at-home2 text-center bdrs16">
            <div className="heading mb10">
              <h1 className="text2" style={{ display: "block" }}>
                $89 <small>/ monthly</small>
              </h1>
              <h1 className="text1" style={{ display: "none" }}>
                $99 <small>/ monthly</small>
              </h1>
              <h4 className="package_title mt-2">Extended Plan</h4>
            </div>
            <div className="details">
              <p className="text mb30">
                Single payment for featuring a listing or task in highlighted
                search results
              </p>
              <div className="pricing-list mb40">
                <ul className="px-0">
                  <li>10 Listing</li>
                  <li>30 Days Visibility</li>
                  <li>Highlighted in Search Results</li>
                  <li>4 Revisions</li>
                  <li>7 days Delivery Time</li>
                  <li>Products Support</li>
                </ul>
              </div>
              <div className="d-grid">
                <a href="#" className="ud-btn btn-light-thm">
                  Buy Now
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="pricing_packages at-home2 text-center bdrs16">
            <div className="heading mb10">
              <h1 className="text2" style={{ display: "block" }}>
                $129 <small>/ monthly</small>
              </h1>
              <h1 className="text1" style={{ display: "none" }}>
                $139 <small>/ monthly</small>
              </h1>
              <h4 className="package_title mt-2">Enterprise Plan</h4>
            </div>
            <div className="details">
              <p className="text mb30">
                Single payment for featuring a listing or task in highlighted
                search results
              </p>
              <div className="pricing-list mb40">
                <ul className="px-0">
                  <li>10 Listing</li>
                  <li>30 Days Visibility</li>
                  <li>Highlighted in Search Results</li>
                  <li>4 Revisions</li>
                  <li>7 days Delivery Time</li>
                  <li>Products Support</li>
                </ul>
              </div>
              <div className="d-grid">
                <a href="#" className="ud-btn btn-light-thm">
                  Buy Now
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a className="scrollToHome at-home2" href="#">
    <i className="fas fa-angle-up" />
  </a>
</div>

    </>
  )
}

export default Home_v2