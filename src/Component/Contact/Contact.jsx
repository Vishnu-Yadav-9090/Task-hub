import React from 'react'

const Contact = () => {
  
  return (
    <>
      {/* Breadcumb Sections  */}
      <section class="breadcumb-section wow fadeInUp">
        <div
          class="cta-commmon-v1 mt40 cta-banner bgc-thm2 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
          <img class="left-top-img wow zoomIn" src="images/vector-img/left-top.png" alt=""/>
          <img class="right-bottom-img wow zoomIn" src="images/vector-img/right-bottom.png" alt=""/>
          <div class="container">
            <div class="row">
              <div class="col-xl-5">
                <div class="position-relative wow fadeInUp" data-wow-delay="300ms">
                  <h2 class="text-white">Get in Touch</h2>
                  <p class="text mb0 text-white">We'd love to talk about how we can help you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Contact Info  */}
      <section class="pt-0">
        <div class="container">
          <div class="row wow fadeInUp" data-wow-delay="300ms">
            <div class="col-lg-6">
              <div class="position-relative mt40">
                <div class="main-title">
                  <h4 class="form-title mb25">Stay Connected with Us.</h4>
                  <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit tempora repellat.
                  </p>
                </div>
                <div class="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div class="icon flex-shrink-0"><span class="flaticon-tracking"></span></div>
                  <div class="details">
                    <h5 class="title">Address</h5>
                    <p class="mb-0 text">7280 East Birchwood Ave <br/> Bronx, NY 10472, New York.</p>
                  </div>
                </div>
                <div class="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div class="icon flex-shrink-0"><span class="flaticon-call"></span></div>
                  <div class="details">
                    <h5 class="title">Phone</h5>
                    <p class="mb-0 text">+(0) 792 34 02 01</p>
                  </div>
                </div>
                <div class="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div class="icon flex-shrink-0"><span class="flaticon-mail"></span></div>
                  <div class="details">
                    <h5 class="title">Email</h5>
                    <p class="mb-0 text">example@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-page-form default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
                <h4 class="form-title mb25">Share a bit about yourself</h4>
                <p class="text mb30">If you have any inquiries or simply want to extend a greeting, contact us.</p>
                <form action="#" class="form-style1">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb20">
                        <label class="heading-color ff-heading fw500 mb10" for="">Name</label>
                        <input type="text" class="form-control" placeholder="Jone"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb20">
                        <label class="heading-color ff-heading fw500 mb10" for="">Email</label>
                        <input type="email" class="form-control" placeholder="example@gmail.com"/>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb20">
                        <label class="heading-color ff-heading fw500 mb10" for="">Messages</label>
                        <textarea name="" id="" cols="30" rows="6" placeholder="How can we help you?"></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="">
                        <a class="ud-btn btn-thm" href="page-contact.html">Send Messages<i
                            class="fal fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map  */}
      <section class="p-0 wow fadeInUp" data-wow-delay="300ms">
        <div class="mx-auto maxw1700 bdrs16 position-relative mx20-lg">
          <iframe class="contact-page-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48385.97270622206!2d-74.1099304142241!3d40.71530223379986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d225bfafdd%3A0x249f013a2cd25d9!2sJersey%20City%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1693145289422!5m2!1sen!2sbd"
            width="600" height="450" style={{ border: "0px" }} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      {/* Faq  */}
      <section class="pb70">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
              <div class="main-title text-center">
                <h2 class="title">Frequently Asked Questions</h2>
                <p class="paragraph mt10">Numquam acorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
          <div class="row wow fadeInUp" data-wow-delay="300ms">
            <div class="col-lg-8 mx-auto">
              <div class="ui-content">
                <div class="accordion-style1 faq-page">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item active">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Which ways of
                          payment are currently endorsed?</button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque repellat facere ipsum quasi,
                          officia animi libero liquid. Quia, quo obcaecati.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Is it possible
                          for me to cancel at any time?</button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-parent="#accordionExample">
                        <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque repellat facere ipsum quasi,
                          officia animi libero liquid. Quia, quo obcaecati.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How do I
                          get a receipt for my purchase?</button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-parent="#accordionExample">
                        <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque repellat facere ipsum quasi,
                          officia animi libero liquid. Quia, quo obcaecati.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What type of
                          license is necessary for my situation?</button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-parent="#accordionExample">
                        <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque repellat facere ipsum quasi,
                          officia animi libero liquid. Quia, quo obcaecati.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How can I
                          access a theme I've bought?</button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-parent="#accordionExample">
                        <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque repellat facere ipsum quasi,
                          officia animi libero liquid. Quia, quo obcaecati.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a class="scrollToHome" href="#"><i class="fas fa-angle-up"></i></a>
    </>
  )
}

export default Contact