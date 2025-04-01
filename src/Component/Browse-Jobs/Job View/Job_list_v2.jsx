import React from 'react'

const Job_list_v2 = () => {
  return (
    <>
     <div className="body_content">
  <section className="categories_list_section overflow-hidden">
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
                <a className="active" href="">
                  Digital Marketing
                </a>
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
  {/* Breadcumb Sections */}
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
  {/* Breadcumb Sections */}
  <section className="breadcumb-section pt-0">
    <div className="cta-employee-single cta-banner mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative d-flex align-items-center">
      <img
        className="service-v1-vector at-job bounce-x d-none d-xl-block"
        src="images/vector-img/vector-service-v1.png"
        alt=""
      />
      <div className="container">
        <div
          className="row wow fadeInUp animated"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="col-xl-7">
            <div className="position-relative">
              <h2>Job Listings</h2>
              <p className="text">
                Similique nemo ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="advance-search-tab bgc-white p10 bdrs4 mt30">
              <div className="row">
                <div className="col-md-5 col-lg-6 col-xl-6">
                  <div className="advance-search-field bdrr1 bdrn-sm">
                    <form className="form-search position-relative">
                      <div className="box-search bb1-sm">
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
                  <div className="bselect-style1">
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
                  <div className="text-center text-xl-start">
                    <a className="ud-btn btn-thm2 w-100 vam" href="#">
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Listings All Lists */}
  <section className="pt30 pb90">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="list-sidebar-style1 d-none d-lg-block">
            <div className="accordion" id="accordionExample">
              <div className="card mb20 pb10 mt-0">
                <div className="card-header active" id="heading0">
                  <h4>
                    <button
                      className="btn btn-link ps-0 pt-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse0"
                      aria-expanded="true"
                      aria-controls="collapse0"
                    >
                      Category
                    </button>
                  </h4>
                </div>
                <div
                  id="collapse0"
                  className="collapse show"
                  aria-labelledby="heading0"
                  data-parent="#accordionExample"
                >
                  <div className="card-body card-body px-0 pt-0">
                    <div className="checkbox-style1 mb15">
                      <label className="custom_checkbox">
                        UI/UX Designer
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(1,945)</span>
                      </label>
                      <label className="custom_checkbox">
                        Web Developers
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <span className="right-tags">(8,136)</span>
                      </label>
                      <label className="custom_checkbox">
                        Wordpress
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(917)</span>
                      </label>
                      <label className="custom_checkbox">
                        Node.js
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(240)</span>
                      </label>
                      <label className="custom_checkbox">
                        Project Managers
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">((2,460)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb20 pb0">
                <div className="card-header active" id="heading1">
                  <h4>
                    <button
                      className="btn btn-link ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      Salary
                    </button>
                  </h4>
                </div>
                <div
                  id="collapse1"
                  className="collapse show"
                  aria-labelledby="heading1"
                  data-parent="#accordionExample"
                >
                  <div className="card-body card-body px-0 pt-0">
                    {/* Range Slider Desktop Version */}
                    <div className="range-slider-style1">
                      <div className="range-wrapper">
                        <div className="slider-range mb10 mt15 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                          <div
                            className="ui-slider-range ui-corner-all ui-widget-header"
                            style={{ left: "0.02%", width: "61.819%" }}
                          />
                          <span
                            tabIndex={0}
                            className="ui-slider-handle ui-corner-all ui-state-default"
                            style={{ left: "0.02%" }}
                          />
                          <span
                            tabIndex={0}
                            className="ui-slider-handle ui-corner-all ui-state-default"
                            style={{ left: "61.839%" }}
                          />
                        </div>
                        <div className="text-center">
                          <input
                            type="text"
                            className="amount"
                            placeholder="$20"
                          />
                          <span className="fa-sharp fa-solid fa-minus mx-2 dark-color" />
                          <input
                            type="text"
                            className="amount2"
                            placeholder="$61839"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb20 pb5">
                <div className="card-header active" id="heading2">
                  <h4>
                    <button
                      className="btn btn-link ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      Job Type
                    </button>
                  </h4>
                </div>
                <div
                  id="collapse2"
                  className="collapse show"
                  aria-labelledby="heading2"
                  data-parent="#accordionExample"
                >
                  <div className="card-body card-body px-0 pt-0">
                    <div className="widget-wrapper pr20">
                      <div className="switch-style1">
                        <div className="form-check form-switch mb20">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault1"
                          >
                            Freelance
                          </label>
                          <span className="right-tags">(1,945)</span>
                        </div>
                      </div>
                      <div className="switch-style1">
                        <div className="form-check form-switch mb20">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault2"
                            defaultChecked="checked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault2"
                          >
                            Full Time
                          </label>
                          <span className="right-tags">(8,136)</span>
                        </div>
                      </div>
                      <div className="switch-style1">
                        <div className="form-check form-switch mb20">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault3"
                          >
                            Part Time
                          </label>
                          <span className="right-tags">(917)</span>
                        </div>
                      </div>
                      <div className="switch-style1">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault4"
                          >
                            Internship
                          </label>
                          <span className="right-tags">(240)</span>
                        </div>
                      </div>
                    </div>
                    <a className="text-thm" href="#">
                      +20 more
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb20 pb5">
                <div className="card-header active" id="heading3">
                  <h4>
                    <button
                      className="btn btn-link ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      Level
                    </button>
                  </h4>
                </div>
                <div
                  id="collapse3"
                  className="collapse show"
                  aria-labelledby="heading3"
                  data-parent="#accordionExample"
                >
                  <div className="card-body card-body px-0 pt-0">
                    <div className="checkbox-style1">
                      <label className="custom_checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(1,945)</span>
                      </label>
                      <label className="custom_checkbox">
                        Internship
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <span className="right-tags">(8,136)</span>
                      </label>
                      <label className="custom_checkbox">
                        Entery Level
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(917)</span>
                      </label>
                      <label className="custom_checkbox">
                        Mid-Senior
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(240)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row align-items-center mb20">
            <div className="col-md-6">
              <div className="text-center text-md-start">
                <p className="text mb-0 mb10-sm">
                  <span className="fw500">7,512</span> available services{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="page_control_shorting d-md-flex align-items-center justify-content-center justify-content-md-end">
                <div className="dropdown-lists d-block d-lg-none me-2 mb10-sm">
                  <ul className="p-0 mb-0 text-center text-md-start">
                    <li>
                      {/* Advance Features modal trigger */}
                      <button
                        type="button"
                        className="open-btn filter-btn-left"
                      >
                        {" "}
                        <img
                          className="me-2"
                          src="images/icon/all-filter-icon.svg"
                          alt=""
                        />{" "}
                        All Filter
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="pcs_dropdown dark-color pr10 text-center text-md-end">
                  <span>Sort by</span>
                  <div className="dropdown bootstrap-select show-tick">
                    <select className="selectpicker show-tick">
                      <option>Best Selling</option>
                      <option>Recommended</option>
                      <option>New Arrivals</option>
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
                      title="Best Selling"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Best Selling
                          </div>
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
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-1.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>
                    Marketing and Communications Manager Position: Exciting
                  </h5>
                  <h6 className="mb-3 text-thm">Mailchimp</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-3.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>Senior backend PHP/Laravel developer</h5>
                  <h6 className="mb-3 text-thm">Invision</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-4.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>Senior product manager</h5>
                  <h6 className="mb-3 text-thm">Mailchimp</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-5.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>Administrative Business Partner</h5>
                  <h6 className="mb-3 text-thm">Mailchimp</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-1.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>Experienced Senior B2B Sales Consultant Opportunity</h5>
                  <h6 className="mb-3 text-thm">Mailchimp</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-6.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>Office assistant/Social media assistant</h5>
                  <h6 className="mb-3 text-thm">Medium</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-8.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>
                    Marketing and Communications Manager Position: Exciting
                  </h5>
                  <h6 className="mb-3 text-thm">Figma</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                <div className="icon d-flex align-items-center mb20">
                  <img className="wa" src="images/team/client-7.png" alt="" />
                  <span className="fav-icon flaticon-star" />
                </div>
                <div className="details ml20 ml0-xl">
                  <h5>
                    Talented Website Designer Needed for Custom Directory{" "}
                  </h5>
                  <h6 className="mb-3 text-thm">Udemy</h6>
                  <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                  <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mbp_pagination mt30 text-center">
              <ul className="page_navigation">
                <li className="page-item">
                  <a className="page-link" href="">
                    {" "}
                    <span className="fas fa-angle-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    4
                  </a>
                </li>
                <li className="page-item d-inline-block d-sm-none">
                  <a className="page-link" href="">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    5
                  </a>
                </li>
                <li className="page-item d-none d-sm-inline-block">
                  <a className="page-link" href="">
                    ...
                  </a>
                </li>
                <li className="page-item d-none d-sm-inline-block">
                  <a className="page-link" href="">
                    20
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    <span className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
              <p className="mt10 mb-0 pagination_page_count text-center">
                1 – 20 of 200+ property available
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
                    aria-owns="bs-select-3"
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
                    aria-owns="bs-select-4"
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
                      id="bs-select-4"
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

export default Job_list_v2