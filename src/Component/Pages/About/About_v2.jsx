import React from 'react'

const About_v2 = () => {
  return (
    <>
     <div className="body_content">
  {/* Breadcumb Sections */}
  <section className="breadcumb-section mt40">
    <div className="cta-about-v1 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="position-relative">
              <h2 className="text-white">About</h2>
              <p className="text-white mb30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section Area */}
  <section className="our-about pb0 pt60-lg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 col-xl-6">
          <div
            className="about-img mb30-sm wow fadeInRight"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fadeInRight"
            }}
          >
            <img className="w100" src="images/about/about-1.png" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-xl-5 offset-xl-1">
          <div
            className="position-relative wow fadeInLeft"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fadeInLeft"
            }}
          >
            <h2 className="mb25">
              Become part of the world's finest{" "}
              <br className="d-none d-xl-block" /> worker marketplace.
            </h2>
            <p className="text mb25">
              For quite some time, it's been widely acknowledged that a reader's
              focus can be diverted by the coherent content on a page while
              assessing its design. The rationale behind employing Lorem Ipsum
              is that it exhibits a moderately natural arrangement of letters,
              in contrast to the use of phrases like 'Content here, content
              here,' which can give the appearance of readable English.
            </p>
            <div className="list-style2">
              <ul className="mb20">
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
            <a href="page-freelancer-v1.html" className="ud-btn btn-thm-border">
              Find Talent
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Funfact */}
  <section className="pb0 pt60">
    <div className="container maxw1600 bdrb1 pb60">
      <div
        className="row justify-content-center wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "visible",
          animationDelay: "300ms",
          animationName: "fadeInUp"
        }}
      >
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
  </section>
  {/* CTA Banner */}
  <section className="p-0">
    <div className="cta-banner mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden mx20-lg">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 col-xl-5 pl30-md pl15-xs wow fadeInRight"
            data-wow-delay="500ms"
            style={{
              visibility: "visible",
              animationDelay: "500ms",
              animationName: "fadeInRight"
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
          <div
            className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
            data-wow-delay="500ms"
            style={{
              visibility: "visible",
              animationDelay: "500ms",
              animationName: "fadeInLeft"
            }}
          >
            <div className="about-img" style={{ height: 705 }}>
              <img
                className="w100 h-100"
                style={{ objectFit: "cover", borderRadius: 10 }}
                src="images/about/about-6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Funfact */}
  <section className="bgc-light-yellow pb90 pb30-md overflow-hidden maxw1700 mx-auto bdrs4">
    <img
      className="left-top-img wow zoomIn d-none d-lg-block"
      src="images/vector-img/left-top.png"
      alt=""
      style={{ visibility: "visible", animationName: "zoomIn" }}
    />
    <img
      className="right-bottom-img wow zoomIn d-none d-lg-block"
      src="images/vector-img/right-bottom.png"
      alt=""
      style={{ visibility: "visible", animationName: "zoomIn" }}
    />
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-md-6 col-xl-4 offset-xl-1 wow fadeInRight"
          data-wow-delay="100ms"
          style={{
            visibility: "visible",
            animationDelay: "100ms",
            animationName: "fadeInRight"
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
            <a href="page-contact.html" className="ud-btn btn-thm">
              Get Started <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
        <div
          className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
          data-wow-delay="300ms"
          style={{
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInLeft"
          }}
        >
          <div className="row align-items-center">
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
  {/* Our Testimonials */}
  <section className="our-testimonial">
    <div
      className="container wow fadeInUp"
      data-wow-delay="300ms"
      style={{
        visibility: "visible",
        animationDelay: "300ms",
        animationName: "fadeInUp"
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
                      "Global presence of freelancers on TaskHub is truly
                      thrilling, expanding the diversity of available talent. A
                      standout feature is that TaskHub enables work to progress
                      even while we're asleep, maximizing productivity across
                      time zones."
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
                      "Global presence of freelancers on TaskHub is truly
                      thrilling, expanding the diversity of available talent. A
                      standout feature is that TaskHub enables work to progress
                      even while we're asleep, maximizing productivity across
                      time zones."
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
                      "Global presence of freelancers on TaskHub is truly
                      thrilling, expanding the diversity of available talent. A
                      standout feature is that TaskHub enables work to progress
                      even while we're asleep, maximizing productivity across
                      time zones."
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
  {/* CTA Banner */}
  <section className="cta-banner-about2 mx-auto maxw1700 position-relative mx20-lg pt60-lg pb60-lg">
    <img
      className="cta-about2-img d-none d-xl-block h-75"
      style={{ width: "50%", objectFit: "cover" }}
      src="images/about/about-7.jpg"
      alt=""
    />
    <div className="container">
      <div className="row">
        <div
          className="col-md-11 wow fadeInUp"
          data-wow-delay="200ms"
          style={{
            visibility: "visible",
            animationDelay: "200ms",
            animationName: "fadeInUp"
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
          visibility: "visible",
          animationDelay: "400ms",
          animationName: "fadeInDown"
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
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="main-title text-center">
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="paragraph mt10">
              Numquam acorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "visible",
          animationDelay: "300ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="col-xl-8 mx-auto">
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
  {/* Our Partners */}
  <section className="our-partners pt0 pb90">
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

export default About_v2