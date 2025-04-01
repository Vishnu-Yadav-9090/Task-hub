import React from 'react'

const Dash_Create_Project = () => {
  return (
    <>
     <div className="wrapper mm-page mm-slideout" id="mm-28">
  <div className="preloader" style={{ display: "none" }} />
  {/* Main Header Nav */}
  <header className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu">
    {/* Ace Responsive Menu */}
    <nav className="posr">
      <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-lg-auto">
            <div className="text-center text-lg-start d-flex align-items-center">
              <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                <a href="index.html" className="logo">
                  <img src="images/header-logo-dark.svg" alt="" />
                </a>
              </div>
              <div className="fz20 ml90">
                <a href="#" className="dashboard_sidebar_toggle_icon vam">
                  <img src="images/dashboard-navicon.svg" alt="" />
                </a>
              </div>
              <a
                className="login-info d-block d-xl-none ml40 vam"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
              >
                <span className="flaticon-loupe" />
              </a>
              <div className="ml40 d-none d-xl-block">
                <div className="search_area dashboard-style">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="What service are you looking for today?"
                  />
                  <label>
                    <span className="flaticon-loupe" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-auto">
            <div className="text-center text-lg-end header_right_widgets">
              <ul className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0">
                <li className="d-none d-sm-block">
                  <a
                    className="text-center mr5 text-thm2 dropdown-toggle fz20"
                    type="button"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <span className="flaticon-notification" />
                  </a>
                  <div className="dropdown-menu">
                    <div className="dboard_notific_dd px30 pt10 pb15">
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-1.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your resume</p>
                          <p className="text mb-0">updated!</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-2.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You changed</p>
                          <p className="text mb-0">password</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-3.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your account has been</p>
                          <p className="text mb-0">created successfully</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-4.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You applied for a job </p>
                          <p className="text mb-0">Front-end Developer</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center">
                        <img src="images/resource/notif-5.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your course uploaded</p>
                          <p className="text mb-0">successfully</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-none d-sm-block">
                  <a
                    className="text-center mr5 text-thm2 dropdown-toggle fz20"
                    type="button"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <span className="flaticon-mail" />
                  </a>
                  <div className="dropdown-menu">
                    <div className="dboard_notific_dd px30 pt20 pb15">
                      <div className="notif_list d-flex align-items-start bdrb1 pb25 mb10">
                        <img
                          className="img-2"
                          src="images/testimonials/testi-1.jpg"
                          alt=""
                        />
                        <div className="details ml15">
                          <p className="dark-color fw500 mb-2">Angelica Pan</p>
                          <p className="text mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                          </p>
                          <p className="mb-0 text-thm">4 hours ago</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-start mb25">
                        <img
                          className="img-2"
                          src="images/testimonials/testi-2.jpg"
                          alt=""
                        />
                        <div className="details ml15">
                          <p className="dark-color fw500 mb-2">Angelica Pan</p>
                          <p className="text mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                          </p>
                          <p className="mb-0 text-thm">4 hours ago</p>
                        </div>
                      </div>
                      <div className="d-grid">
                        <a
                          href="page-dashboard-message.html"
                          className="ud-btn btn-thm w-100"
                        >
                          View All Messages
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-none d-sm-block">
                  <a
                    className="text-center mr5 text-thm2 dropdown-toggle fz20"
                    type="button"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <span className="flaticon-like" />
                  </a>
                  <div className="dropdown-menu">
                    <div className="dboard_notific_dd px30 pt10 pb15">
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-1.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your resume</p>
                          <p className="text mb-0">updated!</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-2.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You changed</p>
                          <p className="text mb-0">password</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-3.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your account has been</p>
                          <p className="text mb-0">created successfully</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="images/resource/notif-4.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You applied for a job </p>
                          <p className="text mb-0">Front-end Developer</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center">
                        <img src="images/resource/notif-5.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your course uploaded</p>
                          <p className="text mb-0">successfully</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="user_setting">
                  <div className="dropdown">
                    <a className="btn" href="#" data-bs-toggle="dropdown">
                      <img src="images/resource/user.png" alt="user.png" />
                    </a>
                    <div className="dropdown-menu">
                      <div className="user_setting_content">
                        <p className="fz15 fw400 ff-heading mb10 pl30">Start</p>
                        <a className="dropdown-item" href="page-dashboard.html">
                          <i className="flaticon-home mr10" />
                          Dashboard
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-proposal.html"
                        >
                          <i className="flaticon-document mr10" />
                          My Proposals
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-save.html"
                        >
                          <i className="flaticon-like mr10" />
                          Saved
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-message.html"
                        >
                          <i className="flaticon-chat mr10" />
                          Message
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-reviews.html"
                        >
                          <i className="flaticon-review-1 mr10" />
                          Reviews
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-invoice.html"
                        >
                          <i className="flaticon-receipt mr10" />
                          Invoice
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-payouts.html"
                        >
                          <i className="flaticon-dollar mr10" />
                          Payouts
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-statement.html"
                        >
                          <i className="flaticon-web mr10" />
                          Statements
                        </a>
                        <p className="fz15 fw400 ff-heading mt30 pl30">
                          Organize and Manage
                        </p>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-manage-service.html"
                        >
                          <i className="flaticon-presentation mr10" />
                          Manage Services
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-manage-jobs.html"
                        >
                          <i className="flaticon-briefcase mr10" />
                          Manage Jobs
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-dashboard-favorites.html"
                        >
                          <i className="flaticon-content mr10" />
                          Manage Project
                        </a>
                        <p className="fz15 fw400 ff-heading mt30 pl30">
                          Account
                        </p>
                        <a
                          className="dropdown-item active"
                          href="page-dashboard-profile.html"
                        >
                          <i className="flaticon-photo mr10" />
                          My Profile
                        </a>
                        <a className="dropdown-item" href="page-login.html">
                          <i className="flaticon-logout mr10" />
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* Search Modal */}
  <div className="search-modal">
    <div
      className="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel" />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fal fa-xmark" />
            </button>
          </div>
          <div className="modal-body">
            <div className="popup-search-field search_area">
              <input
                type="text"
                className="form-control border-0"
                placeholder="What service are you looking for today?"
              />
              <label>
                <span className="far fa-magnifying-glass" />
              </label>
              <button className="ud-btn btn-thm" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Mobile Nav  */}
  <div id="page" className="mobilie_header_nav stylehome1">
    <div className="mobile-menu">
      <div className="header bdrb1">
        <div className="menu_and_widgets">
          <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
            <a className="mobile_logo" href="#">
              <img src="images/header-logo3.svg" alt="" />
            </a>
            <div className="right-side text-end">
              <a className="" href="page-login.html">
                join
              </a>
              <a className="menubar ml30" href="#menu">
                <img src="images/mobile-dark-nav-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="posr">
          <div className="mobile_menu_close_btn">
            <span className="far fa-times" />
          </div>
        </div>
      </div>
    </div>
    {/* /.mobile-menu */}
  </div>
  <div className="dashboard_content_wrapper">
    <div className="dashboard dashboard_wrapper pr30 pr0-xl">
      <div className="dashboard__sidebar d-none d-lg-block">
        <div className="dashboard_sidebar_list">
          <p className="fz15 fw400 ff-heading pl30">Start</p>
          <div className="sidebar_list_item">
            <a href="page-dashboard.html" className="items-center">
              <i className="flaticon-home mr15" />
              Dashboard
            </a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-proposal.html" className="items-center">
              <i className="flaticon-document mr15" />
              My Proposals
            </a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-save.html" className="items-center">
              <i className="flaticon-like mr15" />
              Saved
            </a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-message.html" className="items-center">
              <i className="flaticon-chat mr15" />
              Message
            </a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-reviews.html" className="items-center">
              <i className="flaticon-review-1 mr15" />
              Reviews
            </a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-invoice.html" className="items-center">
              <i className="flaticon-receipt mr15" />
              Invoice
            </a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-payouts.html" className="items-center">
              <i className="flaticon-dollar mr15" />
              Payouts
            </a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-statement.html" className="items-center">
              <i className="flaticon-web mr15" />
              Statements
            </a>
          </div>
          <p className="fz15 fw400 ff-heading pl30 mt30">Organize and Manage</p>
          <div className="sidebar_list_item ">
            <a
              href="page-dashboard-manage-service.html"
              className="items-center"
            >
              <i className="flaticon-presentation mr15" />
              Manage Services
            </a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-manage-jobs.html" className="items-center">
              <i className="flaticon-briefcase mr15" />
              Manage Jobs
            </a>
          </div>
          <div className="sidebar_list_item ">
            <a
              href="page-dashboard-manage-project.html"
              className="items-center"
            >
              <i className="flaticon-content mr15" />
              Manage Project
            </a>
          </div>
          <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
          <div className="sidebar_list_item ">
            <a
              href="page-dashboard-profile.html"
              className="items-center -is-active"
            >
              <i className="flaticon-photo mr15" />
              My Profile
            </a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-login.html" className="items-center">
              <i className="flaticon-logout mr15" />
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard__main pl0-md">
        <div className="dashboard__content hover-bgc-color">
          <div className="row pb40">
            <div className="col-lg-12">
              <div className="dashboard_navigationbar d-block d-lg-none">
                <div className="dropdown">
                  <button onclick="myFunction()" className="dropbtn">
                    <i className="fa fa-bars pr10" /> Dashboard Navigation
                  </button>
                  <ul id="myDropdown" className="dropdown-content">
                    <li>
                      <p className="fz15 fw400 ff-heading mt30 pl30">Start</p>
                    </li>
                    <li>
                      <a href="page-dashboard.html">
                        <i className="flaticon-home mr10" />
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-proposal.html">
                        <i className="flaticon-document mr10" />
                        My Proposals
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-save.html">
                        <i className="flaticon-like mr10" />
                        Saved
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-message.html">
                        <i className="flaticon-chat mr10" />
                        Message
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-reviews.html">
                        <i className="flaticon-review-1 mr10" />
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-invoice.html">
                        <i className="flaticon-receipt mr10" />
                        Invoice
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-payouts.html">
                        <i className="flaticon-dollar mr10" />
                        Payouts
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-statement.html">
                        <i className="flaticon-web mr10" />
                        Statements
                      </a>
                    </li>
                    <li>
                      <p className="fz15 fw400 ff-heading mt30 pl30">
                        Organize and Manage
                      </p>
                    </li>
                    <li>
                      <a href="page-dashboard-manage-service.html">
                        <i className="flaticon-presentation mr10" />
                        Manage Services
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-manage-jobs.html">
                        <i className="flaticon-briefcase mr10" />
                        Manage Jobs
                      </a>
                    </li>
                    <li>
                      <a href="page-dashboard-manage-project.html">
                        <i className="flaticon-content mr10" />
                        Manage Project
                      </a>
                    </li>
                    <li>
                      <p className="fz15 fw400 ff-heading mt30 pl30">Account</p>
                    </li>
                    <li className="active">
                      <a href="page-dashboard-profile.html">
                        <i className="flaticon-photo mr10" />
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a href="page-login.html">
                        <i className="flaticon-logout mr10" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="dashboard_title_area">
                <h2>Creat Project</h2>
                <p className="text">
                  Qui debitis maiores optio hic neque nihil, quisquam minus.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-lg-end">
                <a href="#" className="ud-btn btn-dark">
                  Save &amp; Publish
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Basic Information</h5>
                </div>
                <div className="col-xl-8">
                  <form className="form-style1">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Project Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="i will"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Category
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Graphics &amp; Design</option>
                                  <option>Digital Marketing</option>
                                  <option>Writing &amp; Translation</option>
                                  <option>Video &amp; Animation</option>
                                  <option>Music &amp; Audio</option>
                                  <option>Programming &amp; Tech</option>
                                  <option>Business</option>
                                  <option>Lifestyle</option>
                                  <option>Trending</option>
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
                                  title="Select"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        Select
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
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Freelancer Type
                          </label>
                          <div className="bootselect-multiselect">
                            <div className="dropdown bootstrap-select">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Project Based</option>
                                <option>Other</option>
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
                                title="Select"
                              >
                                <div className="filter-option">
                                  <div className="filter-option-inner">
                                    <div className="filter-option-inner-inner">
                                      Select
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
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Price type
                          </label>
                          <div className="bootselect-multiselect">
                            <div className="dropdown bootstrap-select">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Low($)</option>
                                <option>Mid($$)</option>
                                <option>Hight($$$)</option>
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
                                title="Select"
                              >
                                <div className="filter-option">
                                  <div className="filter-option-inner">
                                    <div className="filter-option-inner-inner">
                                      Select
                                    </div>
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
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Cost
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="$"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Project Duration
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>1 Day</option>
                                  <option>2 Day</option>
                                  <option>3 Day</option>
                                  <option>1 Week</option>
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
                                  title="Select"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        Select
                                      </div>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Level
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Entry Level</option>
                                  <option>Standard Level</option>
                                  <option>Expert Level</option>
                                </select>
                                <button
                                  type="button"
                                  tabIndex={-1}
                                  className="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-5"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Select"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        Select
                                      </div>
                                    </div>{" "}
                                  </div>
                                </button>
                                <div className="dropdown-menu ">
                                  <div
                                    className="inner show"
                                    role="listbox"
                                    id="bs-select-5"
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
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Country
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>United Kingdom</option>
                                  <option>United State</option>
                                  <option>Ukraine</option>
                                  <option>Uruguay</option>
                                  <option>UK</option>
                                  <option>Uzbekistan</option>
                                </select>
                                <button
                                  type="button"
                                  tabIndex={-1}
                                  className="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-6"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="United Kingdom"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        United Kingdom
                                      </div>
                                    </div>{" "}
                                  </div>
                                </button>
                                <div className="dropdown-menu ">
                                  <div
                                    className="inner show"
                                    role="listbox"
                                    id="bs-select-6"
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
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              City
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option data-tokens="California">
                                    California
                                  </option>
                                  <option data-tokens="Chicago">Chicago</option>
                                  <option data-tokens="LosAngeles">
                                    Los Angeles
                                  </option>
                                  <option data-tokens="Manhattan">
                                    Manhattan
                                  </option>
                                  <option data-tokens="NewJersey">
                                    New Jersey
                                  </option>
                                  <option data-tokens="NewYork">
                                    New York
                                  </option>
                                  <option data-tokens="SanDiego">
                                    San Diego
                                  </option>
                                  <option data-tokens="SanFrancisco">
                                    San Francisco
                                  </option>
                                  <option data-tokens="Texas">Texas</option>
                                </select>
                                <button
                                  type="button"
                                  tabIndex={-1}
                                  className="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-7"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="California"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        California
                                      </div>
                                    </div>{" "}
                                  </div>
                                </button>
                                <div className="dropdown-menu ">
                                  <div
                                    className="inner show"
                                    role="listbox"
                                    id="bs-select-7"
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
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Languages
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select show-tick">
                                <select className="selectpicker" multiple="">
                                  <option>English</option>
                                  <option>Spanish</option>
                                  <option>Greek</option>
                                  <option>Tarkish</option>
                                </select>
                                <button
                                  type="button"
                                  tabIndex={-1}
                                  className="btn dropdown-toggle bs-placeholder btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-8"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Nothing selected"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        Nothing selected
                                      </div>
                                    </div>{" "}
                                  </div>
                                </button>
                                <div className="dropdown-menu ">
                                  <div
                                    className="inner show"
                                    role="listbox"
                                    id="bs-select-8"
                                    tabIndex={-1}
                                    aria-multiselectable="true"
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
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Languages Level
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select show-tick">
                                <select className="selectpicker" multiple="">
                                  <option>Select</option>
                                  <option>Fluent</option>
                                  <option>Mid Level</option>
                                  <option>Conversational</option>
                                  <option>Other</option>
                                </select>
                                <button
                                  type="button"
                                  tabIndex={-1}
                                  className="btn dropdown-toggle bs-placeholder btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-9"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Nothing selected"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        Nothing selected
                                      </div>
                                    </div>{" "}
                                  </div>
                                </button>
                                <div className="dropdown-menu ">
                                  <div
                                    className="inner show"
                                    role="listbox"
                                    id="bs-select-9"
                                    tabIndex={-1}
                                    aria-multiselectable="true"
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
                      <div className="col-sm-12">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Skills
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select show-tick">
                                <select className="selectpicker" multiple="">
                                  <option>Figma</option>
                                  <option>Adobe XD</option>
                                  <option>CSS</option>
                                  <option>HTML</option>
                                  <option>Bootstrap</option>
                                </select>
                                <button
                                  type="button"
                                  tabIndex={-1}
                                  className="btn dropdown-toggle bs-placeholder btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-10"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Nothing selected"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        Nothing selected
                                      </div>
                                    </div>{" "}
                                  </div>
                                </button>
                                <div className="dropdown-menu ">
                                  <div
                                    className="inner show"
                                    role="listbox"
                                    id="bs-select-10"
                                    tabIndex={-1}
                                    aria-multiselectable="true"
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
                      <div className="col-md-12">
                        <div className="mb10">
                          <label className="heading-color ff-heading fw500 mb10">
                            Project Detail
                          </label>
                          <textarea
                            cols={30}
                            rows={6}
                            placeholder="Description"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="text-start">
                          <a
                            className="ud-btn btn-thm"
                            href="page-contact.html"
                          >
                            Save
                            <i className="fal fa-arrow-right-long" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Upload Attachments</h5>
                </div>
                <div className="row">
                  <div className="col-6 col-xl-2">
                    <div className="project-attach">
                      <h6 className="title">Project Brief</h6>
                      <p>PDF</p>
                      <span className="icon flaticon-page" />
                    </div>
                  </div>
                  <div className="col-6 col-xl-2">
                    <div className="project-attach">
                      <h6 className="title">Project Brief</h6>
                      <p>PDF</p>
                      <span className="icon flaticon-page" />
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <a className="upload-img" href="#">
                      Upload Files
                    </a>
                  </div>
                </div>
                <p className="text">Maximum file size: 10 MB</p>
                <div className="text-start">
                  <a className="ud-btn btn-thm" href="page-contact.html">
                    Save &amp; Publish
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="dashboard_footer pt30 pb30">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-auto">
                <div className="copyright-widget">
                  <p className="mb-md-0">
                    ©2024 Themebracket All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-auto">
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
                          aria-owns="bs-select-11"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          title="US$ USD"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                US$ USD
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-11"
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
                          aria-owns="bs-select-12"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          title="English"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                English
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-12"
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
        </footer>
      </div>
    </div>
  </div>
  <a className="scrollToHome" href="#">
    <i className="fas fa-angle-up" />
  </a>
</div>

    </>
  )
}

export default Dash_Create_Project