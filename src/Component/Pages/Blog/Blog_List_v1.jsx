import React from 'react'

const Blog_List_v1 = () => {
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
  <section className="pt40 pb0">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title mb50">
            <h2 className="title">Taskhub Blog</h2>
            <p className="text mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section Area */}
  <section className="our-blog pt-0">
    <div className="container">
      <div
        className="row wow fadeInUp"
        data-wow-delay="300ms"
        style={{
          visibility: "visible",
          animationDelay: "300ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="col-xl-12">
          <div className="navtab-style1 blog-page-style">
            <nav>
              <div className="nav nav-tabs mb30" id="nav-tab2" role="tablist">
                <button
                  className="nav-link active fw600"
                  id="nav-item1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item1"
                  type="button"
                  role="tab"
                  aria-controls="nav-item1"
                  aria-selected="true"
                >
                  All
                </button>
                <button
                  className="nav-link fw600"
                  id="nav-item2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item2"
                  type="button"
                  role="tab"
                  aria-controls="nav-item2"
                  aria-selected="false"
                >
                  Freelancer
                </button>
                <button
                  className="nav-link fw600"
                  id="nav-item3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item3"
                  type="button"
                  role="tab"
                  aria-controls="nav-item3"
                  aria-selected="false"
                >
                  Graphics Design
                </button>
                <button
                  className="nav-link fw600"
                  id="nav-item4-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item4"
                  type="button"
                  role="tab"
                  aria-controls="nav-item4"
                  aria-selected="false"
                >
                  App Developer
                </button>
                <button
                  className="nav-link fw600"
                  id="nav-item5-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item5"
                  type="button"
                  role="tab"
                  aria-controls="nav-item5"
                  aria-selected="false"
                >
                  Digital Marketing
                </button>
                <button
                  className="nav-link fw600"
                  id="nav-item6-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item6"
                  type="button"
                  role="tab"
                  aria-controls="nav-item6"
                  aria-selected="false"
                >
                  Music &amp; Audio
                </button>
                <button
                  className="nav-link fw600"
                  id="nav-item7-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item7"
                  type="button"
                  role="tab"
                  aria-controls="nav-item7"
                  aria-selected="false"
                >
                  Video &amp; Audio
                </button>
              </div>
            </nav>
          </div>
          <div className="navtab-style1">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active fz15 text"
                id="nav-item1"
                role="tabpanel"
                aria-labelledby="nav-item1-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Start an online business and work from home
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Front becomes an official Instagram Marketing
                            Partner
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Engendering a culture of professional development
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Increasing engagement with Instagram
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            11 Tips to Help You Get New Clients Through Cold
                            Calling
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            How to “Woo” a Recruiter and Land Your Dream Job
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Hey Job Seeker, It’s Time To Get Up And Get Hired
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            4 Learning Management System Design Tips For Better
                            eLearning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            A Better Alternative To Grading Student Writing
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Exactly How Technology Can Make Reading Better
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            Why Public Schools Should Continue To Use Remote
                            Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            The Benefits Of Using Technology In Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="nav-item2"
                role="tabpanel"
                aria-labelledby="nav-item2-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Start an online business and work from home
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Front becomes an official Instagram Marketing
                            Partner
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Engendering a culture of professional development
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Increasing engagement with Instagram
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            11 Tips to Help You Get New Clients Through Cold
                            Calling
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            How to “Woo” a Recruiter and Land Your Dream Job
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Hey Job Seeker, It’s Time To Get Up And Get Hired
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            4 Learning Management System Design Tips For Better
                            eLearning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            A Better Alternative To Grading Student Writing
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Exactly How Technology Can Make Reading Better
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            Why Public Schools Should Continue To Use Remote
                            Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            The Benefits Of Using Technology In Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="nav-item3"
                role="tabpanel"
                aria-labelledby="nav-item3-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Start an online business and work from home
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Front becomes an official Instagram Marketing
                            Partner
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Engendering a culture of professional development
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Increasing engagement with Instagram
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            11 Tips to Help You Get New Clients Through Cold
                            Calling
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            How to “Woo” a Recruiter and Land Your Dream Job
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Hey Job Seeker, It’s Time To Get Up And Get Hired
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            4 Learning Management System Design Tips For Better
                            eLearning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            A Better Alternative To Grading Student Writing
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Exactly How Technology Can Make Reading Better
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            Why Public Schools Should Continue To Use Remote
                            Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            The Benefits Of Using Technology In Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="nav-item4"
                role="tabpanel"
                aria-labelledby="nav-item4-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Start an online business and work from home
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Front becomes an official Instagram Marketing
                            Partner
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Engendering a culture of professional development
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Increasing engagement with Instagram
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            11 Tips to Help You Get New Clients Through Cold
                            Calling
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            How to “Woo” a Recruiter and Land Your Dream Job
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Hey Job Seeker, It’s Time To Get Up And Get Hired
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            4 Learning Management System Design Tips For Better
                            eLearning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            A Better Alternative To Grading Student Writing
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Exactly How Technology Can Make Reading Better
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            Why Public Schools Should Continue To Use Remote
                            Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            The Benefits Of Using Technology In Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="nav-item5"
                role="tabpanel"
                aria-labelledby="nav-item5-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Start an online business and work from home
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Front becomes an official Instagram Marketing
                            Partner
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Engendering a culture of professional development
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Increasing engagement with Instagram
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            11 Tips to Help You Get New Clients Through Cold
                            Calling
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            How to “Woo” a Recruiter and Land Your Dream Job
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Hey Job Seeker, It’s Time To Get Up And Get Hired
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            4 Learning Management System Design Tips For Better
                            eLearning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            A Better Alternative To Grading Student Writing
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Exactly How Technology Can Make Reading Better
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            Why Public Schools Should Continue To Use Remote
                            Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            The Benefits Of Using Technology In Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="nav-item6"
                role="tabpanel"
                aria-labelledby="nav-item6-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Start an online business and work from home
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Front becomes an official Instagram Marketing
                            Partner
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Engendering a culture of professional development
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Increasing engagement with Instagram
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            11 Tips to Help You Get New Clients Through Cold
                            Calling
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            How to “Woo” a Recruiter and Land Your Dream Job
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Hey Job Seeker, It’s Time To Get Up And Get Hired
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            4 Learning Management System Design Tips For Better
                            eLearning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            A Better Alternative To Grading Student Writing
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Exactly How Technology Can Make Reading Better
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            Why Public Schools Should Continue To Use Remote
                            Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            The Benefits Of Using Technology In Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="nav-item7"
                role="tabpanel"
                aria-labelledby="nav-item7-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Start an online business and work from home
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Front becomes an official Instagram Marketing
                            Partner
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Engendering a culture of professional development
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Increasing engagement with Instagram
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            11 Tips to Help You Get New Clients Through Cold
                            Calling
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            How to “Woo” a Recruiter and Land Your Dream Job
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Hey Job Seeker, It’s Time To Get Up And Get Hired
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            4 Learning Management System Design Tips For Better
                            eLearning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/about/about-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            A Better Alternative To Grading Student Writing
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            Exactly How Technology Can Make Reading Better
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1 line-clamp2">
                          <a href="page-blog-single.html">
                            Why Public Schools Should Continue To Use Remote
                            Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          className="w-100"
                          src="images/blog/blog-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <a className="date" href="#">
                          September 2, 2024
                        </a>
                        <h4 className="title mt-1">
                          <a href="page-blog-single.html">
                            The Benefits Of Using Technology In Learning
                          </a>
                        </h4>
                        <p className="text mb-0">
                          Lorem ipsum dolor sit amet adipisicing elit. Tempore,
                          online business qui.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mbp_pagination text-center">
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
            <li className="page-item">
              <a className="page-link" href="">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                20
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                <span className="fas fa-angle-right" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
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

export default Blog_List_v1