import React from 'react'

const Home_v4 = () => {
  return (
    <>
     <div className="body_content">
  <section className="categories_list_section overflow-hidden border-0">
    <div className="container bgc-thm3">
      <div className="row">
        <div className="col-lg-12">
          <div className="listings_category_nav_list_menu at-home4">
            <ul className="mb0 d-flex justify-content-center mx-auto ps-0">
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
                <a className="active" href="#">
                  Music &amp; Audio
                </a>
              </li>
              <li>
                <a href="#">Programming &amp; Tech</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Home Banner Style V1 */}
  <section className="hero-home4 pb-0 pt80">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6">
          <div className="pr30 pr0-lg mb30-md position-relative">
            <h1 className="animate-up-1 mb25 text-thm2">
              Recruit top freelancers for <br className="d-none d-xl-block" />
              any job online.
            </h1>
            <p className="text animate-up-2">
              Taskhub.com empowers millions to transform ideas into reality.
            </p>
            <div className="d-flex align-items-center mt30 animate-up-3">
              <a href="page-job-list-v1.html" className="ud-btn btn-thm me-3">
                Find Work
              </a>
              <a
                href="page-freelancer-v1.html"
                className="ud-btn btn-thm-border"
              >
                Find Talent
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className="home5-hero-content position-relative">
            <img
              src="images/about/home4-hero-element-1.jpg"
              alt=""
              className="animate-up-1 bounce-x w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Partners */}
  <section className="our-partners bdrb1 pt70 pb40">
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
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/13.png"
              alt="13.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/14.png"
              alt="14.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/15.png"
              alt="15.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/16.png"
              alt="16.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/17.png"
              alt="17.png"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <div className="partner_item text-center mb30">
            <img
              className="wa m-auto"
              src="images/partners/18.png"
              alt="18.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Need something */}
  <section className="our-features pb90 pb30-md">
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
          <div className="iconbox-style1 at-home4 p-0 text-center">
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
          <div className="iconbox-style1 at-home4 p-0 text-center">
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
          <div className="iconbox-style1 at-home4 p-0 text-center">
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
          <div className="iconbox-style1 at-home4 p-0 text-center">
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
  {/* Explore talent by category */}
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
  {/* Popular Services */}
  <section className="bgc-light-yellow">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
                    <div className="listing-style1 default-box-shadow1 bdrs8">
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
  {/* Latest Jobs */}
  <section className="pb90 pb30-md">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-9">
          <div className="main-title mb50">
            <h2 className="title">Our Newest Jobs</h2>
            <p className="paragraph">
              Recognize your value and seek a job that enriches your life.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4 mb-lg-2">
            <a className="ud-btn2" href="page-job-list-v1.html">
              Browse All
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="job-list-style1 default-box-shadow1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-2.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="job-list-style1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-1.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="job-list-style1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-3.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="job-list-style1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-6.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="job-list-style1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-4.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="job-list-style1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-8.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="job-list-style1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-5.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="job-list-style1 bdrs8 bdr1">
            <div className="d-xl-flex align-items-start">
              <div className="icon d-flex align-items-center mb20">
                <img className="wa" src="images/team/client-7.png" alt="" />
                <span className="fav-icon flaticon-star" />
              </div>
              <div className="details ml20 ml0-xl">
                <h5>Talented Website Designer Needed for Custom Directory </h5>
                <h6 className="mb-3 text-thm">Mailchimp</h6>
                <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">2-7 Days</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Expensive</p>
                <p className="list-inline-item mb-0 bdrl1 pl10">Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Learn With Taskhub */}
  <section className="hover-bgc-color pb90 pb30-md overflow-hidden">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <div className="col-lg-9">
          <div className="main-title">
            <h2 className="title">People find joy in learning with Taskhub</h2>
            <p className="paragraph">
              Numquam acorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="testimonial-style1 default-box-shadow1 position-relative mb60 bdrs8">
            <div className="testimonial-content">
              <h4 className="title text-thm">Great Work</h4>
              <span className="icon fas fa-quote-left" />
              <h4 className="t_content">
                “ The course content was incredibly engaging, and the
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
        <div className="col-sm-6 col-lg-4">
          <div className="testimonial-style1 default-box-shadow1 position-relative mb60 bdrs8">
            <div className="testimonial-content">
              <h4 className="title text-thm">Great Work</h4>
              <span className="icon fas fa-quote-left" />
              <h4 className="t_content">
                “ The course content was incredibly engaging, and the
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
        <div className="col-sm-6 col-lg-4">
          <div className="testimonial-style1 default-box-shadow1 position-relative mb60 bdrs8">
            <div className="testimonial-content">
              <h4 className="title text-thm">Great Work</h4>
              <span className="icon fas fa-quote-left" />
              <h4 className="t_content">
                “ The course content was incredibly engaging, and the
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
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="funfact_one mb30">
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
              <p className="text mb-0">Clients rate professionals on Taskhub</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="funfact_one mb30">
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
          <div className="funfact_one mb30">
            <div className="details">
              <h2>Award winner</h2>
              <p className="text mb-0">Home ownership</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Funfact */}
  <section className="pt150 pt60-lg pb60-lg pb30-md">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6">
          <div className="home4-about-1 position-relative">
            <img
              className="w-100 mb30-md"
              src="images/about/home4-hero-element-1.jpg"
              alt=""
            />
            <img
              src="images/about/happy-client.png"
              alt=""
              className="bounce-x img-1 default-box-shadow4"
            />
            <div
              className="iconbox-small1 d-none d-lg-block wow fadeInRight default-box-shadow4 bounce-x animate-up-1"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <span className="icon flaticon-review" />
              <div className="details">
                <h6 className="mb-1">4.9/5</h6>
                <p className="text fz13 mb-0">Clients rate professionals</p>
              </div>
            </div>
            <div
              className="iconbox-small2 d-none d-lg-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <span className="icon flaticon-review" />
              <div className="details">
                <h6 className="mb-1">+12M</h6>
                <p className="text fz13 mb-0">Project Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5">
          <div className="mb30">
            <div className="mb30">
              <h2 className="title mb30">
                Become part of the world's finest{" "}
                <br className="d-none d-xl-block" />
                worker marketplace.
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                cupiditate cum deserunt. Atque culpa numquam ut tenetur impedit
                ex iure architecto, eos ipsam dolorum, sequi modi voluptatum
                rem, odio sit.
              </p>
            </div>
            <div className="list-style2">
              <ul className="mb25">
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
            <a href="page-contact.html" className="ud-btn btn-thm-border">
              Find Talent <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Latest Blog */}
  <section className="pt20 pb90 pb30-md">
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
  {/* Skills */}
  <section className="pb90 pb30-md pt-0">
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
                    Best skills
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
                    Popular skills
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
  {/* Our CTA */}
  <section className="cta-home4 bgc-thm4 pt90 pt60-md pb90 pb60-md">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-xl-5">
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
        <div
          className="col-lg-5 col-xl-6 offset-xl-1 position-relative wow zoomIn d-none d-lg-block"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="cta-img-home8">
            <img className="w-100" src="images/about/mobile-app-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Footer */}
  <section className="footer-style1 at-home7 pt25 pb-0">
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
                <div className="mailchimp-style1 at-home4">
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

export default Home_v4