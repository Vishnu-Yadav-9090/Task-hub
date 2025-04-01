import React from 'react'

const About_v1 = () => {
  return (
    <>
     <div className="body_content">
  {/* About Section Area */}
  <section className="our-about pb90">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 col-md-3">
          <div className="position-relative mb30" style={{ height: 283 }}>
            <img
              className="w100 h-100"
              style={{ objectFit: "cover" }}
              src="images/about/about-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="position-relative mb30" style={{ height: 405 }}>
            <img
              className="w100 h-100"
              style={{ objectFit: "cover" }}
              src="images/about/about-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="position-relative mb30" style={{ height: 283 }}>
            <img
              className="w100 h-100"
              style={{ objectFit: "cover" }}
              src="images/about/about-3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="position-relative mb30" style={{ height: 405 }}>
            <img
              className="w100 h-100"
              style={{ objectFit: "cover" }}
              src="images/about/about-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section Area */}
  <section className="our-about pb90 pt0">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="main-title">
            <h2>
              Become part of the world's finest{" "}
              <br className="d-none d-lg-block" /> worker marketplace.
            </h2>
          </div>
        </div>
        <div className="col-lg-6">
          <p className="text mb20">
            Readable when looking at its layout. content of a page when looking
            at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable.
          </p>
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
          <a href="#" className="ud-btn btn-thm-border mb25 me-4">
            Get Started
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Banner */}
  <section className="p-0">
    <div className="cta-banner3 hover-bgc-color mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 wow fadeInRight"
            data-wow-delay="500ms"
            style={{
              visibility: "hidden",
              animationDelay: "500ms",
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
      <div className="row">
        <div className="col-xl-11 mx-auto">
          <div className="row justify-content-center" data-wow-delay="300ms">
            <div className="col-6 col-md-3">
              <div className="funfact_one text-center">
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
              <div className="funfact_one text-center">
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
              <div className="funfact_one text-center">
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
              <div className="funfact_one text-center">
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
                <div className="testi-content text-center">
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
                <div className="testi-content text-center">
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
                <div className="testi-content text-center">
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
                <div className="testi-content text-center">
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
                <div className="testi-content text-center">
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
                className="nav nav-pills justify-content-center"
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
  {/* About Us */}
  <section className="pt0 pb40-md">
    <div className="cta-banner bgc-thm3 mx-auto maxw1700 pt110 pb80 pb30-md bdrs12 position-relative">
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
                Identifying the right talent is vital for business expansion do
                eiusmod
                <br /> tempor incididunt.
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
  {/* Pricing Table Area */}
  <section className="our-pricing pt-0 pb90">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 m-auto wow fadeInUp"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div className="main-title text-center">
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
          <div className="pricing_packages text-center">
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
                <a href="#" className="ud-btn btn-thm-border">
                  Buy Now
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="pricing_packages active text-center">
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
                <a href="#" className="ud-btn btn-thm-border">
                  Buy Now
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="pricing_packages text-center">
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
                <a href="#" className="ud-btn btn-thm-border">
                  Buy Now
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="pricing_packages text-center">
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
                <a href="#" className="ud-btn btn-thm-border">
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
  {/* Our Partners */}
  <section className="our-partners pt0 pb150">
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
        <div className="col-lg-12">
          <div
            className="dots_none nav_none slider-dib-sm slider-6-grid owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag"
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
                  width: 4011
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/3.png"
                        alt="3.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/4.png"
                        alt="4.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/5.png"
                        alt="5.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/6.png"
                        alt="6.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/1.png"
                        alt="1.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/2.png"
                        alt="2.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/3.png"
                        alt="3.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/4.png"
                        alt="4.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/5.png"
                        alt="5.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/6.png"
                        alt="6.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/1.png"
                        alt="1.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/2.png"
                        alt="2.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/3.png"
                        alt="3.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "256.5px", marginRight: 30 }}
                >
                  <div className="item">
                    <div className="partner_item">
                      <img
                        className="wa m-auto"
                        src="images/partners/4.png"
                        alt="4.png"
                      />
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
                  <a
                    className="app-list d-flex align-items-center mb10"
                    href="#"
                  >
                    <i className="fab fa-apple fz17 mr15" />
                    <h6 className="app-title fz15 fw400 mb-0">iOS App</h6>
                  </a>
                  <a className="app-list d-flex align-items-center" href="#">
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

export default About_v1