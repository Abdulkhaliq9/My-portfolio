import React from "react";
import { Link } from "react-router-dom";
import Zubair from "../assets/images/zubairsons.png";
import RoadMax from "../assets/images/roadmax.png";
import MegaLod from "../assets/images/megaload.png";

export default function Works() {
  return (
    <>
      <div class="card-inner active" id="card-works">
        <div class="card-wrap">
          <div
            id="post-46"
            class="post-46 page type-page status-publish hentry"
          >
            <div
              data-elementor-type="wp-page"
              data-elementor-id="46"
              class="elementor elementor-46"
            >
              <section
                class="elementor-section elementor-top-section elementor-element elementor-element-484379f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="484379f"
                data-element_type="section"
              >
                <div class="elementor-container elementor-column-gap-no">
                  <div
                    class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f31adcd"
                    data-id="f31adcd"
                    data-element_type="column"
                  >
                    <div class="elementor-widget-wrap elementor-element-populated">
                      <div
                        class="elementor-element elementor-element-91b90f8 elementor-widget elementor-widget-ryancv-portfolio"
                        data-id="91b90f8"
                        data-element_type="widget"
                        data-widget_type="ryancv-portfolio.default"
                      >
                        <div class="elementor-widget-container">
                          <div class="content works-grid works">
                            <div class="title">
                              <span>Works</span>
                            </div>

                            <div class="filter-menu filter-button-group">
                              <div class="f_btn active">
                                <label>
                                  <input
                                    type="radio"
                                    name="fl_radio"
                                    value=".grid-item"
                                  />
                                  Projects
                                </label>
                              </div>
                            </div>

                            <div class="row grid-items border-line-v columns-2">
                              <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-image">
                                <div class="box-item">
                                  <div class="image">
                                    <Link
                                      to="https://zubairsonsllc.com"
                                      class=""
                                      data-elementor-lightbox-title="ZOSS Clothing Logo"
                                      data-elementor-lightbox-slideshow="gallery-82"
                                      target="_blank"
                                    >
                                      <img
                                        fetchpriority="high"
                                        target="_blank"
                                        decoding="async"
                                        width="1000"
                                        height="800"
                                        src={Zubair}
                                        class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        srcSet={`
        ${Zubair} 1000w,
        ${Zubair}-300x240.jpg 300w,
        ${Zubair}-768x614.jpg 768w,
        ${Zubair}-184x147.jpg 184w
      `}
                                        sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-image"></span>
                                      </span>
                                    </Link>
                                  </div>
                                  <div class="desc">
                                    <Link
                                      to="https://zubairsonsllc.com"
                                      class="name"
                                      target="_blank"
                                    >
                                      Zubair Sons LLC
                                    </Link>
                                    <div class="category">Web</div>
                                  </div>
                                </div>
                              </div>

                              <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-gallery">
                                <div class="box-item">
                                  <div class="image">
                                    <Link
                                      to="https://roadmax.co"
                                      class=""
                                      data-elementor-lightbox-title="NUDE Branding Mockup"
                                      data-elementor-lightbox-slideshow="gallery-80"
                                      target="_blank"
                                    >
                                      <noscript>
                                        <img
                                          target="_blank"
                                          decoding="async"
                                          width="1000"
                                          height="1300"
                                          src={RoadMax}
                                          class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                          alt=""
                                          srcset={`
                                               ${RoadMax} 1000w,
        ${RoadMax}-300x240.jpg 300w,
        ${RoadMax}-768x614.jpg 768w,
        ${RoadMax}-184x147.jpg 184w
        ${RoadMax}-300x390.jpg   300w
                                            `}
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                        />
                                      </noscript>
                                      <img
                                        decoding="async"
                                        width="1000"
                                        height="1300"
                                        src={RoadMax}
                                        target="_blank"
                                        data-src={RoadMax}
                                        class="lazyload attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        data-srcset={`
                                        ${RoadMax} 1000w,
 ${RoadMax}-300x240.jpg 300w,
 ${RoadMax}-768x614.jpg 768w,
 ${RoadMax}-184x147.jpg 184w
 ${RoadMax}-300x390.jpg   300w
                                     `}
                                        data-sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-images"></span>
                                      </span>
                                    </Link>
                                    <div id="gallery-80" class="mfp-hide">
                                      <Link
                                        target="_blank"
                                        to="https://roadmax.co"
                                        data-elementor-lightbox-slideshow="gallery-80"
                                        data-elementor-lightbox-title="Road max"
                                      ></Link>
                                      <Link
                                        target="_blank"
                                        to="https://roadmax.co"
                                        data-elementor-lightbox-slideshow="gallery-80"
                                        data-elementor-lightbox-title="Road max"
                                      ></Link>
                                    </div>
                                  </div>
                                  <div class="desc">
                                    <Link
                                      to="https://roadmax.co"
                                      class="name"
                                      target="_blank"
                                    >
                                      Road Max
                                    </Link>
                                    <div class="category">Web</div>
                                  </div>
                                </div>
                              </div>
                              
                              
                              
                              <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-gallery">
                                <div class="box-item">
                                  <div class="image">
                                    <Link
                                      to="https://megalodonwholesaleusa.com"
                                      class=""
                                      data-elementor-lightbox-title="NUDE Branding Mockup"
                                      data-elementor-lightbox-slideshow="gallery-80"
                                      target="_blank"
                                    >
                                      <noscript>
                                        <img
                                          target="_blank"
                                          decoding="async"
                                          width="1000"
                                          height="1300"
                                          src={MegaLod}
                                          class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                          alt=""
                                          srcset={`
                                               ${MegaLod} 1000w,
        ${MegaLod}-300x240.jpg 300w,
        ${MegaLod}-768x614.jpg 768w,
        ${MegaLod}-184x147.jpg 184w
        ${MegaLod}-300x390.jpg   300w
                                            `}
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                        />
                                      </noscript>
                                      <img
                                        decoding="async"
                                        width="1000"
                                        height="1300"
                                        src={MegaLod}
                                        target="_blank"
                                        data-src={MegaLod}
                                        class="lazyload attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        data-srcset={`
                                        ${MegaLod} 1000w,
 ${MegaLod}-300x240.jpg 300w,
 ${MegaLod}-768x614.jpg 768w,
 ${MegaLod}-184x147.jpg 184w
 ${MegaLod}-300x390.jpg   300w
                                     `}
                                        data-sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-images"></span>
                                      </span>
                                    </Link>
                                    <div id="gallery-80" class="mfp-hide">
                                      <Link
                                        target="_blank"
                                        to="https://megalodonwholesaleusa.com"
                                        data-elementor-lightbox-slideshow="gallery-80"
                                        data-elementor-lightbox-title="Road max"
                                      ></Link>
                                      <Link
                                        target="_blank"
                                        to="https://megalodonwholesaleusa.com"
                                        data-elementor-lightbox-slideshow="gallery-80"
                                        data-elementor-lightbox-title="Road max"
                                      ></Link>
                                    </div>
                                  </div>
                                  <div class="desc">
                                    <Link
                                      to="https://megalodonwholesaleusa.com"
                                      class="name"
                                      target="_blank"
                                    >
                                      Megalod Whole Sale
                                    </Link>
                                    <div class="category">Web</div>
                                  </div>
                                </div>
                              </div>


                              {/* <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-video">
                                <div class="box-item">
                                  <div class="image">
                                    <a
                                      href="https://vimeo.com/97102654"
                                      class="has-popup-video"
                                      data-elementor-lightbox-title="Normalcy Web Design"
                                      data-elementor-lightbox-slideshow="gallery-75"
                                    >
                                      <noscript>
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width="1000"
                                          height="750"
                                          src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1.jpg"
                                          class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                          alt=""
                                          srcset="
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1.jpg         1000w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1-300x225.jpg  300w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1-768x576.jpg  768w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1-184x138.jpg  184w
                                            "
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                        />
                                      </noscript>
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1000"
                                        height="750"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20750%22%3E%3C/svg%3E"
                                        data-src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1.jpg"
                                        class="lazyload attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        data-srcset="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1.jpg 1000w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1-300x225.jpg 300w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1-768x576.jpg 768w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1-184x138.jpg 184w"
                                        data-sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-video"></span>
                                      </span>
                                    </a>
                                  </div>
                                  <div class="desc">
                                    <a
                                      href="https://Vz4IfVNZzkgF.com/designer-2/portfolio-archive/normalcy-web-design/"
                                      class="name"
                                    >
                                      Normalcy Web Design
                                    </a>
                                    <div class="category">Video</div>
                                  </div>
                                </div>
                              </div> */}

                              {/* <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-image">
                                <div class="box-item">
                                  <div class="image">
                                    <a
                                      href="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1.jpg"
                                      class=""
                                      data-elementor-lightbox-title="RETR Style"
                                      data-elementor-lightbox-slideshow="gallery-73"
                                    >
                                      <noscript>
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width="1000"
                                          height="1000"
                                          src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1.jpg"
                                          class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                          alt=""
                                          srcset="
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1.jpg         1000w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-300x300.jpg  300w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-150x150.jpg  150w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-768x768.jpg  768w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-184x184.jpg  184w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-280x280.jpg  280w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-560x560.jpg  560w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-100x100.jpg  100w
                                            "
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                        />
                                      </noscript>
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1000"
                                        height="1000"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%201000%22%3E%3C/svg%3E"
                                        data-src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1.jpg"
                                        class="lazyload attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        data-srcset="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1.jpg 1000w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-300x300.jpg 300w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-150x150.jpg 150w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-768x768.jpg 768w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-184x184.jpg 184w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-280x280.jpg 280w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-560x560.jpg 560w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work5-1-100x100.jpg 100w"
                                        data-sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-image"></span>
                                      </span>
                                    </a>
                                  </div>
                                  <div class="desc">
                                    <a
                                      href="https://Vz4IfVNZzkgF.com/designer-2/portfolio-archive/retr-style/"
                                      class="name"
                                    >
                                      RETR Style
                                    </a>
                                    <div class="category">Image</div>
                                  </div>
                                </div>
                              </div> */}

                              {/* <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-video">
                                <div class="box-item">
                                  <div class="image">
                                    <a
                                      href="https://vimeo.com/97102654"
                                      class="has-popup-video"
                                      data-elementor-lightbox-title="OYYI Mobile App"
                                      data-elementor-lightbox-slideshow="gallery-71"
                                    >
                                      <noscript>
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width="1000"
                                          height="1111"
                                          src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1.jpg"
                                          class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                          alt=""
                                          srcset="
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1.jpg          1000w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-270x300.jpg   270w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-922x1024.jpg  922w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-768x853.jpg   768w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-184x204.jpg   184w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-300x333.jpg   300w
                                            "
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                        />
                                      </noscript>
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1000"
                                        height="1111"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%201111%22%3E%3C/svg%3E"
                                        data-src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1.jpg"
                                        class="lazyload attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        data-srcset="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1.jpg 1000w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-270x300.jpg 270w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-922x1024.jpg 922w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-768x853.jpg 768w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-184x204.jpg 184w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work7-1-300x333.jpg 300w"
                                        data-sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-video"></span>
                                      </span>
                                    </a>
                                  </div>
                                  <div class="desc">
                                    <a
                                      href="https://Vz4IfVNZzkgF.com/designer-2/portfolio-archive/oyyi-mobile-app/"
                                      class="name"
                                    >
                                      OYYI Mobile App
                                    </a>
                                    <div class="category">Video</div>
                                  </div>
                                </div>
                              </div> */}

                              {/* <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-content">
                                <div class="box-item">
                                  <div class="image">
                                    <a
                                      href="#popup-69"
                                      class="has-popup-media"
                                      data-elementor-lightbox-title="Infinity Logo"
                                      data-elementor-lightbox-slideshow="gallery-69"
                                    >
                                      <noscript>
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width="1000"
                                          height="784"
                                          src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1.jpg"
                                          class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                          alt=""
                                          srcset="
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1.jpg         1000w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1-300x235.jpg  300w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1-768x602.jpg  768w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1-184x144.jpg  184w
                                            "
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                        />
                                      </noscript>
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1000"
                                        height="784"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20784%22%3E%3C/svg%3E"
                                        data-src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1.jpg"
                                        class="lazyload attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        data-srcset="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1.jpg 1000w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1-300x235.jpg 300w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1-768x602.jpg 768w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work6-1-184x144.jpg 184w"
                                        data-sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-plus"></span>
                                      </span>
                                    </a>
                                  </div>
                                  <div class="desc">
                                    <a
                                      href="https://Vz4IfVNZzkgF.com/designer-2/portfolio-archive/infinity-logo/"
                                      class="name"
                                    >
                                      Infinity Logo
                                    </a>
                                    <div class="category">Content</div>
                                  </div>
                                  <div
                                    id="popup-69"
                                    class="popup-box mfp-fade mfp-hide"
                                  >
                                    <div class="content">
                                      <div class="preloader-popup">
                                        <div class="centrize full-width">
                                          <div class="vertical-center">
                                            <div class="spinner default-circle"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}

                              {/* <div class="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-content">
                                <div class="box-item">
                                  <div class="image">
                                    <a
                                      href="#popup-64"
                                      class="has-popup-media"
                                      data-elementor-lightbox-title="Business Card Design"
                                      data-elementor-lightbox-slideshow="gallery-64"
                                    >
                                      <noscript>
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width="1000"
                                          height="694"
                                          src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1.jpg"
                                          class="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                          alt=""
                                          srcset="
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1.jpg         1000w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1-300x208.jpg  300w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1-768x533.jpg  768w,
                                              https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1-184x128.jpg  184w
                                            "
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                        />
                                      </noscript>
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1000"
                                        height="694"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20694%22%3E%3C/svg%3E"
                                        data-src="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1.jpg"
                                        class="lazyload attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
                                        alt=""
                                        data-srcset="https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1.jpg 1000w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1-300x208.jpg 300w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1-768x533.jpg 768w, https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work8-1-184x128.jpg 184w"
                                        data-sizes="(max-width: 1000px) 100vw, 1000px"
                                      />
                                      <span class="info">
                                        <span class="ion fas fa-plus"></span>
                                      </span>
                                    </a>
                                  </div>
                                  <div class="desc">
                                    <a
                                      href="https://Vz4IfVNZzkgF.com/designer-2/portfolio-archive/business-card-design/"
                                      class="name"
                                    >
                                      Business Card Design
                                    </a>
                                    <div class="category">Content</div>
                                  </div>
                                  <div
                                    id="popup-64"
                                    class="popup-box mfp-fade mfp-hide"
                                  >
                                    <div class="content">
                                      <div class="preloader-popup">
                                        <div class="centrize full-width">
                                          <div class="vertical-center">
                                            <div class="spinner default-circle"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              <div class="clear"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
