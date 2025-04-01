import React from 'react'

const Home_v8 = () => {
  return (
    <>
     <div className="body_content">
  {/* Home Banner Style V1 */}
  <section className="hero-home8 p-0 space-maintain-1">
    <div className="home8-hero-img d-none d-xl-block">
      <img
        src="images/about/home8-hero-1.jpg"
        alt=""
        className="animate-up-1"
      />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-7">
          <h1 className="animate-up-1 text-white">
            On-Demand Expertise for <br className="d-none d-lg-block" />
            Your Business
          </h1>
          <p className="animate-up-2 text-white ff-heading mb30">
            Taskhub.com empowers millions to transform ideas into reality.
          </p>
          <div className="advance-search-tab bgc-white bdrs4 p10 position-relative zi1 animate-up-3">
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
                        <h6 className="fz14 ml30 mt25 mb-3">Popular Search</h6>
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
                                <div className="item_title">mobile legends</div>
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
                    className="ud-btn btn-thm bdrs4 bdrs4-sm w-100"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="animate-up-2 text-white ff-heading mt30 mb15">
            Popular Searches:
          </p>
          <div className="home9-tags d-md-flex align-items-center animate-up-4">
            <a className="bdrs60 mb-2 mb-md-0" href="">
              Designer
            </a>
            <a className="bdrs60 mb-2 mb-md-0" href="">
              Developer
            </a>
            <a className="bdrs60 mb-2 mb-md-0" href="">
              Web
            </a>
            <a className="bdrs60 mb-2 mb-md-0" href="">
              IOS
            </a>
            <a className="bdrs60 mb-2 mb-md-0" href="">
              PHP
            </a>
            <a className="bdrs60 mb-2 mb-md-0" href="">
              Senior
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Explore talent by category */}
  <section className="pb40-md pb90 mt50 mt0-lg">
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
          <div className="iconbox-style1 bdr1">
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
          <div className="iconbox-style1 bdr1">
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
          <div className="iconbox-style1 bdr1">
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
          <div className="iconbox-style1 bdr1">
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
          <div className="iconbox-style1 bdr1">
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
          <div className="iconbox-style1 bdr1">
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
          <div className="iconbox-style1 bdr1">
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
          <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
                    <div className="iconbox-style1 bdr1">
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
    <div className="cta-banner hover-bgc-color mx-auto maxw1700 pt110 pb80 pb30-md position-relative">
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
                  <div className="skill-tags d-flex align-items-center justify-content-center mb20">
                    <span className="tag">Figma</span>
                    <span className="tag mx10">Sketch</span>
                    <span className="tag">HTML5</span>
                  </div>
                  <hr className="opacity-100" />
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
                Endorsed by top freelancers <br />
                worldwide
              </h2>
              <p className="text mb25 mb30-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias odit nam commodi similique ad modi, eligendi facere
                rem.
              </p>
              <div className="list-style3 mb40 mb30-md">
                <ul>
                  <li>
                    <i className="far fa-check text-white bgc-thm" />
                    The most recent education completed was a Computer's degree
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-thm" />
                    Bringing over 15+ years of experience to the table
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-thm" />
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
  {/* Popular Services */}
  <section className="pt-0">
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
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="navi_pagi_top_right slider-4-grid owl-carousel owl-theme owl-loaded owl-drag">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
                    <div className="listing-style1 style5">
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
                      <div className="list-content px-0">
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
          <div className="text-center mt20">
            <a className="ud-btn2" href="page-service-single.html">
              All Categories
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Banner */}
  <section className="cta-banner-about2 at-home8 mx-auto maxw1700 position-relative pt60-md pb60-md p-0">
    <img className="home8-cta-img" src="images/about/about-home-8.jpg" alt="" />
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7 wow fadeInLeft"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="mb30">
            <div className="main-title">
              <h2 className="title">
                Connect with the world's finest{" "}
                <br className="d-none d-xl-block" />
                freelancers for your projects
              </h2>
            </div>
          </div>
          <div className="why-chose-list pr60 pr0-lg">
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
            <div className="list-one d-flex align-items-start">
              <span className="list-icon flex-shrink-0 flaticon-security" />
              <div className="list-content flex-grow-1 ml20">
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
  <section className="cta-banner-about2 at-home8-2 mx-auto maxw1700 position-relative pt60-md pb60-md p-0">
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-md-6 col-xl-5 wow fadeInLeft"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="testimonial-slider-home8 navi_pagi_bottom_left dots_nav_light slider-1-grid owl-theme owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-962px, 0px, 0px)",
                  transition: "all",
                  width: 3367
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: 451, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style4 position-relative ps-0">
                      <h2 className="sub-title text-thm mb25">Template</h2>
                      <h4 className="title mb35 text-white mb60 mb30-md">
                        “ I have used Taskhub numerous times for several
                        different companies. I have always had great
                        experiences. I once tried using someone else and I ended
                        up having to cancel the order and move back to Taskhub.
                        ”
                      </h4>
                      <div className="d-flex align-items-center mb30 mb0-sm">
                        <img
                          className="wa"
                          src="images/testimonials/testi-new-thumb.png"
                          alt=""
                        />
                        <div className="d-details ml15">
                          <h6 className="author fz14 text-white">
                            Henry Courtney{" "}
                          </h6>
                          <p className="desig mb-0 text-white">
                            Product Manager | Template
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 451, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style4 position-relative ps-0">
                      <h2 className="sub-title text-thm mb25">Template</h2>
                      <h4 className="title mb35 text-white mb60 mb30-md">
                        “ I have used Taskhub numerous times for several
                        different companies. I have always had great
                        experiences. I once tried using someone else and I ended
                        up having to cancel the order and move back to Taskhub.
                        ”
                      </h4>
                      <div className="d-flex align-items-center mb30 mb0-sm">
                        <img
                          className="wa"
                          src="images/testimonials/testi-new-thumb.png"
                          alt=""
                        />
                        <div className="d-details ml15">
                          <h6 className="author fz14 text-white">
                            Angelica Pan
                          </h6>
                          <p className="desig mb-0 text-white">
                            Product Manager, Apple Inc
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 451, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style4 position-relative ps-0">
                      <h2 className="sub-title text-thm mb25">Template</h2>
                      <h4 className="title text-white mb60 mb30-md">
                        “ I have used Taskhub numerous times for several
                        different companies. I have always had great
                        experiences. I once tried using someone else and I ended
                        up having to cancel the order and move back to Taskhub.
                        ”
                      </h4>
                      <div className="d-flex align-items-center mb30 mb0-sm">
                        <img
                          className="wa"
                          src="images/testimonials/testi-new-thumb.png"
                          alt=""
                        />
                        <div className="d-details ml15">
                          <h6 className="author fz14 text-white">
                            Angelica Pan
                          </h6>
                          <p className="desig mb-0 text-white">
                            Product Manager, Apple Inc
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: 451, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style4 position-relative ps-0">
                      <h2 className="sub-title text-thm mb25">Template</h2>
                      <h4 className="title mb35 text-white mb60 mb30-md">
                        “ I have used Taskhub numerous times for several
                        different companies. I have always had great
                        experiences. I once tried using someone else and I ended
                        up having to cancel the order and move back to Taskhub.
                        ”
                      </h4>
                      <div className="d-flex align-items-center mb30 mb0-sm">
                        <img
                          className="wa"
                          src="images/testimonials/testi-new-thumb.png"
                          alt=""
                        />
                        <div className="d-details ml15">
                          <h6 className="author fz14 text-white">
                            Henry Courtney{" "}
                          </h6>
                          <p className="desig mb-0 text-white">
                            Product Manager | Template
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: 451, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style4 position-relative ps-0">
                      <h2 className="sub-title text-thm mb25">Template</h2>
                      <h4 className="title mb35 text-white mb60 mb30-md">
                        “ I have used Taskhub numerous times for several
                        different companies. I have always had great
                        experiences. I once tried using someone else and I ended
                        up having to cancel the order and move back to Taskhub.
                        ”
                      </h4>
                      <div className="d-flex align-items-center mb30 mb0-sm">
                        <img
                          className="wa"
                          src="images/testimonials/testi-new-thumb.png"
                          alt=""
                        />
                        <div className="d-details ml15">
                          <h6 className="author fz14 text-white">
                            Angelica Pan
                          </h6>
                          <p className="desig mb-0 text-white">
                            Product Manager, Apple Inc
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 451, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style4 position-relative ps-0">
                      <h2 className="sub-title text-thm mb25">Template</h2>
                      <h4 className="title text-white mb60 mb30-md">
                        “ I have used Taskhub numerous times for several
                        different companies. I have always had great
                        experiences. I once tried using someone else and I ended
                        up having to cancel the order and move back to Taskhub.
                        ”
                      </h4>
                      <div className="d-flex align-items-center mb30 mb0-sm">
                        <img
                          className="wa"
                          src="images/testimonials/testi-new-thumb.png"
                          alt=""
                        />
                        <div className="d-details ml15">
                          <h6 className="author fz14 text-white">
                            Angelica Pan
                          </h6>
                          <p className="desig mb-0 text-white">
                            Product Manager, Apple Inc
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 451, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="testimonial-style4 position-relative ps-0">
                      <h2 className="sub-title text-thm mb25">Template</h2>
                      <h4 className="title mb35 text-white mb60 mb30-md">
                        “ I have used Taskhub numerous times for several
                        different companies. I have always had great
                        experiences. I once tried using someone else and I ended
                        up having to cancel the order and move back to Taskhub.
                        ”
                      </h4>
                      <div className="d-flex align-items-center mb30 mb0-sm">
                        <img
                          className="wa"
                          src="images/testimonials/testi-new-thumb.png"
                          alt=""
                        />
                        <div className="d-details ml15">
                          <h6 className="author fz14 text-white">
                            Henry Courtney{" "}
                          </h6>
                          <p className="desig mb-0 text-white">
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
              <button role="button" className="owl-dot">
                <span />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-5 offset-xl-2">
          <div className="video-button-home8 position-relative zi9">
            <div className="d-flex align-items-center justify-content-sm-center">
              <a
                className="popup-iframe popup-youtube fz60 text-white"
                href="https://www.youtube.com/watch?v=kzpJYc6MUzk"
              >
                <i className="fa-light fa-circle-play mr15" />
              </a>
              <span className="fz16 text-white">Watch Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img className="home8-cta-img2" src="images/about/about-11.jpg" alt="" />
  </section>
  {/* Funfact */}
  <section className="pb-0 pt60">
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
  {/* Our Latest Blog */}
  <section className="pb60 pb20-md">
    <div className="container">
      <div
        className="row wow fadeInUp align-items-center"
        style={{ visibility: "hidden", animationName: "none" }}
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
              Browse All
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
          <div className="blog-style1 at-home8">
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
          <div className="blog-style1 at-home8">
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
          <div className="blog-style1 at-home8">
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
          <div className="blog-style1 at-home8">
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
  <section className="our-partners py-0">
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
  {/* Our CTA */}
  <section className="cta-home8 maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt110 mt0-lg bdrs24">
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
          <div className="cta-style5">
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
  {/* Our Footer */}
  <section className="footer-style1 at-home8 pb-0 pt60">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="footer-widget mb-4 mb-lg-5">
            <div className="mailchimp-widget mb90">
              <h6 className="title mb20">Subscribe</h6>
              <div className="mailchimp-style1 at-home8 bdrs4 overflow-hidden">
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
                <div className="link-style1 at-home8 mb-3">
                  <h6 className="mb25">About</h6>
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
              <div className="col-auto">
                <div className="link-style1 at-home8 mb-3">
                  <h6 className="mb25">Categories</h6>
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
              <div className="col-auto">
                <div className="link-style1 at-home8 mb-3">
                  <h6 className=" mb25">Support</h6>
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
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 offset-xl-2">
          <div className="footer-widget mb-4 mb-lg-5">
            <a className="footer-logo" href="index.html">
              <img className="mb40" src="images/header-logo2.svg" alt="" />
            </a>
            <div className="row mb-4 mb-lg-5">
              <div className="col-auto">
                <div className="contact-info">
                  <p className="info-title mb-2">Toll Free Customer Care</p>
                  <h5 className="info-phone">
                    <a className="" href="">
                      +(0) 321 456 7890
                    </a>
                  </h5>
                </div>
              </div>
              <div className="col-auto">
                <div className="contact-info">
                  <p className="info-title mb-2">Need live support?</p>
                  <h5 className="info-mail">
                    <a className="" href="mailto:hi@abcd.com">
                      hi@abcd.com
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="app-widget at-home8">
              <h5 className="title  mb20">Apps</h5>
              <div className="row mb-4 mb-lg-5">
                <div className="col-auto">
                  <a href="">
                    <div className="app-info d-flex align-items-center mb10 bdrs4 bgc-thm3">
                      <div className="flex-shrink-0">
                        <i className="fab fa-apple fz30" />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <p className="app-text fz13 mb0">Download on the</p>
                        <h6 className="app-title">Apple Store</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="">
                    <div className="app-info d-flex align-items-center mb10 bdrs4 bgc-thm3">
                      <div className="flex-shrink-0">
                        <i className="fab fa-google-play fz30" />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <p className="app-text mb0">Get in on</p>
                        <h6 className="app-title">Google Play</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="social-widget">
              <h5 className="mb20">Follow us:</h5>
              <div className="social-style1 light-style">
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
    <div className="container bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text mb-0 at-home8 ff-heading">
              © 2024 Themebracket. All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="footer_bottom_right_btns at-home8 text-center text-lg-end">
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

export default Home_v8