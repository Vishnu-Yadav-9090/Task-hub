import React from 'react'

const Help = () => {
  return (
    <>
     <div className="body_content">
  {/* FAQ Section Area */}
  <section className="our-faq pb50">
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
            <h2 className="title">How can we help you?</h2>
            <p className="paragraph mt10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus illo.
            </p>
            <div className="search_widgets mt30">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <div className="help_search_btn">
                  <button type="submit" className="btn search-btn">
                    <span className="far fa-magnifying-glass" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-3">
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
        <div className="col-sm-6 col-xl-3">
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
        <div className="col-sm-6 col-xl-3">
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
        <div className="col-sm-6 col-xl-3">
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
        <div className="col-sm-6 col-xl-3">
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
        <div className="col-sm-6 col-xl-3">
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
        <div className="col-sm-6 col-xl-3">
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
        <div className="col-sm-6 col-xl-3">
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
      <div className="row mt90">
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
              Numquam acorem ipsum dolor sit amet, consectetur.
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

export default Help