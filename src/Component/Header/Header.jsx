import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <> 
      {/*  Main Header Nav  */}
    <header className="header-nav nav-homepage-style stricky main-menu">
      {/*  Ace Responsive Menu  */}
      <nav className="posr">
        <div className="container-fluid posr menu_bdrt1 px30">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto px-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="logos br-white-light pr30 pr5-xl">
                  <Link className="header-logo logo1" ><img src="images/header-logo.svg"
                      alt="Header Logo"/></Link>
                  <Link className="header-logo logo2" ><img src="images/header-logo2.svg"
                      alt="Header Logo"/></Link>
                </div>
                <div className="home1_style">
                  <div id="mega-menu">
                    <Link className="btn-mega fw500"><span className="pl30 pl10-xl pr5 fz15 vam flaticon-menu"></span>
                      Categories</Link>
                    <ul className="menu ps-0">
                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-developer"></span> <span
                            className="menu-title">Development & IT</span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-web-design-1"></span> <span
                            className="menu-title">Creative & Design </span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      
                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-digital-marketing"></span> <span
                            className="menu-title">Digital Marketing</span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-translator"></span> <span
                            className="menu-title">Writing & Translation</span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-microphone"></span> <span
                            className="menu-title">Music & Audio</span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-video-file"></span> <span
                            className="menu-title">Video & Animation</span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-ruler"></span> <span
                            className="menu-title">Engineering & Architecture</span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li> <Link className="dropdown"> <span className="menu-icn flaticon-goal"></span> <span
                            className="menu-title">Finance & Accounting</span> </Link>
                        <div className="drop-menu d-flex justify-content-between">
                          <div className="one-third">
                            <div className="h6 cat-title">Web & Logo Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Website Design</Link></li>
                              <li><Link href="">App DesignUX Design</Link></li>
                              <li><Link href="">Landing Page Design</Link></li>
                              <li><Link href="">Icon Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Marketing Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Social Media Design</Link></li>
                              <li><Link href="">Email Design</Link></li>
                              <li><Link href="">Web Banners</Link></li>
                              <li><Link href="">Signage Design</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Art & Illustration</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Illustration</Link></li>
                              <li><Link href="">NFT Art</Link></li>
                              <li><Link href="">Pattern Design</Link></li>
                              <li><Link href="">Portraits & Caricatures</Link></li>
                              <li><Link href="">Cartoons & Comics</Link></li>
                              <li><Link href="">Tattoo Design</Link></li>
                              <li><Link href="">Storyboards</Link></li>
                            </ul>
                            <div className="h6 cat-title">Gaming</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">Game Art</Link></li>
                              <li><Link href="">Graphics for Streamers</Link></li>
                              <li><Link href="">Twitch Store</Link></li>
                            </ul>
                          </div>
                          <div className="one-third">
                            <div className="h6 cat-title">Visual Design</div>
                            <ul className="ps-0 mb40">
                              <li><Link href="">Image Editing</Link></li>
                              <li><Link href="">Presentation Design</Link></li>
                              <li><Link href="">Infographic Design</Link></li>
                              <li><Link href="">Vector Tracing</Link></li>
                              <li><Link href="">Resume Design</Link></li>
                            </ul>
                            <div className="h6 cat-title">Print Design</div>
                            <ul className="ps-0 mb-0">
                              <li><Link href="">T-Shirts & Merchandise</Link></li>
                              <li><Link href="">Flyer Design</Link></li>
                              <li><Link href="">Brochure Design</Link></li>
                              <li><Link href="">Poster Design</Link></li>
                              <li><Link href="">Catalog Design</Link></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto px-0">
              <div className="d-flex align-items-center">
                {/*  Responsive Menu Structure */}
                <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
                  <li className="visible_list"> <Link className="list-item"><span className="title">Home</span></Link>
                    {/*  Level Two */}
                    <ul>
                      <li><Link to={"/Home-v1"}>Home V1</Link></li>
                      <li><Link to={"/Home-v2"}>Home V2</Link></li>
                      <li><Link to={"/Home-v3"}>Home V3</Link></li>
                      <li><Link to={"/Home-v4"}>Home V4</Link></li>
                      <li><Link to={"/Home-v5"}>Home V5</Link></li>
                      <li><Link to={"/Home-v6"}>Home V6</Link></li>
                      <li><Link to={"/Home-v7"}>Home V7</Link></li>
                      <li><Link to={"/Home-v8"}>Home V8</Link></li>
                      <li><Link to={"/Home-v9"}>Home V9</Link></li>
                      <li><Link to={"/Home-v10"}>Home V10</Link></li>
                    </ul>
                  </li>
                  <li className="visible_list"> <Link className="list-item"><span className="title">Browse Jobs</span></Link>
                    <ul>
                      <li> <Link><span className="title">Services</span></Link>
                        <ul>
                          <li><Link to={"/Service-v1"}>Service v1</Link></li>
                          <li><Link to={"/Service-v2"}>Service v2</Link></li>
                          <li><Link to={"/Service-v3"}>Service v3</Link></li>
                          <li><Link to={"/Service-v4"}>Service v4</Link></li>
                          <li><Link to={"/Service-v5"}>Service v5</Link></li>
                          <li><Link to={"/Service-v6"}>Service v6</Link></li>
                          <li><Link to={"/Service-v7"}>Service v7</Link></li>
                          <li><Link to={"/Service-all"}>Service All</Link></li>
                          <li><Link to={"/Service-single"}>Service Single</Link></li>
                        </ul>
                      </li>
                      <li> <Link><span className="title">Projects</span></Link>
                        <ul>
                          <li><Link to={"/Project-v1"}>Project v1</Link></li>
                          <li><Link to={"/Project-single"}>Project Single</Link></li>
                        </ul>
                      </li>
                      <li> <Link><span className="title">Job View</span></Link>
                        <ul>
                          <li><Link to={"/Job-list-v1"}>Job list v1</Link></li>
                          <li><Link to={"/Job-list-v2"}>Job list v2</Link></li>
                          <li><Link to={"/Job-list-v3"}>Job list V3</Link></li>
                          <li><Link to={"/Job-Single"}>Job Single</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="visible_list"> <Link className="list-item"><span className="title">Users</span></Link>
                    <ul>
                      <li> <Link><span className="title">Dashboard</span></Link>
                        <ul>
                          <li><Link to={"/User-Dashboard" }>Dashboard</Link></li>
                          <li><Link to={"/User-Dashboard-Proposal"}>Proposal</Link></li>
                          <li><Link to={"/User-Dashboard-Saved"}>Saved</Link></li>
                          <li><Link to={"/User-Dashboard-Message"}>Message</Link></li>
                          <li><Link to={"/User-Dashboard-Reviews"}>Reviews</Link></li>
                          <li><Link to={"/User-Dashboard-Invoice"}>Invoice</Link></li>
                          <li><Link to={"/User-Dashboard-Payouts"}>Payouts</Link></li>
                          <li><Link to={"/User-Dashboard-Statement"}>Statement</Link></li>
                          <li><Link to={"/User-Dashboard-Manage-Service"}>Manage Service</Link></li>
                          <li><Link to={"/User-Dashboard-Add-Services"}>Add Services</Link></li>
                          <li><Link to={"/User-Dashboard-Manage-Jobs"}>Manage Jobs</Link></li>
                          <li><Link to={"/User-Dashboard-Manage-Project"}>Manage Project</Link></li>
                          <li><Link to={"/User-Dashboard-Create-Project" }>Create Project</Link></li>
                          <li><Link to={"/User-Dashboard-My-Profile"}>My Profile</Link></li>
                        </ul>
                      </li>
                      <li> <Link><span className="title">Employee</span></Link>
                        <ul>
                          <li><Link to={"/User-Employee-Employee-v1"}>Employee V1</Link></li>
                          <li><Link to={"/User-Employee-Employee-v2"}>Employee V2</Link></li>
                          <li><Link to={"/User-Employee-Employee-single"}>Employee Single</Link></li>
                        </ul>
                      </li>
                      <li> <Link><span className="title">Freelancer</span></Link>
                        <ul>
                          <li><Link to={"/User-Freelancer-Freelancer-v1"}>Freelancer V1</Link></li>
                          <li><Link to={"/User-Freelancer-Freelancer-v2"}>Freelancer V2</Link></li>
                          <li><Link to={"/User-Freelancer-Freelancer-v3"}>Freelancer V3</Link></li>
                          <li><Link to={"/User-Freelancer-Freelancer-single"}>Freelancer Single</Link></li>
                        </ul>
                      </li>
                      <li> <Link to={"/become-seller"}><span className="title">Become Seller</span></Link></li>
                    </ul>
                  </li>
                  <li className="visible_list"> <Link className="list-item"><span className="title">Pages</span></Link>
                    <ul>
                      <li> <Link><span className="title">About</span></Link>
                        <ul>
                          <li><Link to={"/Pages-About-About-v1"}>About v1</Link></li>
                          <li><Link to={"/Pages-About-About-v2"}>About v2</Link></li>
                        </ul>
                      </li>
                      <li> <Link><span className="title">Blog</span></Link>
                        <ul>
                          <li><Link to={"/Pages-Blog-Blog-v1"}>List V1</Link></li>
                          <li><Link to={"/Pages-Blog-Blog-v2"}>List V2</Link></li>
                          <li><Link to={"/Pages-Blog-Blog-v3"}>List V3</Link></li>
                          <li><Link to={"/Pages-Blog-Blog-single" }>Single</Link></li>
                        </ul>
                      </li>
                      <li> <Link><span className="title">Shop</span></Link>
                        <ul>
                          <li><Link to={"/Pages-shop-List"}>List</Link></li>
                          <li><Link to={"/Pages-shop-Single"}>Single</Link></li>
                          <li><Link to={"/Pages-shop-Cart"}>Cart</Link></li>
                          <li><Link to={"/Pages-shop-Checkout"}>Checkout</Link></li>
                          <li><Link to={"/Pages-shop-Order"}>Order</Link></li>
                        </ul>
                      </li>
                      <li><Link to={"/contact"}>Contact</Link></li>
                      <li><Link to={"/Pages-404" }>404</Link></li>
                      <li><Link to={"/Pages-Faq"}>Faq</Link></li>
                      <li><Link to={"/Pages-Help"}>Help</Link></li>
                      <li><Link to={"/Pages-Invoices"}>Invoices</Link></li>
                      <li><Link to={"/sign-in"}>Login</Link></li>
                      <li><Link to={"/Pages-Pricing"}>Pricing</Link></li>
                      <li><Link to={"/join"}>Register</Link></li>
                      <li><Link to={"/Pages-Terms"}>Terms</Link></li>
                      <li><Link to={"/Pages-ul-Elements"}>UI Elements</Link></li>
                    </ul>
                  </li>
                  <li> <Link to={"/contact"} className="list-item">Contact</Link></li>
                </ul>
                <a className="login-info bdrl1 pl15-lg pl30" data-bs-toggle="modal" href="#exampleModalToggle"
                  role="button"><span className="flaticon-loupe"></span></a>
                <Link to={"/become-seller"} className="login-info mx15-lg mx30" ><span
                    className="d-none d-xl-inline-block">Become a</span> Seller</Link>
                <Link to={"/sign-in"} className="login-info mr15-lg mr30" >Sign in</Link>
                <Link to={"/join"} className="ud-btn btn-white add-joining">Join</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {/*  Search Modal  */}
    <div className="search-modal">
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                  className="fal fa-xmark"></i></button>
            </div>
            <div className="modal-body">
              <div className="popup-search-field search_area">
                <input type="text" className="form-control border-0" placeholder="What service are you looking for today?"/>
                <label><span className="far fa-magnifying-glass"></span></label>
                <button className="ud-btn btn-thm" type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hiddenbar-body-ovelay"></div>

    {/*  Mobile Nav   */}
    <div id="page" className="mobilie_header_nav stylehome1">
      <div className="mobile-menu">
        <div className="header bb-white-light">
          <div className="menu_and_widgets">
            <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
              <Link className="mobile_logo"><img src="images/header-logo.svg" alt=""/></Link>
              <div className="right-side text-end">
                <Link className="text-white" >join</Link>
                <Link className="menubar ml30" href="#menu"><img src="images/white-nav-icon.svg" alt=""/></Link>
              </div>
            </div>
          </div>
          <div className="posr">
            <div className="mobile_menu_close_btn"><span className="far fa-times"></span></div>
          </div>
        </div>
      </div>
      {/*  /.mobile-menu  */}
      <nav id="menu" className="">
        <ul>
          <li><span>Home</span>
            <ul>
              <li><Link >Home V1</Link></li>
              <li><Link >Home V2</Link></li>
              <li><Link >Home V3</Link></li>
              <li><Link >Home V4</Link></li>
              <li><Link >Home V5</Link></li>
              <li><Link >Home V6</Link></li>
              <li><Link >Home V7</Link></li>
              <li><Link >Home V8</Link></li>
              <li><Link >Home V9</Link></li>
              <li><Link >Home V10</Link></li>
            </ul>
          </li>
          <li><span>Browse Jobs</span>
            <ul>
              <li><span>Services</span>
                <ul>
                  <li><Link >Service v1</Link></li>
                  <li><Link >Service v2</Link></li>
                  <li><Link >Service v3</Link></li>
                  <li><Link >Service v4</Link></li>
                  <li><Link >Service v5</Link></li>
                  <li><Link >Service v6</Link></li>
                  <li><Link >Service v7</Link></li>
                  <li><Link to={"/Service-all"}>Service All</Link></li>
                  <li><Link >Service Single</Link></li>
                </ul>
              </li>
              <li><span>Projects</span>
                <ul>
                  <li><Link >Project v1</Link></li>
                  <li><Link >Project Single</Link></li>
                </ul>
              </li>
              <li><span>Job View</span>
                <ul>
                  <li><Link >Job list v1</Link></li>
                  <li><Link >Job list v2</Link></li>
                  <li><Link >Job list V3</Link></li>
                  <li><Link >Job Single</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><span>Users</span>
            <ul>
              <li><span>Dashboard</span>
                <ul>
                  <li><Link >Dashboard</Link></li>
                  <li><Link >Proposal</Link></li>
                  <li><Link >Saved</Link></li>
                  <li><Link >Message</Link></li>
                  <li><Link >Reviews</Link></li>
                  <li><Link >Invoice</Link></li>
                  <li><Link >Payouts</Link></li>
                  <li><Link >Statement</Link></li>
                  <li><Link >Manage Service</Link></li>
                  <li><Link >Add Services</Link></li>
                  <li><Link >Manage Jobs</Link></li>
                  <li><Link >Manage Project</Link></li>
                  <li><Link >Create Project</Link></li>
                  <li><Link >My Profile</Link></li>
                </ul>
              </li>
              <li><span>Employee</span>
                <ul>
                  <li><Link >Employee V1</Link></li>
                  <li><Link >Employee V2</Link></li>
                  <li><Link >Employee Single</Link></li>
                </ul>
              </li>
              <li><span>Freelancer</span>
                <ul>
                  <li><Link >Freelancer V1</Link></li>
                  <li><Link >Freelancer V2</Link></li>
                  <li><Link >Freelancer V3</Link></li>
                  <li><Link >Freelancer Single</Link></li>
                </ul>
              </li>
              <li><Link >Become Seller</Link></li>
            </ul>
          </li>
          <li><span>Pages</span>
            <ul>
              <li><span>About</span>
                <ul>
                  <li><Link >About v1</Link></li>
                  <li><Link >About v2</Link></li>
                </ul>
              </li>
              <li><span>Shop</span>
                <ul>
                  <li><Link >List</Link></li>
                  <li><Link >Single</Link></li>
                  <li><Link >Cart</Link></li>
                  <li><Link >Checkout</Link></li>
                  <li><Link >Order</Link></li>
                </ul>
              </li>
              <li><Link >Contact</Link></li>
              <li><Link >404</Link></li>
              <li><Link >Faq</Link></li>
              <li><Link >Help</Link></li>
              <li><Link >Invoices</Link></li>
              <li><Link >Login</Link></li>
              <li><Link >Pricing</Link></li>
              <li><Link>Register</Link></li>
              <li><Link >Terms</Link></li>
              <li><Link >UI Elements</Link></li>
            </ul>
          </li>
          <li><span>Blog</span>
            <ul>
              <li><Link >List V1</Link></li>
              <li><Link >List V2</Link></li>
              <li><Link >List V3</Link></li>
              <li><Link >Single</Link></li>
            </ul>
          </li>
          {/*  Only for Mobile View  */}
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Header