import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     {/*  Our Footer */}
     <section className="footer-style1 pt25 pb-0">
        <div className="container">
          <div className="row bb-white-light pb10 mb60">
            <div className="col-md-7">
              <div
                className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
                <Link className="fz17 fw500 text-white mr15-md mr30" >Terms of Service</Link>
                <Link className="fz17 fw500 text-white mr15-md mr30" >Privacy Policy</Link>
                <Link className="fz17 fw500 text-white" >Site Map</Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className="social-widget text-center text-md-end">
                <div className="social-style1">
                  <span className="text-white me-2 fw500 fz17">Follow us:</span><Link ><i
                      className="fab fa-facebook-f list-inline-item"></i></Link>
                  
                  <Link ><i className="fab fa-instagram list-inline-item"></i></Link>
                  <Link ><i className="fab fa-linkedin-in list-inline-item"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="link-style1 mb-4 mb-sm-5">
                <h5 className="text-white mb15">About</h5>
                <div className="link-list">
                  <Link >Careers</Link>
                  <Link >Press & News</Link>
                  <Link >Partnerships</Link>
                  <Link >Privacy Policy</Link>
                  <Link >Terms of Service</Link>
                  <Link >Investor Relations</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="link-style1 mb-4 mb-sm-5">
                <h5 className="text-white mb15">Categories</h5>
                <ul className="ps-0">
                  <li><Link >Graphics & Design</Link></li>
                  <li><Link >Digital Marketing</Link></li>
                  <li><Link >Writing & Translation</Link></li>
                  <li><Link >Video & Animation</Link></li>
                  <li><Link >Music & Audio</Link></li>
                  <li><Link >Programming & Tech</Link></li>
                  <li><Link >Data</Link></li>
                  <li><Link >Business</Link></li>
                  <li><Link >Lifestyle</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="link-style1 mb-4 mb-sm-5">
                <h5 className="text-white mb15">Support</h5>
                <ul className="ps-0">
                  <li><Link >Help & Support</Link></li>
                  <li><Link >Trust & Safety</Link></li>
                  <li><Link >Selling on Taskhub</Link></li>
                  <li><Link >Buying on Taskhub</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget">
                <div className="footer-widget mb-4 mb-sm-5">
                  <form action="" className="mailchimp-widget">
                    <h5 className="title text-white mb20">Subscribe</h5>
                    <div className="mailchimp-style1">
                      <input type="email" className="form-control" placeholder="Your email address"/>
                      <button type="submit">Send</button>
                    </div>
                  </form>
                </div>
                <div className="app-widget mb-4 mb-sm-5">
                  <h5 className="title text-white mb20">Apps</h5>
                  <div className="row mb-4 mb-lg-5">
                    <div className="col-lg-12">
                      <Link className="app-list d-flex align-items-center" >
                        <i className="fab fa-google-play fz15 mr15"></i>
                        <h6 className="app-title fz15 fw400 mb-0">Android App</h6>
                      </Link>
                      <Link className="app-list d-flex align-items-center" >
                        <i className="fab fa-google-play fz15 mr15"></i>
                        <h6 className="app-title fz15 fw400 mb-0">Android App</h6>
                      </Link>
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
                <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">&copy; 2024 Themebracket. All
                  rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer_bottom_right_btns text-center text-lg-end">
                <ul className="p-0 m-0">
                  <li className="list-inline-item">
                    <select className="selectpicker show-tick">
                      <option>US$ USD</option>
                      <option>Euro</option>
                      <option>Pound</option>
                    </select>
                  </li>
                  <li className="list-inline-item">
                    <select className="selectpicker show-tick">
                      <option>English</option>
                      <option>Frenc</option>
                      <option>Italian</option>
                      <option>Spanish</option>

                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer