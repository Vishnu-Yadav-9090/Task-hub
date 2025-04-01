import React from 'react'

const Project_v1 = () => {
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
    <div className="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
      <img
        className="left-top-img wow zoomIn"
        src="images/vector-img/left-top.png"
        alt=""
        style={{ visibility: "visible", animationName: "zoomIn" }}
      />
      <img
        className="right-bottom-img wow zoomIn"
        src="images/vector-img/right-bottom.png"
        alt=""
        style={{ visibility: "visible", animationName: "zoomIn" }}
      />
      <img
        className="service-v1-vector bounce-y d-none d-xl-block"
        src="images/vector-img/vector-service-v1.png"
        alt=""
      />
      <div className="container">
        <div
          className="row wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="col-xl-7">
            <div className="position-relative">
              <h2>Projects List</h2>
              <p className="text mb30">
                Similique nemo ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="advance-search-tab bgc-white p10 bdrs4 zi1 position-relative">
              <div className="row">
                <div className="col-md-8 col-xl-9">
                  <div className="advance-search-field ">
                    <form className="form-search position-relative">
                      <div className="box-search bb1-sm">
                        <span className="icon far fa-magnifying-glass" />
                        <input
                          className="form-control"
                          type="text"
                          name="search"
                          placeholder="What are you looking for?"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-xl-3">
                  <div className="text-center text-xl-start">
                    <button className="ud-btn btn-thm w-100" type="button">
                      Search
                    </button>
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
                        UX Designer
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
                    <a className="text-thm" href="#">
                      +20 more
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb20 pb10">
                <div className="card-header active" id="heading01">
                  <h4>
                    <button
                      className="btn btn-link ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse01"
                      aria-expanded="true"
                      aria-controls="collapse01"
                    >
                      Project type
                    </button>
                  </h4>
                </div>
                <div
                  id="collapse01"
                  className="collapse show"
                  aria-labelledby="heading01"
                  data-parent="#accordionExample"
                >
                  <div className="card-body card-body px-0 pt-0">
                    <div className="switch-style1">
                      <div className="form-check form-switch mb20">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Fixed
                        </label>
                        <span className="right-tags">(1,945)</span>
                      </div>
                    </div>
                    <div className="switch-style1">
                      <div className="form-check form-switch">
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
                          Hourly
                        </label>
                        <span className="right-tags">(8,136)</span>
                      </div>
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
                      Price
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
              <div className="card mb20 pb10">
                <div className="card-header active" id="heading0">
                  <h4>
                    <button
                      className="btn btn-link ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse02"
                      aria-expanded="true"
                      aria-controls="collapse02"
                    >
                      Skills
                    </button>
                  </h4>
                </div>
                <div
                  id="collapse02"
                  className="collapse show"
                  aria-labelledby="heading0"
                  data-parent="#accordionExample"
                >
                  <div className="card-body card-body px-0 pt-0">
                    <div className="checkbox-style1 mb15">
                      <label className="custom_checkbox">
                        Adobe Photoshop
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(1,945)</span>
                      </label>
                      <label className="custom_checkbox">
                        Figma
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <span className="right-tags">(8,136)</span>
                      </label>
                      <label className="custom_checkbox">
                        Sketch
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(917)</span>
                      </label>
                      <label className="custom_checkbox">
                        Adobe XD
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(240)</span>
                      </label>
                      <label className="custom_checkbox">
                        Balsamiq
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">((2,460)</span>
                      </label>
                    </div>
                    <a className="text-thm" href="#">
                      +20 more
                    </a>
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
                      Location
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
                    <div className="search_area mb15">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What are you looking for?"
                      />
                      <label>
                        <span className="flaticon-loupe" />
                      </label>
                    </div>
                    <div className="checkbox-style1 mb15">
                      <label className="custom_checkbox">
                        United States
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(1,945)</span>
                      </label>
                      <label className="custom_checkbox">
                        United Kingdom
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <span className="right-tags">(8,136)</span>
                      </label>
                      <label className="custom_checkbox">
                        Canada
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(917)</span>
                      </label>
                      <label className="custom_checkbox">
                        Germany
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(240)</span>
                      </label>
                      <label className="custom_checkbox">
                        French
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">((2,460)</span>
                      </label>
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
                      Languange
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
                    <div className="checkbox-style1 mb15">
                      <label className="custom_checkbox">
                        French
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(1,945)</span>
                      </label>
                      <label className="custom_checkbox">
                        English
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <span className="right-tags">(8,136)</span>
                      </label>
                      <label className="custom_checkbox">
                        Italian
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(917)</span>
                      </label>
                      <label className="custom_checkbox">
                        Spanish
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(240)</span>
                      </label>
                    </div>
                    <a className="text-thm" href="#">
                      +20 more
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb20 pb5">
                <div className="card-header active" id="heading4">
                  <h4>
                    <button
                      className="btn btn-link ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      English Level
                    </button>
                  </h4>
                </div>
                <div
                  id="collapse4"
                  className="collapse show"
                  aria-labelledby="heading4"
                  data-parent="#accordionExample"
                >
                  <div className="card-body card-body px-0 pt-0">
                    <div className="checkbox-style1">
                      <label className="custom_checkbox">
                        Basic level
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(1,945)</span>
                      </label>
                      <label className="custom_checkbox">
                        Bilingual
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <span className="right-tags">(8,136)</span>
                      </label>
                      <label className="custom_checkbox">
                        Fluent
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="right-tags">(917)</span>
                      </label>
                      <label className="custom_checkbox">
                        Native
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
                      aria-owns="bs-select-1"
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-1.png"
                        alt=""
                      />
                      <span className="online-badge2" />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        Food delivery mobile app for android and ios
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-2.png"
                        alt=""
                      />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        Mobile app development for ios and android
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-3.png"
                        alt=""
                      />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        Convert figma to HTML CSS using bootstrap or tailwind
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-4.png"
                        alt=""
                      />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        Full-stack Developer to help us to build our
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-5.png"
                        alt=""
                      />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        Looking for team members for web agency
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-6.png"
                        alt=""
                      />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        A colorful whiteboard animation explainer video
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-7.png"
                        alt=""
                      />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        Food delivery mobile app for android and ios
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
                <div className="col-lg-8 ps-0">
                  <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
                    <div className="thumb w60 position-relative rounded-circle mb15-md">
                      <img
                        className="rounded-circle mx-auto"
                        src="images/team/client-8.png"
                        alt=""
                      />
                    </div>
                    <div className="details ml15 ml0-md mb15-md">
                      <h5 className="title mb-3">
                        Food delivery mobile app for android and ios
                      </h5>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                        Newyork, USA
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                        <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        2 hours ago
                      </p>
                      <p className="mb-0 fz14 list-inline-item mb5-sm">
                        <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                        1 Received
                      </p>
                      <p className="text mt10">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <div className="skill-tags d-flex align-items-center justify-content-start">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
                  <div className="details">
                    <div className="text-lg-end">
                      <h4>$125 - $175</h4>
                      <p className="text">Hourly Rate</p>
                    </div>
                    <div className="d-grid mt15">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-light-thm"
                      >
                        Send Proposal
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
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

export default Project_v1