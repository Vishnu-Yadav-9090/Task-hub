import React from 'react'

const Ui_elements = () => {
  return (
    <>
     <div className="body_content">
  {/* UI Elements Sections */}
  <section className="pb-0 pb50">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcumb-style1">
            <h2 className="title mb-3">UI Elements</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* UI Elements Sections */}
  <section className="pt0 pb90 our-ui-elements">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="ui-content">
            <h5 className="title">Accordions</h5>
            <div className="accordion-style1 mb-4 mb-lg-5">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item active">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Which ways of payment are currently endorsed?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Is it possible for me to cancel at any time?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I get a receipt for my purchase?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What type of license is necessary for my situation?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How can I access a theme I've bought?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ui-content">
            <h5 className="title">Tabs</h5>
            <div className="navpill-style1 mb70">
              <ul className="nav nav-pills mb30" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active fw500 dark-color"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Development &amp; IT
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fw500 dark-color"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Creative &amp; Design{" "}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fw500 dark-color"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Digital Marketing
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade fz15 text show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                  neque repellat facere ipsum quasi, officia animi libero
                  liquid. Quia, quo obcaecati. Necessitatibus autem sit quos
                  mollitia, a ad? Numquam neque repellat facere ipsum quasi.
                </div>
                <div
                  className="tab-pane fade fz15 text"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  Dolor sit amet, consectetur adipisicing elit.Necessitatibus
                  autem sit quos mollitia, a ad? Numquam neque repellat facere
                  ipsum quasi, officia animi libero autem sit quos mollitia, a
                  ad? Numquam neque repellat facere ipsum liquid. Quia, quo
                  obcaecati.
                </div>
                <div
                  className="tab-pane fade fz15 text"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  Numquma ipsum dolor sit amet, consectetur adipisicing
                  elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                  neque repellat facere ipsum quasi, elit.Necessitatibus autem
                  sit quos mollitia, a ad? Numquam neque officia animi libero
                  liquid. Quia, quo obcaecati.
                </div>
              </div>
            </div>
            <div className="navtab-style1 mb-4 mb-lg-5 mt50">
              <nav>
                <div className="nav nav-tabs mb20" id="nav-tab2" role="tablist">
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
                    Items 1
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
                    Items 2
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
                    Items 3
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active fz15 text"
                  id="nav-item1"
                  role="tabpanel"
                  aria-labelledby="nav-item1-tab"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                  neque repellat facere ipsum quasi, officia animi libero
                  liquid. Quia, quo obcaecati.{" "}
                </div>
                <div
                  className="tab-pane fade fz15 text"
                  id="nav-item2"
                  role="tabpanel"
                  aria-labelledby="nav-item2-tab"
                >
                  Dolor sit amet, consectetur adipisicing elit.Necessitatibus
                  autem sit quos mollitia, a ad? Numquam neque repellat facere
                  ipsum quasi, officia animi libero liquid. Quia, quo obcaecati.{" "}
                </div>
                <div
                  className="tab-pane fade fz15 text"
                  id="nav-item3"
                  role="tabpanel"
                  aria-labelledby="nav-item3-tab"
                >
                  Fermentum Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Necessitatibus autem sit quos mollitia, a ad? Numquam
                  neque repellat facere ipsum quasi, Quia, quo obcaecati.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="ui-content">
            <h5 className="title">Table</h5>
            <div className="table-style1 table-responsive mb-4 mb-lg-5">
              <table className="table table-borderless">
                <thead className="thead-light">
                  <tr>
                    <th className="fz15 fw500" scope="col">
                      Description
                    </th>
                    <th className="fz15 fw500" scope="col">
                      Hour
                    </th>
                    <th className="fz15 fw500" scope="col">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Design UI/UX</td>
                    <td>15</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Design UI/UX</td>
                    <td>15</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Design UI/UX</td>
                    <td>15</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Design UI/UX</td>
                    <td>15</td>
                    <td>7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ui-content">
            <h5 className="title">Message Boxes</h5>
            <div className="message-alart-style1">
              <div
                className="alert alart_style_one alert-dismissible fade show mb20"
                role="alert"
              >
                Info: User pending action
                <i
                  className="far fa-xmark btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
              <div
                className="alert alart_style_two alert-dismissible fade show mb20"
                role="alert"
              >
                Warning: User has to be admin
                <i
                  className="far fa-xmark btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
              <div
                className="alert alart_style_three alert-dismissible fade show mb20"
                role="alert"
              >
                Error: Internal Server Error
                <i
                  className="far fa-xmark btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
              <div
                className="alert alart_style_four alert-dismissible fade show mb20"
                role="alert"
              >
                Success: Updated members status
                <i
                  className="far fa-xmark btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="ui-content">
            <h5 className="title">Buttons</h5>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="ui-content mb-4">
            <div className="button-list">
              <a href="#" className="ud-btn btn-thm mb25 me-4">
                Button Primary
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-dark mb25 me-4">
                Button Primary Hover
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-white mb25 me-4">
                Button Third
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-light-gray mb25 me-4">
                Button Third Hover
                <i className="fal fa-arrow-right-long" />
              </a>
              <a
                href="#"
                className="ud-btn btn-light-gray mb25 filter-btn-left me-4"
              >
                LeftSide HiddenBar
                <i className="fal fa-arrow-right-long" />
              </a>
              <a
                href="#"
                className="ud-btn btn-light-gray mb25 filter-btn-right me-4"
              >
                RightSide HiddenBar
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-thm2 mb25 me-4">
                Button Secondary
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-thm mb25">
                Button Secondary Hover
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-thm-border mb25 me-4">
                Button Third
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-light-gray mb25 me-4">
                Button Third Hover
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-white2 mb25 me-4">
                Button Third
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-light-thm mb25 me-4">
                Button Light Theme
                <i className="fal fa-arrow-right-long" />
              </a>
              <a href="#" className="ud-btn btn-transparent mb25 me-4">
                Button Fourth
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="ui-content mt10">
            <h5 className="title">Form</h5>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5">
          <div className="ui-content mb40">
            <div className="form-style1">
              <label className="form-label fw500 fz16 dark-color">Input</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5 offset-xl-1">
          <div className="ui-content mb40">
            <div className="form-style1">
              <label className="form-label fw500 fz16 dark-color">
                Input Focus
              </label>
              <input
                type="text"
                className="form-control active"
                placeholder="Your Name"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5">
          <div className="ui-content mb40">
            <div className="form-style1">
              <label className="form-label fw500 fz16 dark-color">
                Search Select boxes, Hover
              </label>
              <div className="bootselect-multiselect">
                <div
                  className="dropdown bootstrap-select"
                  style={{ width: "100%" }}
                >
                  <select
                    className="selectpicker"
                    data-live-search="true"
                    data-width="100%"
                  >
                    <option>Search</option>
                    <option data-tokens="Banking">Banking</option>
                    <option data-tokens="Digital&Creative">
                      Digital &amp; Creative
                    </option>
                    <option data-tokens="Retail">Retail</option>
                    <option data-tokens="Designer">Designer</option>
                    <option data-tokens="Developer">Developer</option>
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
                    title="Search"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">Search</div>
                      </div>{" "}
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div className="bs-searchbox">
                      <input
                        type="search"
                        className="form-control"
                        autoComplete="off"
                        role="combobox"
                        aria-label="Search"
                        aria-controls="bs-select-1"
                        aria-autocomplete="list"
                      />
                    </div>
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
        <div className="col-lg-6 col-xl-5 offset-xl-1">
          <div className="ui-content mb40">
            <div className="form-style1">
              <label className="form-label fw500 fz16 dark-color">
                Search Select boxes, Hover
              </label>
              <div className="bootselect-multiselect">
                <div className="dropdown bootstrap-select show-tick">
                  <select className="selectpicker" multiple="">
                    <option>Search</option>
                    <option>Banking</option>
                    <option>Digital &amp; Creative</option>
                    <option>Retail</option>
                    <option>Designer</option>
                    <option>Developer</option>
                  </select>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="btn dropdown-toggle bs-placeholder btn-light"
                    data-bs-toggle="dropdown"
                    role="combobox"
                    aria-owns="bs-select-2"
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
                      id="bs-select-2"
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
      </div>
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="ui-content mb40">
            <div className="form-style1">
              <label className="form-label fw500 fz16 dark-color">
                Textarea
              </label>
              <textarea
                name="text"
                id="textarea1"
                cols={30}
                rows={7}
                defaultValue={
                  "Should you seek answers dfadf dfa or d dfa merely want to extend a warm hello, we're available Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi unde quis ratione eum voluptatem nostrum. Error, autem quibusdam neque odio inventore ducimus reprehenderit necessitatibus cumque obcaecati odit laborum quisquam iure?"
                }
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5 offset-xl-1">
          <div className="row">
            <div className="col-auto">
              <div className="ui-content">
                <h5 className="title fz15 mb20 mt50">Radiobox</h5>
                <div className="radiobox-style1">
                  <div className="radio-element">
                    <div className="form-check d-flex align-items-center mb15">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Items
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center mb15">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Items
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center mb15">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        defaultChecked="checked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Items
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault4"
                      >
                        Items
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="ui-content">
                <h5 className="title fz15 mb20 mt50">Checkbox</h5>
                <div className="checkbox-style1">
                  <label className="custom_checkbox">
                    Items
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="custom_checkbox">
                    Items
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="custom_checkbox">
                    Items
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <label className="custom_checkbox">
                    Items
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="ui-content">
                <h5 className="title fz15 mb20 mt50">Switch</h5>
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
                      Items
                    </label>
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
                      Items
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="ui-content">
            <h5 className="title">Tooltips</h5>
            <div className="tooltip-list">
              <button
                type="button"
                className="ud-btn btn-gray me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="Tooltip on top"
              >
                Top
              </button>
              <button
                type="button"
                className="ud-btn btn-gray me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title=""
                data-bs-original-title="Tooltip on bottom"
              >
                Bottom
              </button>
              <button
                type="button"
                className="ud-btn btn-gray me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title=""
                data-bs-original-title="Tooltip on right"
              >
                Right
              </button>
              <button
                type="button"
                className="ud-btn btn-gray"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title=""
                data-bs-original-title="Tooltip on left"
              >
                Left
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ui-content">
            <h5 className="title">Progress bars</h5>
            <div className="progressbar-style1">
              <div className="progressbar-bg" />
              <div className="progressd-bar" style={{ width: "90%" }}>
                <span>90%</span>
              </div>
            </div>
            <div className="progressbar-style1 mt50">
              <div className="progressbar-bg" />
              <div className="progressd-bar" style={{ width: "50%" }}>
                <span>50%</span>
              </div>
            </div>
            <div className="progressbar-style1 mt50">
              <div className="progressbar-bg" />
              <div className="progressd-bar" style={{ width: "40%" }}>
                <span>40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="ui-content">
            <h5 className="title">Range Slider</h5>
            {/* Range Slider Desktop Version */}
            <div className="range-slider-style1 mb-4 mb-lg-5">
              <div className="range-wrapper">
                <div className="slider-range mt35 mb20 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
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
                  <input type="text" className="amount" placeholder="$20" />
                  <span className="fa-sharp fa-solid fa-minus mx-2 dark-color" />
                  <input type="text" className="amount2" placeholder="$61839" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="ui-content">
            <h5 className="title">Typography</h5>
            <h5 className="mb20">Promoting a Culture of Sharing for All</h5>
            <p className="mb25 ff-heading text">
              Forem ipsum dolor sit amet, consectetur adipisicing
              elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque
              repellat facere ipsum quasi, officia animi libero liquid. autem
              sit quos mollitia, a ad? Numquam neque repellat facere ipsum
              quasi, officia animi libero liquid. autem sit quos mollitia, a ad?
              Numquam neque repellat facere ipsum quasi, officia animi libero
              liquid. Quia, quo obcaecati.{" "}
            </p>
            <p className="ff-heading text mb60">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque
              repellat facere ipsum quasi, officia animi libero liquid. Quia,
              quo obcaecati. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Integer tristique elit
              lobortis purus bibendum, quis dictum metus mattis. Phasellus
              posuere felis sed eros porttitor mattis. Curabitur massa magna,
              tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa,
              at interdum mauris sollicitudin et.
            </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="blockquote-style1 mb-4 mb-lg-5">
            <blockquote className="blockquote">
              <p className="fst-italic fz15 fw500 ff-heading dark-color">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.Necessitatibus autem sit quos mollitia, a ad? Numquam neque
                repellat facere ipsum quasi, officia animi libero liquid. Quia,
                quo obcaecati.
              </p>
              <h6 className="quote-title">Luis Pickford</h6>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8">
          <div className="ui-content mt15">
            <h5 className="title">What you'll learn</h5>
          </div>
          <div className="row">
            <div className="col-auto">
              <div className="ui-content">
                <div className="list-style1">
                  <ul>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Become a UI/UX designer.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      You will be able to start earning money Figma skills.
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
            <div className="col-auto">
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
          <div className="row">
            <div className="col-lg-6">
              <div className="advance-search-field position-relative bdr1">
                <form
                  action="#"
                  method="get"
                  className="form-search form-style1 position-relative"
                  acceptCharset="utf-8"
                >
                  <div className="box-search">
                    <span className="icon fal fa-magnifying-glass" />
                    <input
                      className="form-control bdrs12"
                      type="text"
                      name="search"
                      placeholder="Search products…"
                    />
                    <div className="search-suggestions">
                      <h6 className="ml30 mt25 mb-3">Popular Search</h6>
                      <div className="box-suggestions">
                        <ul className="ps-0 m-0 pb30">
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
                              <div className="item_title">mobile legends</div>
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
          </div>
        </div>
        <div className="col-xl-6">
          <div className="ui-content mt15">
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

export default Ui_elements