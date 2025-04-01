import React from 'react'

const Home_v5 = () => {
  return (
    <>
     <div className="body_content">
  {/* Home Banner Style V1 */}
  <section className="hero-home5 pb-0 pt90">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6">
          <div className="pr30 pr0-lg mb30-md position-relative">
            <h1 className="animate-up-1 mb25 text-thm2">
              Thousands of skilled <br className="d-none d-xl-block" />
              freelancers are ready to <br className="d-none d-xl-block" /> work
              for you
            </h1>
            <div className="advance-search-tab at-home6 bgc-white bdrs4 p10 position-relative zi2 animate-up-3 mr30 mr0-lg">
              <div className="row">
                <div className="col-md-9 col-lg-8 col-xl-9">
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
                <div className="col-md-3 col-lg-4 col-xl-3">
                  <div className="text-center">
                    <button
                      className="ud-btn btn-thm2 bdrs4 w-100"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-sm-between mt30 animate-up-4">
              <div className="funfact_one at-home5-hero me-2 me-sm-0">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex">
                    <li>
                      <div className="timer">850</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Total Freelancer</p>
                </div>
              </div>
              <div className="funfact_one at-home5-hero me-2 me-sm-0">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex">
                    <li>
                      <div className="timer">722</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Positive Review</p>
                </div>
              </div>
              <div className="funfact_one at-home5-hero me-2 me-sm-0">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex">
                    <li>
                      <div className="timer">90</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Order recieved</p>
                </div>
              </div>
              <div className="funfact_one at-home5-hero">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex">
                    <li>
                      <div className="timer">500</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className="home5-hero-content position-relative text-center">
            <div
              className="iconbox-small1 d-none d-xl-block wow fadeInRight default-box-shadow4 bounce-x animate-up-1 animated"
              style={{ visibility: "visible", animationName: "bounceX" }}
            >
              <span className="icon flaticon-review" />
              <div className="details">
                <h6 className="mb-1">4.9/5</h6>
                <p className="text fz13 mb-0">Clients rate professionals</p>
              </div>
            </div>
            <div
              className="iconbox-small2 d-none d-xl-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2 animated"
              style={{ visibility: "visible", animationName: "bounceY" }}
            >
              <span className="icon flaticon-review" />
              <div className="details">
                <h6 className="mb-1">+12M</h6>
                <p className="text fz13 mb-0">Project Completed</p>
              </div>
            </div>
            <img
              src="images/about/happy-client.png"
              alt=""
              className="bounce-y img-1 default-box-shadow4"
            />
            <img
              src="images/about/home5-hero-element-1.png"
              alt=""
              className="animate-up-1"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Partners */}
  <section className="our-partners bgc-thm2 pt70 pb40 cta-home5-style ml30 ml0-lg">
    <div className="container">
      <div
        className="row wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-12">
          <div className="main-title text-center">
            <h6 className="text-white">The world's top brands trust us</h6>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/7.png"
              alt="7.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/8.png"
              alt="8.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/9.png"
              alt="9.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/10.png"
              alt="10.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/11.png"
              alt="11.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/12.png"
              alt="12.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Talent by category */}
  <section className="pb40-md">
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
          <div className="text-start text-lg-end mb-4 mb-lg-2">
            <a className="ud-btn2" href="page-service-v1.html">
              All Categories
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-12">
          <div
            className="category-slider-home10 navi_pagi_bottom_center slider-7-grid owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1144px, 0px, 0px)",
                  transition: "all",
                  width: 4119
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-translator" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Writing &amp; Translation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-microphone" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Music &amp; Audio</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-video-file" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Video &amp; Animation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-ruler" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">
                          Engineering &amp; Architecture
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-goal" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Finance &amp; Accounting</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 default-box-shadow1">
                      <div className="icon">
                        <span className="flaticon-developer" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Development &amp; IT</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-web-design-1" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Creative &amp; Design </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-digital-marketing" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Digital Marketing</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-translator" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Writing &amp; Translation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-microphone" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Music &amp; Audio</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-video-file" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Video &amp; Animation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-ruler" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">
                          Engineering &amp; Architecture
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-goal" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Finance &amp; Accounting</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 default-box-shadow1">
                      <div className="icon">
                        <span className="flaticon-developer" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Development &amp; IT</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-web-design-1" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Creative &amp; Design </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-digital-marketing" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Digital Marketing</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-translator" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Writing &amp; Translation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "200.8px", marginRight: 28 }}
                >
                  <div className="item">
                    <div className="iconbox-style1 bdr1 mb60">
                      <div className="icon">
                        <span className="flaticon-microphone" />
                      </div>
                      <div className="details mt20">
                        <p className="text mb5">1.800 skills</p>
                        <h5 className="title">Music &amp; Audio</h5>
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
  {/* Need something */}
  <section className="our-features pt-0 pb90 pb30-md">
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
  <section className="pt-0">
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-lg-9 wow fadeInUp"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="main-title">
            <h2 className="title">Popular Services</h2>
            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4 mb-lg-3">
            <a className="ud-btn2" href="page-service-v1.html">
              All Services
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div
            className="category-slider-home10 navi_pagi_bottom_center slider-4-grid owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag"
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
                    <div className="listing-style1 style4 default-box-shadow1 mb60">
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
  <section className="hover-bgc-color pb90 pb30-md overflow-hidden  cta-home5-style ml30 ml0-lg">
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
            <a href="page-contact.html" className="ud-btn btn-thm2">
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
              <div className="funfact-style1 at-home5 bdrs16 text-center ms-md-auto">
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
              <div className="funfact-style1 at-home5 bdrs16 text-center ms-md-auto">
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
              <div className="funfact-style1 at-home5 bdrs16 text-center">
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
  {/* Our Funfact */}
  <section className="">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6">
          <img
            className="w-100 mb30-md"
            src="images/about/about-7.png"
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <div className="mb30">
            <div className="main-title">
              <h2 className="title">
                Connect with the world's finest{" "}
                <br className="d-none d-xl-block" />
                freelancers for your projects
              </h2>
            </div>
          </div>
          <div className="why-chose-list at-home5">
            <div className="list-one d-flex align-items-start mb30">
              <span className="list-icon flex-shrink-0 flaticon-badge" />
              <div className="list-content flex-grow-1 ml30">
                <h4 className="mb-1">Get quality work done quickly</h4>
                <p className="text mb-0 fz15">
                  Verify a pro's portfolio, client approval, and identity{" "}
                  <br className="d-none d-lg-block" /> verification.
                </p>
              </div>
            </div>
            <div className="list-one d-flex align-items-start mb30">
              <span className="list-icon flex-shrink-0 flaticon-money" />
              <div className="list-content flex-grow-1 ml30">
                <h4 className="mb-1">Zero charges until you hire</h4>
                <p className="text mb-0 fz15">
                  Conduct interviews, discuss rates, and make payments solely{" "}
                  <br className="d-none d-lg-block" /> for work you endorse.
                </p>
              </div>
            </div>
            <div className="list-one d-flex align-items-start mb30">
              <span className="list-icon flex-shrink-0 flaticon-security" />
              <div className="list-content flex-grow-1 ml30">
                <h4 className="mb-1">Protected and well-secured</h4>
                <p className="text mb-0 fz15">
                  Stay focused on your tasks, knowing that we safeguard your
                  data and privacy, with 24/7 customer support at your service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Funfact */}
  <section className="bgc-thm3 pb90 pb30-md">
    <div
      className="container wow fadeInUp"
      data-wow-delay="300ms"
      style={{
        visibility: "hidden",
        animationDelay: "300ms",
        animationName: "none"
      }}
    >
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="main-title text-center">
            <h2 className="title">Taskhub Achievements</h2>
            <p className="paragraph mt10">
              Numquam acorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 col-md-3">
          <div className="funfact_one at-home5 mb30 text-center">
            <div className="icon mb10">
              <span className="flaticon-working" />
            </div>
            <div className="details">
              <ul className="ps-0 mb-2 d-flex justify-content-center">
                <li>
                  <div className="timer">850</div>
                </li>
                <li>
                  <span>M</span>
                </li>
              </ul>
              <p className="text mb-0">Total Freelancer</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="funfact_one at-home5 mb30 text-center">
            <div className="icon mb10">
              <span className="flaticon-star-2" />
            </div>
            <div className="details">
              <ul className="ps-0 mb-2 d-flex justify-content-center">
                <li>
                  <div className="timer">722</div>
                </li>
                <li>
                  <span>M</span>
                </li>
              </ul>
              <p className="text mb-0">Positive Review</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="funfact_one at-home5 mb30 text-center">
            <div className="icon mb10">
              <span className="flaticon-file" />
            </div>
            <div className="details">
              <ul className="ps-0 mb-2 d-flex justify-content-center">
                <li>
                  <div className="timer">90</div>
                </li>
                <li>
                  <span>M</span>
                </li>
              </ul>
              <p className="text mb-0">Order recieved</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="funfact_one at-home5 mb30 text-center">
            <div className="icon mb10">
              <span className="flaticon-rocket-1" />
            </div>
            <div className="details">
              <ul className="ps-0 mb-2 d-flex justify-content-center">
                <li>
                  <div className="timer">500</div>
                </li>
                <li>
                  <span>M</span>
                </li>
              </ul>
              <p className="text mb-0">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Testimonials */}
  <section className="our-testimonial">
    <div
      className="container wow fadeInUp"
      data-wow-delay="300ms"
      style={{
        visibility: "hidden",
        animationDelay: "300ms",
        animationName: "none"
      }}
    >
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="main-title text-center">
            <h2 className="title">What our clients have to say</h2>
            <p className="paragraph mt10">
              Discover your perfect program in our courses.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-10 mx-auto">
          <div className="home2_testimonial_tabs position-relative">
            <div className="tab-content" id="pills-tabContent2">
              <div
                className="tab-pane fade"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="testimonial-style2 at-about2 text-center">
                  <div className="testi-content text-center">
                    <span className="icon fas fa-quote-left" />
                    <h4 className="testi-text">
                      "The user enjoyed staying at a hotel near a bullet train
                      station in Japan that they booked through Agoda at a great
                      price. Japan that they booked through Agoda at a great
                      pric"
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="testimonial-style2 at-about2 text-center">
                  <div className="testi-content text-center">
                    <span className="icon fas fa-quote-left" />
                    <h4 className="testi-text">
                      "The user enjoyed staying at a hotel near a bullet train
                      station in Japan that they booked through Agoda at a great
                      price. Japan that they booked through Agoda at a great
                      pric"
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="testimonial-style2 at-about2 text-center">
                  <div className="testi-content text-center">
                    <span className="icon fas fa-quote-left" />
                    <h4 className="testi-text">
                      "The user enjoyed staying at a hotel near a bullet train
                      station in Japan that they booked through Agoda at a great
                      price. Japan that they booked through Agoda at a great
                      pric"
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="nav justify-content-center"
              id="pills-tab2"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <div className="thumb d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="images/testimonials/1.jpg"
                      alt="1.jpg"
                    />
                    <h6 className="title ml30 ml15-xl mb-0">
                      Albert Cole
                      <br />
                      <small>Designer</small>
                    </h6>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <div className="thumb d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="images/testimonials/2.jpg"
                      alt="2.jpg"
                    />
                    <h6 className="title ml30 ml15-xl mb-0">
                      Alison Dawn
                      <br />
                      <small>WP Developer</small>
                    </h6>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <div className="thumb d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="images/testimonials/3.jpg"
                      alt="3.jpg"
                    />
                    <h6 className="title ml30 ml15-xl mb-0">
                      Daniel Parker
                      <br />
                      <small>Front-end Developer</small>
                    </h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our CTA */}
  <section className="cta-home8 pt90 pt60-md pb90 pb60-md cta-home5-style ml30 ml0-lg">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="cta-img-home8">
            <img className="w-100" src="images/about/mobile-app.png" alt="" />
          </div>
        </div>
        <div className="col-lg-7 col-xl-4 offset-xl-1">
          <div
            className="cta-style5 wow fadeInUp"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <span className="app-tag mb25">Start today</span>
            <h2 className="cta-title mb15">Download the App</h2>
            <p className="cta-text mb60">
              Discover on-the-go learning with the Realton app. Stream or
              download classes, whether you're on a plane, subway, or anywhere
              you like.
            </p>
            <div className="app-widget at-home6">
              <div className="row d-flex align-items-center">
                <div className="col-auto">
                  <a href="">
                    <div className="app-info mb-1 light-style d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <i className="fab fa-apple fz30 text-white" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="app-text fz12 mb0">Download on the</p>
                        <h6 className="app-title mb-0 text-white fz15">
                          Apple Store
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="">
                    <div className="app-info mb-1 light-style d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <i className="fab fa-google-play fz24 text-white" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="app-text fz12 mb0">Get in on</p>
                        <h6 className="app-title mb-0 text-white fz15">
                          Google Play
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Latest Blog */}
  <section className="pb90 pb30-md">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        data-wow-delay="00ms"
        style={{
          visibility: "hidden",
          animationDelay: "0ms",
          animationName: "none"
        }}
      >
        <div className="col-lg-9">
          <div className="main-title">
            <h2 className="title">Our Latest Blog</h2>
            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4 mb-lg-2">
            <a className="ud-btn2" href="page-blog-v1.html">
              All Categories
              <i className="fal fa-arrow-right-long" />
            </a>
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
          <div className="blog-style1 bdr1 at-home5 overflow-hidden">
            <div className="blog-img">
              <img className="w-100" src="images/blog/blog-1.jpg" alt="" />
            </div>
            <div className="blog-content">
              <a className="date" href="#">
                September 2, 2024
              </a>
              <h4 className="title mt-1">
                <a href="page-blog-single.html">
                  Enjoy working from home online business.
                </a>
              </h4>
              <p className="text mb-0">
                Lorem ipsum dolor sit amet adipisicing elit. Tempore, online
                business qui.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="blog-style1 bdr1 at-home5 overflow-hidden">
            <div className="blog-img">
              <img className="w-100" src="images/blog/blog-2.jpg" alt="" />
            </div>
            <div className="blog-content">
              <a className="date" href="#">
                September 2, 2024
              </a>
              <h4 className="title mt-1">
                <a href="page-blog-single.html">
                  Front recognized as an official FB Marketing Partner
                </a>
              </h4>
              <p className="text mb-0">
                Lorem ipsum dolor sit amet adipisicing elit. Tempore, online
                business qui.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="blog-style1 bdr1 at-home5 overflow-hidden">
            <div className="blog-img">
              <img className="w-100" src="images/blog/blog-3.jpg" alt="" />
            </div>
            <div className="blog-content">
              <a className="date" href="#">
                September 2, 2024
              </a>
              <h4 className="title mt-1">
                <a href="page-blog-single.html">
                  Fostering continuous professional development.
                </a>
              </h4>
              <p className="text mb-0">
                Lorem ipsum dolor sit amet adipisicing elit. Tempore, online
                business qui.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="blog-style1 bdr1 at-home5 overflow-hidden">
            <div className="blog-img">
              <img className="w-100" src="images/blog/blog-4.jpg" alt="" />
            </div>
            <div className="blog-content">
              <a className="date" href="#">
                September 2, 2024
              </a>
              <h4 className="title mt-1">
                <a href="page-blog-single.html">
                  Taskhub's 2024 Impact: Innovating Amid Uncertainty.
                </a>
              </h4>
              <p className="text mb-0">
                Lorem ipsum dolor sit amet adipisicing elit. Tempore, online
                business qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer */}
  <section className="footer-style1 at-home5 pt25 pb-0">
    <div className="container">
      <div className="row bdrb1 pb10 mb60">
        <div className="col-md-7">
          <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
            <a className="fz17 fw500 mr15-md mr30" href="">
              Terms of Service
            </a>
            <a className="fz17 fw500 mr15-md mr30" href="">
              Privacy Policy
            </a>
            <a className="fz17 fw500" href="">
              Site Map
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="social-widget text-center text-md-end">
            <div className="social-style1 light-style2">
              <a className="me-2 fw500 fz17" href="#">
                Follow us:
              </a>
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
          <div className="link-style1 light-style at-home8 mb-4 mb-sm-5">
            <h5 className="mb15">About</h5>
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
          <div className="link-style1 light-style at-home8 mb-4 mb-sm-5">
            <h5 className="mb15">Categories</h5>
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
          <div className="link-style1 light-style at-home8 mb-4 mb-sm-5">
            <h5 className="mb15">Support</h5>
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
                <h5 className="title mb20">Subscribe</h5>
                <div className="mailchimp-style1 at-home7">
                  <input
                    type="email"
                    className="form-control bg-white"
                    placeholder="Your email address"
                  />
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
            <div className="app-widget mb-4 mb-sm-5">
              <h5 className="title mb20">Apps</h5>
              <div className="row mb-4 mb-lg-5">
                <div className="col-lg-12">
                  <a
                    className="app-list light-style d-flex align-items-center mb10"
                    href=""
                  >
                    <i className="fab fa-apple fz17 mr15" />
                    <h6 className="app-title fz15 fw400 mb-0">iOS App</h6>
                  </a>
                  <a
                    className="app-list light-style d-flex align-items-center"
                    href=""
                  >
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
    <div className="container bdrt1 py-4">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text mb-2 mb-md0 text-dark-light ff-heading">
              © 2024 Themebracket. All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footer_bottom_right_btns at-home8 text-center text-lg-end">
            <ul className="p-0 m-0">
              <li className="list-inline-item bg-white">
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
              <li className="list-inline-item bg-white">
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

export default Home_v5