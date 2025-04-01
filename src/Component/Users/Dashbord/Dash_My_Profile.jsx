import React from 'react'

const Dash_My_Profile = () => {
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
                <h2>My Profile</h2>
                <p className="text">
                  Qui debitis maiores optio hic neque nihil, quisquam minus.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Profile Details</h5>
                </div>
                <div className="col-xl-7">
                  <div className="profile-box d-sm-flex align-items-center mb30">
                    <div className="profile-img mb20-sm">
                      <img
                        className="w-100 rounded-circle wa-xs"
                        src="images/team/fl-1.png"
                        alt=""
                      />
                    </div>
                    <div className="profile-content ml20 ml0-xs">
                      <div className="d-flex align-items-center my-3">
                        <a href="#" className="tag-delt text-thm2">
                          <span className="flaticon-delete text-thm2" />
                        </a>
                        <a href="#" className="upload-btn ml10">
                          Upload Images
                        </a>
                      </div>
                      <p className="text mb-0">
                        Max file size is 1MB, Minimum dimension: 330x300 And
                        Suitable files are .jpg &amp; .png
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form className="form-style1">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="angelica"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="example@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={1234567890}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">
                            Tagline
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Developer"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Hourly Rate
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>$50</option>
                                  <option>$60</option>
                                  <option>$70</option>
                                  <option>$80</option>
                                  <option>$90</option>
                                  <option>$100</option>
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
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Gender
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Male</option>
                                  <option>Female</option>
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
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Specialization
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>Other</option>
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
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">
                              Type
                            </label>
                            <div className="bootselect-multiselect">
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Type One</option>
                                  <option>Type Two</option>
                                  <option>Type Three</option>
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
                                  aria-owns="bs-select-5"
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
                                  aria-owns="bs-select-6"
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
                                  aria-owns="bs-select-7"
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
                                    id="bs-select-7"
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
                              <div className="dropdown bootstrap-select">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Fluent</option>
                                  <option>Mid Level</option>
                                  <option>Conversational</option>
                                  <option>Other</option>
                                </select>
                                <button
                                  type="button"
                                  tabIndex={-1}
                                  className="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-8"
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
                                    id="bs-select-8"
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
                      <div className="col-md-12">
                        <div className="mb10">
                          <label className="heading-color ff-heading fw500 mb10">
                            Introduce Yourself
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
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Skills</h5>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Skills 1
                              </label>
                              <div className="bootselect-multiselect">
                                <div className="dropdown bootstrap-select">
                                  <select className="selectpicker">
                                    <option>Designer</option>
                                    <option>UI/UX</option>
                                  </select>
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="btn dropdown-toggle btn-light"
                                    data-bs-toggle="dropdown"
                                    role="combobox"
                                    aria-owns="bs-select-9"
                                    aria-haspopup="listbox"
                                    aria-expanded="false"
                                    title="Designer"
                                  >
                                    <div className="filter-option">
                                      <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">
                                          Designer
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
                                Point
                              </label>
                              <div className="bootselect-multiselect">
                                <div className="dropdown bootstrap-select">
                                  <select className="selectpicker">
                                    <option>90</option>
                                    <option>80</option>
                                  </select>
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="btn dropdown-toggle btn-light"
                                    data-bs-toggle="dropdown"
                                    role="combobox"
                                    aria-owns="bs-select-10"
                                    aria-haspopup="listbox"
                                    aria-expanded="false"
                                    title={90}
                                  >
                                    <div className="filter-option">
                                      <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">
                                          90
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
                                Skills 2
                              </label>
                              <div className="bootselect-multiselect">
                                <div className="dropdown bootstrap-select">
                                  <select className="selectpicker">
                                    <option>Developer</option>
                                    <option>Programmer</option>
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
                                    title="Developer"
                                  >
                                    <div className="filter-option">
                                      <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">
                                          Developer
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Point
                              </label>
                              <div className="bootselect-multiselect">
                                <div className="dropdown bootstrap-select">
                                  <select className="selectpicker">
                                    <option>60</option>
                                    <option>70</option>
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
                                    title={60}
                                  >
                                    <div className="filter-option">
                                      <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">
                                          60
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Skills 3
                              </label>
                              <div className="bootselect-multiselect">
                                <div className="dropdown bootstrap-select">
                                  <select className="selectpicker">
                                    <option>Video Editor</option>
                                    <option>Audio &amp; Music</option>
                                  </select>
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="btn dropdown-toggle btn-light"
                                    data-bs-toggle="dropdown"
                                    role="combobox"
                                    aria-owns="bs-select-13"
                                    aria-haspopup="listbox"
                                    aria-expanded="false"
                                    title="Video Editor"
                                  >
                                    <div className="filter-option">
                                      <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">
                                          Video Editor
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </button>
                                  <div className="dropdown-menu ">
                                    <div
                                      className="inner show"
                                      role="listbox"
                                      id="bs-select-13"
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
                                Point
                              </label>
                              <div className="bootselect-multiselect">
                                <div className="dropdown bootstrap-select">
                                  <select className="selectpicker">
                                    <option>75</option>
                                    <option>80</option>
                                  </select>
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="btn dropdown-toggle btn-light"
                                    data-bs-toggle="dropdown"
                                    role="combobox"
                                    aria-owns="bs-select-14"
                                    aria-haspopup="listbox"
                                    aria-expanded="false"
                                    title={75}
                                  >
                                    <div className="filter-option">
                                      <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">
                                          75
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </button>
                                  <div className="dropdown-menu ">
                                    <div
                                      className="inner show"
                                      role="listbox"
                                      id="bs-select-14"
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
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 className="list-title">Education</h5>
                  <a href="#" className="add-more-btn text-thm">
                    <i className="icon far fa-plus mr10" />
                    Add Aducation
                  </a>
                </div>
                <div className="position-relative">
                  <div className="educational-quality">
                    <div className="m-circle text-thm">M</div>
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a
                            href="#"
                            className="icon me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Edit"
                            aria-label="Edit"
                          >
                            <span className="flaticon-pencil" />
                          </a>
                          <a
                            href="#"
                            className="icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Delete"
                            aria-label="Delete"
                          >
                            <span className="flaticon-delete" />
                          </a>
                        </div>
                      </div>
                      <span className="tag">2018 - 2020</span>
                      <h5 className="mt15">Bachlors in Fine Arts</h5>
                      <h6 className="text-thm">Modern College</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum <br className="d-none d-lg-block" /> primis
                        in faucibus primis in faucibus primis in faucibus.
                      </p>
                    </div>
                    <div className="m-circle before-none text-thm">M</div>
                    <div className="wrapper mb30 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a
                            href="#"
                            className="icon me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Edit"
                            aria-label="Edit"
                          >
                            <span className="flaticon-pencil" />
                          </a>
                          <a
                            href="#"
                            className="icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Delete"
                            aria-label="Delete"
                          >
                            <span className="flaticon-delete" />
                          </a>
                        </div>
                      </div>
                      <span className="tag">2021 - 2022</span>
                      <h5 className="mt15">Computer Science</h5>
                      <h6 className="text-thm">Harvartd University</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum <br className="d-none d-lg-block" /> primis
                        in faucibus primis in faucibus.
                      </p>
                    </div>
                  </div>
                  <div className="text-start">
                    <a className="ud-btn btn-thm" href="#">
                      Save
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 className="list-title">Work &amp; Experience</h5>
                  <a href="#" className="add-more-btn text-thm">
                    <i className="icon far fa-plus mr10" />
                    Add Experience
                  </a>
                </div>
                <div className="position-relative">
                  <div className="educational-quality">
                    <div className="m-circle text-thm">M</div>
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a
                            href="#"
                            className="icon me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Edit"
                            aria-label="Edit"
                          >
                            <span className="flaticon-pencil" />
                          </a>
                          <a
                            href="#"
                            className="icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Delete"
                            aria-label="Delete"
                          >
                            <span className="flaticon-delete" />
                          </a>
                        </div>
                      </div>
                      <span className="tag">2018 - 2020</span>
                      <h5 className="mt15">UX Designer</h5>
                      <h6 className="text-thm">Dropbox</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum <br className="d-none d-lg-block" /> primis
                        in faucibus.
                      </p>
                    </div>
                    <div className="m-circle before-none text-thm">M</div>
                    <div className="wrapper mb30 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a
                            href="#"
                            className="icon me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Edit"
                            aria-label="Edit"
                          >
                            <span className="flaticon-pencil" />
                          </a>
                          <a
                            href="#"
                            className="icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Delete"
                            aria-label="Delete"
                          >
                            <span className="flaticon-delete" />
                          </a>
                        </div>
                      </div>
                      <span className="tag">2021 - 2022</span>
                      <h5 className="mt15">Art Director</h5>
                      <h6 className="text-thm">amazon</h6>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum <br className="d-none d-lg-block" /> primis
                        in faucibus.
                      </p>
                    </div>
                  </div>
                  <div className="text-start">
                    <a className="ud-btn btn-thm" href="#">
                      Save
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 className="list-title">Awards</h5>
                  <a href="#" className="add-more-btn text-thm">
                    <i className="icon far fa-plus mr10" />
                    Add Awards
                  </a>
                </div>
                <div className="position-relative">
                  <div className="educational-quality ps-0">
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a
                            href="#"
                            className="icon me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Edit"
                            aria-label="Edit"
                          >
                            <span className="flaticon-pencil" />
                          </a>
                          <a
                            href="#"
                            className="icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Delete"
                            aria-label="Delete"
                          >
                            <span className="flaticon-delete" />
                          </a>
                        </div>
                      </div>
                      <span className="tag">2018 - 2020</span>
                      <h5 className="mt15">UI UX Design</h5>
                      <h6 className="text-thm">Udemy</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum <br className="d-none d-lg-block" /> primis
                        in faucibus.
                      </p>
                    </div>
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a
                            href="#"
                            className="icon me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Edit"
                            aria-label="Edit"
                          >
                            <span className="flaticon-pencil" />
                          </a>
                          <a
                            href="#"
                            className="icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Delete"
                            aria-label="Delete"
                          >
                            <span className="flaticon-delete" />
                          </a>
                        </div>
                      </div>
                      <span className="tag">2021 - 2022</span>
                      <h5 className="mt15">App Design</h5>
                      <h6 className="text-thm">Google</h6>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum <br className="d-none d-lg-block" /> primis
                        in faucibus.
                      </p>
                    </div>
                  </div>
                  <div className="text-start">
                    <a className="ud-btn btn-thm" href="#">
                      Save
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Change password</h5>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Old Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="********"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              New Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="********"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Confirm New Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="********"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-start">
                            <a
                              className="ud-btn btn-thm"
                              href="page-contact.html"
                            >
                              Change Password
                              <i className="fal fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="bdrb1 pb15 mb25">
                      <h5 className="list-title">Change password</h5>
                    </div>
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-12">
                          <h6>Close account</h6>
                          <p className="text">
                            Warning: If you close your account, you will be
                            unsubscribed from all your 5 courses, and will lose
                            access forever.
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Enter Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="********"
                            />
                          </div>
                          <div className="text-start">
                            <a
                              className="ud-btn btn-thm"
                              href="page-contact.html"
                            >
                              Change Password
                              <i className="fal fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
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
                          aria-owns="bs-select-15"
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
                            id="bs-select-15"
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
                          aria-owns="bs-select-16"
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
                            id="bs-select-16"
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

export default Dash_My_Profile