import React from 'react'

const Blog_single = () => {
  return (
    <>
     <div className="body_content">
  {/* Blog Section */}
  <section className="breadcumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcumb-style1">
            <div className="breadcumb-list">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Creative &amp; Design </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section Area */}
  <section className="our-blog pt40">
    <div className="container">
      <div
        className="row wow fadeInUp"
        data-wow-delay="100ms"
        style={{
          visibility: "visible",
          animationDelay: "100ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="col-lg-12">
          <h2 className="blog-title">
            Fostering a culture of continuous professional growth
          </h2>
          <div className="blog-single-meta">
            <div className="post-author d-sm-flex align-items-center">
              <img className="mr10" src="images/blog/author-1.png" alt="" />
              <a className="pr15 body-light-color" href="#">
                Alexander Doe
              </a>
              <a className="ml15 pr15 body-light-color" href="#">
                Business
              </a>
              <a className="ml15 body-light-color" href="#">
                September 2, 2024
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="mx-auto maxw1600 mt60 wow fadeInUp"
      data-wow-delay="300ms"
      style={{
        visibility: "visible",
        animationDelay: "300ms",
        animationName: "fadeInUp"
      }}
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="large-thumb">
            <img
              className="w-100 bdrs16"
              src="images/blog/blog-single-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div
        className="roww wow fadeInUp"
        data-wow-delay="500ms"
        style={{
          visibility: "hidden",
          animationDelay: "500ms",
          animationName: "none"
        }}
      >
        <div className="col-xl-8 offset-xl-2">
          <div className="ui-content mt45 mb60">
            <h5 className="mb20">Promoting a culture of sharing for all</h5>
            <p className="mb25 ff-heading text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
              nulla faucibus viverra nisl non senectus tortor. Suspendisse
              pellentesque elementum proin diam.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tempus nulla faucibus viverra nisl
              non senectus tortor. Suspendisse pellentesque elementum proin
              diam.
            </p>
            <p className="ff-heading text">
              Ipsum dolor sit amet, consectetur adipiscing elit. Tempus nulla
              faucibus viverra nisl non senectus tortor. Suspendisse
              pellentesque elementum proin diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tempus nulla faucibus viverra nisl
              non senectus tortor. Suspendisse pellentesque elementum proin
              diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tempus nulla faucibus viverra nisl non senectus tortor.
              Suspendisse pellentesque elementum proin diam.
            </p>
          </div>
          <div className="blockquote-style1 mb60">
            <blockquote className="blockquote">
              <p className="fst-italic fz15 fw500 ff-heading dark-color">
                Tempus nulla faucibus viverra nisl non senectus tortor.
                Suspendisse pellentesque elementum proin diam.Lorem ipsum dolor{" "}
              </p>
              <h5 className="quote-title">Angelica Pan</h5>
            </blockquote>
          </div>
          <div className="ui-content">
            <h4 className="title mb25">What You Will Gain</h4>
          </div>
          <div className="row">
            <div className="col-auto">
              <div className="ui-content">
                <div className="list-style1">
                  <ul>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Become a Front-End designer.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      You will acquire the ability to generate income{" "}
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Build a UI project from beginning to end.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Work with colors &amp; fonts.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      You will create your own UI Kit.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-auto ms-xl-5">
              <div className="ui-content">
                <div className="list-style1">
                  <ul>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Build &amp; test a complete mobile app.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Learn to design mobile apps &amp; websites.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Design 3 different logos.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Create low-fidelity wireframe.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Downloadable exercise files.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt40" style={{ height: 450 }}>
            <img
              src="images/blog/blog-single-2.jpg"
              alt=""
              className="bdrs4 post-img-2 w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="ui-content mt40 mb30">
            <h4 className="mb20">Prerequisites</h4>
            <div className="custom_bsp_grid">
              <ul className="list-style-type-bullet p-0 ml20">
                <li>
                  This course welcomes participants with any level of experience
                  and does not mandate any prior skills.{" "}
                  <br className="d-none d-lg-block" /> A keen interest and
                  willingness to learn are all that's needed
                </li>
                <li>Access to a computer with a stable internet connection.</li>
                <li>Adobe Photoshop (Optional)</li>
              </ul>
            </div>
          </div>
          <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
            <div className="blog_post_share d-flex align-items-center mb10-sm">
              <span className="me-2">Share this post</span>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <div className="bsp_tags d-flex">
              <a className="mr10" href="#">
                Figma
              </a>
              <a className="mr10" href="#">
                Sketch
              </a>
              <a href="#">HTML5</a>
            </div>
          </div>
          <div className="bsp_comments bdrb1 d-block d-sm-flex justify-content-between pt30 pb45 pb30-sm">
            <div className="mbp_first d-flex">
              <div className="flex-shrink-0">
                {" "}
                <img
                  src="images/blog/comments-1.png"
                  className="mr-3"
                  alt="comments-1.png"
                />
              </div>
              <div className="flex-grow-1 ml30">
                <h5 className="mb0">David Daniel</h5>
                <div className="text fz14 mb20">Medical Assistant</div>
                <p className="text">
                  Etiam vitae leo et diam pellentesque porta. Sed eleifend
                  ultricies risus, vel rutrum erat commodo ut. Praesent finibus
                  congue euismod. Nullam scelerisque massa vel augue placerat, a
                  tempor sem egestas. , <br />
                  Curabitur placerat finibus lacus.
                </p>
              </div>
            </div>
          </div>
          <div className="mbp_pagination_tab bdrb1">
            <div className="row justify-content-between pt45 pt30-sm pb45 pb30-sm">
              <div className="col-md-6">
                <div className="pag_prev">
                  <a href="#">
                    <h5>
                      <span className="fas fa-chevron-left pe-2" /> Previous
                      Post
                    </h5>
                    <p className="fz14 text mb-0">
                      Given Set was without from god divide rule Hath
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pag_next">
                  <a href="#" className="text-end">
                    <h5>
                      Next Post
                      <span className="fas fa-chevron-right ps-2" />
                    </h5>
                    <p className="fz14 text mb-0">
                      Tree earth fowl given moveth deep lesser After
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="product_single_content mb50">
            <div className="mbp_pagination_comments">
              <div className="row">
                <div className="col-lg-12">
                  <div className="total_review d-flex align-items-center justify-content-between mb20 mt60">
                    <h4 className="mb15">80 Reviews</h4>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                    <img
                      src="images/blog/comments-2.png"
                      className="mr-3"
                      alt="comments-2.png"
                    />
                    <div className="ml20">
                      <h6 className="mt-0 mb-0">Michael John</h6>
                      <div>
                        <span className="fz14">12 March 2024</span>
                      </div>
                    </div>
                  </div>
                  <p className="text mt20 mb20">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                    nulla faucibus viverra nisl non senectus tortor. Suspendisse
                    pellentesque elementum proin diam. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Tempus nulla faucibus
                    viverra nisl non senectus tortor. Suspendisse pellentesque
                    elementum proin diam.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Tempus nulla faucibus viverra nisl non
                    senectus tortor. Suspendisse pellentesque elementum proin
                    diam.
                  </p>
                  <div className="review_cansel_btns d-flex">
                    <a href="#">
                      <i className="fas fa-thumbs-up" />
                      Helpful
                    </a>
                    <a href="#">
                      <i className="fas fa-thumbs-down" />
                      Not helpful
                    </a>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
                    <img
                      src="images/blog/comments-2.png"
                      className="mr-3"
                      alt="comments-2.png"
                    />
                    <div className="ml20">
                      <h6 className="mt-0 mb-0">James David</h6>
                      <div>
                        <span className="fz14">12 March 2024</span>
                      </div>
                    </div>
                  </div>
                  <p className="text mt20 mb20">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                    nulla faucibus viverra nisl non senectus tortor. Suspendisse
                    pellentesque elementum proin diam. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Tempus nulla faucibus
                    viverra nisl non senectus tortor. Suspendisse pellentesque
                    elementum proin diam.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                  <div className="review_cansel_btns d-flex pb30">
                    <a href="#">
                      <i className="fas fa-thumbs-up" />
                      Helpful
                    </a>
                    <a href="#">
                      <i className="fas fa-thumbs-down" />
                      Not helpful
                    </a>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="position-relative bdrb1 pb50">
                    <a
                      href="page-service-single.html"
                      className="ud-btn btn-light-thm"
                    >
                      See More
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bsp_reveiw_wrt">
            <h6 className="fz17">Add a Review</h6>
            <p className="text">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="comments_form mt30">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-4">
                    <label className="fw500 ff-heading dark-color mb-2">
                      Comment
                    </label>
                    <textarea
                      className="pt15"
                      rows={6}
                      placeholder="Description"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb20">
                    <label className="fw500 ff-heading dark-color mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Angelica Pan"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb20">
                    <label className="fw500 ff-heading dark-color mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                    <label className="custom_checkbox fz15 ff-heading">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <a href="#" className="ud-btn btn-thm">
                    Send
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Explore Apartment */}
  <section className="bgc-thm3 pb90 pb30-md">
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
            <h2 className="title">Recent Blog</h2>
            <p className="paragraph">See how you can up your career status</p>
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

export default Blog_single