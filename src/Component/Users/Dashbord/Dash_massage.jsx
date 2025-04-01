import React from 'react'

const Dash_massage = () => {
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
                          className="dropdown-item active"
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
                          className="dropdown-item"
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
            <a
              href="page-dashboard-message.html"
              className="items-center -is-active"
            >
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
            <a href="page-dashboard-profile.html" className="items-center">
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
                    <li className="active">
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
                    <li>
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
            <div className="col-lg-12">
              <div className="dashboard_title_area">
                <h2>Dashboard</h2>
                <p className="text">
                  Qui debitis maiores optio hic neque nihil, quisquam minus.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb40">
            <div className="col-lg-6 col-xl-5 col-xxl-4">
              <div className="message_container">
                <div className="inbox_user_list">
                  <div className="iu_heading pr35">
                    <div className="chat_user_search">
                      <form className="d-flex align-items-center">
                        <button className="btn" type="submit">
                          <span className="far fa-magnifying-glass" />
                        </button>
                        <input
                          className="form-control"
                          style={{ outline: 0 }}
                          type="search"
                          placeholder="Serach"
                          aria-label="Search"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="chat-member-list pr20">
                    <div className="list-item pt5">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms1.png"
                            alt="ms1.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Darlene Robertson
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms2.png"
                            alt="ms2.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Jane Cooper
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                              <div className="m_notif">2</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms3.png"
                            alt="ms3.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Arlene McCoy
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                              <div className="m_notif online">2</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms4.png"
                            alt="ms4.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Albert Flores
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms5.png"
                            alt="ms5.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Cameron Williamson
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                              <div className="m_notif away">2</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms6.png"
                            alt="ms6.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Watson Kristin{" "}
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms7.png"
                            alt="ms7.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Annette Black
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                              <div className="m_notif busy">2</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms8.png"
                            alt="ms8.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Jacob Jones
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms1.png"
                            alt="ms1.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Vincent Porter
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="list-item">
                      <a href="#">
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="img-fluid float-start rounded-circle mr10"
                            src="images/inbox/ms2.png"
                            alt="ms2.png"
                          />
                          <div className="d-sm-flex">
                            <div className="d-inline-block">
                              <div className="fz15 fw500 dark-color ff-heading mb-0">
                                Jacob Brown
                              </div>
                              <p className="preview">Head of Development</p>
                            </div>
                            <div className="iul_notific">
                              <small>35 mins</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 col-xxl-8">
              <div className="message_container mt30-md">
                <div className="user_heading px-0 mx30">
                  <div className="wrap">
                    <img
                      className="img-fluid mr10"
                      src="images/inbox/ms3.png"
                      alt="ms3.png"
                    />
                    <div className="meta d-sm-flex justify-content-sm-between align-items-center">
                      <div className="authors">
                        <h6 className="name mb-0">Arlene McCoy</h6>
                        <p className="preview">Active</p>
                      </div>
                      <div>
                        <a
                          className="text-decoration-underline fz14 fw500 text-red ff-heading"
                          href="#"
                        >
                          Delete Conversation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inbox_chatting_box" style={{}}>
                  <ul className="chatting_content">
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms4.png"
                          alt="ms4.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>
                        How likely are you to recommend our company to your
                        friends and family?
                      </p>
                    </li>
                    <li className="reply float-end">
                      <div className="d-flex align-items-center justify-content-end mb15">
                        <div className="title fz15">
                          <small className="mr10">35 mins</small> You
                        </div>
                        <img
                          className="img-fluid rounded-circle align-self-end ml10"
                          src="images/inbox/ms5.png"
                          alt="ms5.png"
                        />
                      </div>
                      <p>
                        Hey there, we’re just writing to let you know that
                        you’ve been subscribed to a repository on GitHub.
                      </p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms5.png"
                          alt="ms5.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>Ok, Understood!</p>
                    </li>
                    <li className="reply float-end">
                      <div className="d-flex align-items-center justify-content-end mb15">
                        <div className="title fz15">
                          <small className="mr10">35 mins</small> You
                        </div>
                        <img
                          className="img-fluid rounded-circle align-self-end ml10"
                          src="images/inbox/ms5.png"
                          alt="ms5.png"
                        />
                      </div>
                      <p>The project finally complete! Let's go to!.</p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms2.png"
                          alt="ms2.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>Let's go!</p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms2.png"
                          alt="ms2.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms2.png"
                          alt="ms2.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>Hello, John!</p>
                    </li>
                    <li className="reply float-end">
                      <div className="d-flex align-items-center justify-content-end mb15">
                        <div className="title fz15">
                          <small className="mr10">35 mins</small> You
                        </div>
                        <img
                          className="img-fluid rounded-circle align-self-end ml10"
                          src="images/inbox/ms3.png"
                          alt="ms3.png"
                        />
                      </div>
                      <p>
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </p>
                    </li>
                    <li className="reply float-end">
                      <div className="d-flex align-items-center justify-content-end mb15">
                        <div className="title fz15">
                          <small className="mr10">35 mins</small> You
                        </div>
                        <img
                          className="img-fluid rounded-circle align-self-end ml10"
                          src="images/inbox/ms3.png"
                          alt="ms3.png"
                        />
                      </div>
                      <p>Are we meeting today?</p>
                    </li>
                    <li className="reply float-end">
                      <div className="d-flex align-items-center justify-content-end mb15">
                        <div className="title fz15">
                          <small className="mr10">35 mins</small> You
                        </div>
                        <img
                          className="img-fluid rounded-circle align-self-end ml10"
                          src="images/inbox/ms3.png"
                          alt="ms3.png"
                        />
                      </div>
                      <p>The project finally complete! Let's go to!</p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms2.png"
                          alt="ms2.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>Let's go!</p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms2.png"
                          alt="ms2.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </p>
                    </li>
                    <li className="reply float-end">
                      <div className="d-flex align-items-center justify-content-end mb15">
                        <div className="title fz15">
                          <small className="mr10">35 mins</small> You
                        </div>
                        <img
                          className="img-fluid rounded-circle align-self-end ml10"
                          src="images/inbox/ms3.png"
                          alt="ms3.png"
                        />
                      </div>
                      <p>Are we meeting today?</p>
                    </li>
                    <li className="reply float-end">
                      <div className="d-flex align-items-center justify-content-end mb15">
                        <div className="title fz15">
                          <small className="mr10">35 mins</small> You
                        </div>
                        <img
                          className="img-fluid rounded-circle align-self-end ml10"
                          src="images/inbox/ms3.png"
                          alt="ms3.png"
                        />
                      </div>
                      <p>The project finally complete! Let's go to!</p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms2.png"
                          alt="ms2.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>Let's go!</p>
                    </li>
                    <li className="sent float-start">
                      <div className="d-flex align-items-center mb15">
                        <img
                          className="img-fluid rounded-circle align-self-start mr10"
                          src="images/inbox/ms2.png"
                          alt="ms2.png"
                        />
                        <div className="title fz15">
                          Albert Flores <small className="ml10">35 mins</small>
                        </div>
                      </div>
                      <p>
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mi_text">
                  <div className="message_input">
                    <form className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Type a Message"
                        aria-label="Search"
                      />
                      <button className="btn ud-btn btn-thm">
                        Send Message
                        <i className="fal fa-arrow-right-long" />
                      </button>
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
                          aria-owns="bs-select-1"
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

export default Dash_massage