import React from 'react'
import './Home.css'

const Home_v1 = () => {
  return (
    <>
     <div className="body_content">
  {/* Home Banner Style V1 */}
  <section className="home-one p-0 space-maintain-1 bg-overlay">
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-banner-wrapper home1_style">
            <div className="banner-style-one dots_none nav_none owl-theme owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-2702px, 0px, 0px)",
                    transition: "all",
                    width: 8106
                  }}
                >
                  <div className="owl-item cloned" style={{ width: 1351 }}>
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                  <div className="owl-item cloned" style={{ width: 1351 }}>
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                  <div className="owl-item active" style={{ width: 1351 }}>
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                  <div className="owl-item" style={{ width: 1351 }}>
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                  <div className="owl-item cloned" style={{ width: 1351 }}>
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                  <div className="owl-item cloned" style={{ width: 1351 }}>
                    <div
                      className="slide slide-one"
                      style={{ backgroundImage: "url(images/home/home-1.jpg)" }}
                    />
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
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
            <div className="carousel-btn-block banner-carousel-btn">
              <span className="carousel-btn left-btn">
                <i className="fas fa-chevron-left left" />
              </span>
              <span className="carousel-btn right-btn">
                <i className="fas fa-chevron-right right" />
              </span>
            </div>
            {/* /.carousel-btn-block banner-carousel-btn */}
          </div>
          {/* /.main-banner-wrapper */}
        </div>
      </div>
    </div>
    <div className="home1-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-xxl-7">
            <div className="position-relative">
              <h3 className="banner-title">
                Easily find and hire the finest freelancers for any online job.
              </h3>
              <p className="banner-text text-white ff-heading mb25">
                Taskhub.com empowers millions to transform ideas into reality.
              </p>
              <div className="advance-search-tab bgc-white bgct-sm p10 p0-md bdrs4 banner-btn position-relative zi9">
                <div className="row">
                  <div className="col-md-5 col-lg-6 col-xl-6">
                    <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
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

                  <div className="col-md-4 col-lg-4 col-xl-4 d-none d-md-block">
                    <div className="bselect-style1">
                      <div
                        className="dropdown bootstrap-select"
                        style={{ width: "100%" }}
                      >
                        <select className="selectpicker" data-width="100%">
                          <option>Select Role</option>
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
                          title="Select Role"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Select Role
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
                  <div className="col-md-3 col-lg-2 col-xl-2 ps-md-0">
                    <div className="text-center text-xl-end">
                      <button
                        className="ud-btn btn-thm w-100 px-4"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-flex mt30 banner-text">
                <p className="hero-text fz15 me-2 text-white mb-0">
                  Popular Searches:
                </p>
                <a className="text-white" href="#">
                  {" "}
                  Website Design,{" "}
                </a>
                <a className="text-white" href="#">
                  {" "}
                  WordPress,{" "}
                </a>
                <a className="text-white" href="#">
                  {" "}
                  Logo Design,{" "}
                </a>
                <a className="text-white" href="#">
                  {" "}
                  AI Services,{" "}
                </a>
                <a className="text-white" href="#">
                  {" "}
                  Digital Marketing{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Explore talent by category */}
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
          <div className="text-start text-lg-end mb-4 mb-lg-2">
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
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-developer" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Development &amp; IT</h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-web-design-1" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Creative &amp; Design </h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-digital-marketing" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Digital Marketing</h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-translator" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Writing &amp; Translation</h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-microphone" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Music &amp; Audio</h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-video-file" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Video &amp; Animation</h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-ruler" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Engineering &amp; Architecture</h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style1">
            <div className="icon">
              <span className="flaticon-goal" />
            </div>
            <div className="details mt20">
              <p className="text mb5">1.800 skills</p>
              <h4 className="title">Finance &amp; Accounting</h4>
              <p className="mb-0">
                Software Engineer, Master of Web and Mobile Development, and
                More
              </p>
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
  {/* Popular Services */}
  <section className="pb90 pb30-md bgc-thm3">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-9">
          <div className="main-title">
            <h2 className="title">Popular Services</h2>
            <p className="paragraph">
              Highly popular and best-selling services of all time.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4 mb-lg-2">
            <a className="ud-btn2" href="page-service-single.html">
              All Categories
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="slider-outer-dib vam_nav_style dots_none slider-4-grid2 owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag"
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
                <i className="far fa-chevron-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="far fa-chevron-right" />
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
  <section className="our-features pb90">
    <div
      className="container wow fadeInUp"
      style={{ visibility: "hidden", animationName: "none" }}
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title text-center">
            <h2>Require assistance?</h2>
            <p className="text">
              Highly popular and best-selling services of all time.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 border-less p-0">
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
          <div className="iconbox-style1 border-less p-0">
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
          <div className="iconbox-style1 border-less p-0">
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
          <div className="iconbox-style1 border-less p-0">
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
  {/* CTA Banner */}
  <section className="p-0">
    <div className="cta-banner3 bgc-light-yellow mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 wow fadeInRight"
            data-wow-delay="300ms"
            style={{
              visibility: "hidden",
              animationDelay: "300ms",
              animationName: "none"
            }}
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
  {/* Funfact */}
  <section className="pb0 pt60">
    <div className="container maxw1600 bdrb1 pb60">
      <div
        className="row justify-content-center wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "hidden",
          animationDelay: "300ms",
          animationName: "none"
        }}
      >
        <div className="col-6 col-md-3">
          <div className="funfact_one mb20-sm text-center">
            <div className="details">
              <ul className="ps-0 mb-0 d-flex justify-content-center">
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
          <div className="funfact_one mb20-sm text-center">
            <div className="details">
              <ul className="ps-0 mb-0 d-flex justify-content-center">
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
          <div className="funfact_one mb20-sm text-center">
            <div className="details">
              <ul className="ps-0 mb-0 d-flex justify-content-center">
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
          <div className="funfact_one mb20-sm text-center">
            <div className="details">
              <ul className="ps-0 mb-0 d-flex justify-content-center">
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
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 mx-auto wow fadeInUp"
          data-wow-delay="300ms"
          style={{
            visibility: "hidden",
            animationDelay: "300ms",
            animationName: "none"
          }}
        >
          <div className="main-title text-center">
            <h2>Testimonials</h2>
            <p className="paragraph">
              Interdum et malesuada fames ac ante ipsum
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-8 m-auto wow fadeInUp"
          data-wow-delay="500ms"
          style={{
            visibility: "hidden",
            animationDelay: "500ms",
            animationName: "none"
          }}
        >
          <div className="testimonial-style2">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade"
                id="pills-1st"
                role="tabpanel"
                aria-labelledby="pills-1st-tab"
              >
                <div className="testi-content text-md-center">
                  <span className="icon fas fa-quote-left" />
                  <h4 className="testi-text">
                    "The global presence of freelancers on TaskHub is truly
                    thrilling, expanding the diversity of available talent. A
                    standout feature is that TaskHub enables work to progress
                    even while we're asleep, maximizing productivity across time
                    zones."
                  </h4>
                  <h6 className="name">Angelica Pan</h6>
                  <p className="design">Product Manager, Apple Inc</p>
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id="pills-2nd"
                role="tabpanel"
                aria-labelledby="pills-2nd-tab"
              >
                <div className="testi-content text-md-center">
                  <span className="icon fas fa-quote-left" />
                  <h4 className="testi-text">
                    "The global presence of freelancers on TaskHub is truly
                    thrilling, expanding the diversity of available talent. A
                    standout feature is that TaskHub enables work to progress
                    even while we're asleep, maximizing productivity across time
                    zones."
                  </h4>
                  <h6 className="name">Angelica Pan</h6>
                  <p className="design">Product Manager, Apple Inc</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-3rd"
                role="tabpanel"
                aria-labelledby="pills-3rd-tab"
              >
                <div className="testi-content text-md-center">
                  <span className="icon fas fa-quote-left" />
                  <h4 className="testi-text">
                    "The global presence of freelancers on TaskHub is truly
                    thrilling, expanding the diversity of available talent. A
                    standout feature is that TaskHub enables work to progress
                    even while we're asleep, maximizing productivity across time
                    zones."
                  </h4>
                  <h6 className="name">Angelica Pan</h6>
                  <p className="design">Product Manager, Apple Inc</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-4th"
                role="tabpanel"
                aria-labelledby="pills-4th-tab"
              >
                <div className="testi-content text-md-center">
                  <span className="icon fas fa-quote-left" />
                  <h4 className="testi-text">
                    "The global presence of freelancers on TaskHub is truly
                    thrilling, expanding the diversity of available talent. A
                    standout feature is that TaskHub enables work to progress
                    even while we're asleep, maximizing productivity across time
                    zones."
                  </h4>
                  <h6 className="name">Angelica Pan</h6>
                  <p className="design">Product Manager, Apple Inc</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-5th"
                role="tabpanel"
                aria-labelledby="pills-5th-tab"
              >
                <div className="testi-content text-md-center">
                  <span className="icon fas fa-quote-left" />
                  <h4 className="testi-text">
                    "The global presence of freelancers on TaskHub is truly
                    thrilling, expanding the diversity of available talent. A
                    standout feature is that TaskHub enables work to progress
                    even while we're asleep, maximizing productivity across time
                    zones."
                  </h4>
                  <h6 className="name">Angelica Pan</h6>
                  <p className="design">Product Manager, Apple Inc</p>
                </div>
              </div>
            </div>
            <div className="tab-list position-relative">
              <ul
                className="nav nav-pills justify-content-md-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link ps-0"
                    id="pills-1st-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-1st"
                    type="button"
                    role="tab"
                    aria-controls="pills-1st"
                    aria-selected="true"
                  >
                    <img src="images/testimonials/testi-1.jpg" alt="" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-2nd-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-2nd"
                    type="button"
                    role="tab"
                    aria-controls="pills-2nd"
                    aria-selected="false"
                  >
                    <img src="images/testimonials/testi-2.jpg" alt="" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-3rd-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-3rd"
                    type="button"
                    role="tab"
                    aria-controls="pills-3rd"
                    aria-selected="false"
                  >
                    <img src="images/testimonials/testi-3.jpg" alt="" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-4th-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-4th"
                    type="button"
                    role="tab"
                    aria-controls="pills-4th"
                    aria-selected="false"
                  >
                    <img src="images/testimonials/testi-4.jpg" alt="" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link pe-0"
                    id="pills-5th-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-5th"
                    type="button"
                    role="tab"
                    aria-controls="pills-5th"
                    aria-selected="false"
                  >
                    <img src="images/testimonials/testi-5.jpg" alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section Area */}
  <section className="our-about bgc-thm2">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6">
          <div className="position-relative mb30-lg">
            <div
              className="iconbox-small1 at-home1 d-none d-md-block wow fadeInRight"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <span className="icon flaticon-review" />
              <div className="details">
                <h6>4.9/5</h6>
                <p className="text fz13 mb-0">Clients rate professionals</p>
              </div>
            </div>
            <div
              className="iconbox-small2 d-none d-md-block wow fadeInLeft"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <span className="icon flaticon-review" />
              <div className="details">
                <h6>+12M</h6>
                <p className="text fz13 mb-0">Project Completed</p>
              </div>
            </div>
            <div
              className="about-img wow fadeInRight"
              data-wow-delay="300ms"
              style={{
                visibility: "hidden",
                animationDelay: "300ms",
                animationName: "none"
              }}
            >
              <img className="w100" src="images/about/about-1.png" alt="" />
            </div>
            <div
              className="imgbox-1 default-box-shadow1 text-center wow fadeInUp"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img
                className="img-1 bounce-y"
                src="images/about/happy-client.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-xl-5 offset-xl-1">
          <div
            className="position-relative wow fadeInLeft"
            data-wow-delay="300ms"
            style={{
              visibility: "hidden",
              animationDelay: "300ms",
              animationName: "none"
            }}
          >
            <h2 className="text-white mb35">
              Become a part of the premier global{" "}
              <br className="d-none d-lg-block" /> for top-tier freelance
              professionals.
            </h2>
            <p className="text text-white mb35">
              For quite some time, it's been widely acknowledged that a reader's
              focus can be diverted by the coherent content on a page while
              assessing its design. The rationale behind employing Lorem Ipsum
              is that it exhibits a moderately natural arrangement of letters,
              in contrast to the use of phrases like 'Content here, content
              here,' which can give the appearance of readable English.
            </p>
            <div className="list-style2 light-style">
              <ul className="mb30">
                <li>
                  <i className="far fa-check" />
                  Connect with experienced freelancers in the business world
                </li>
                <li>
                  <i className="far fa-check" />
                  Let a Customer Success Manager match you with the ideal talent
                </li>
                <li>
                  <i className="far fa-check" />
                  Unparalleled quality in remote, hybrid, and flexible job
                  opportunities
                </li>
              </ul>
            </div>
            <a href="page-freelancer-v1.html" className="ud-btn btn-thm">
              Find Talent
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Latest Blog */}
  <section className="pb90 pb20-md">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="00ms"
          style={{
            visibility: "hidden",
            animationDelay: "0ms",
            animationName: "none"
          }}
        >
          <div className="main-title">
            <h2 className="title">Our Latest Blog</h2>
            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
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
          <div className="blog-style1">
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
          <div className="blog-style1">
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
          <div className="blog-style1">
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
          <div className="blog-style1">
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
  {/* Our Partners */}
  <section className="our-partners pt0">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-12 wow fadeInUp"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="main-title text-center">
            <h6>The world's top brands trust us</h6>
          </div>
        </div>
      </div>
      <div className="row">
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
  {/* Our CTA */}
  <section className="our-cta bgc-thm4 pt90 pb90 pt60-md pb60-md mt100 mt0-lg">
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
            <img className="w-100" src="images/about/about-3.png" alt="" />
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

export default Home_v1