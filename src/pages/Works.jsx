import React from 'react';
import { Link } from 'react-router-dom';
import Zubair from '../assets/images/horse.png';
import RoadMax from '../assets/images/poloreport.png';
import MegaLod from '../assets/images/umpire.png';

// Data structure for all projects
const projectsData = [
  {
    id: 1,
    title: 'Pace Racing',
    category: 'Web',
    image: Zubair,
    link: 'https://racing.mysportsanalysis.com/landing',
    type: 'image', // image, gallery, video, content
  },
  {
    id: 2,
    title: 'Polo Report',
    category: 'Web',
    image: RoadMax,
    link: 'https://poloreport.com/landing/home',
    type: 'gallery',
  },
  {
    id: 3,
    title: 'Polo Umpire',
    category: 'Web',
    image: MegaLod,
    link: 'https://umpire.mysportsanalysis.com/schedules',
    type: 'gallery',
  },
  // {
  //   id: 4,
  //   title: 'Normalcy Web Design',
  //   category: 'Video',
  //   image:
  //     'https://Vz4IfVNZzkgF.com/designer-2/wp-content/uploads/sites/17/2020/04/work4-1.jpg',
  //   link: 'https://vimeo.com/97102654',
  //   type: 'video',
  // },
  // Add more projects here as needed
];

// Reusable component for rendering a single project
const ProjectItem = ({ project }) => {
  const getIconClass = () => {
    switch (project.type) {
      case 'image':
        return 'fas fa-image';
      case 'gallery':
        return 'fas fa-images';
      case 'video':
        return 'fas fa-video';
      case 'content':
        return 'fas fa-plus';
      default:
        return 'fas fa-image';
    }
  };

  const getLinkClass = () => {
    switch (project.type) {
      case 'video':
        return 'has-popup-video';
      case 'content':
        return 'has-popup-media';
      default:
        return '';
    }
  };

  const getGridItemClass = () => {
    return `grid-item f-${project.type}`;
  };

  return (
    <div className="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-image">
      <div className="box-item">
        <div className="image">
          <Link
            to={project.link}
            className={getLinkClass()}
            data-elementor-lightbox-title={project.title}
            data-elementor-lightbox-slideshow={`gallery-${project.id}`}
            target="_blank"
          >
            <img
              decoding="async"
              width="1000"
              height="800"
              src={project.image}
              className="attachment-ryancv_600xauto size-ryancv_600xauto wp-post-image"
              alt={project.title}
              srcSet={`
        ${project.image} 1000w,
        ${project.image}-300x240.jpg 300w,
        ${project.image}-768x614.jpg 768w,
        ${project.image}-184x147.jpg 184w
      `}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
            <span className="info">
              <span className={`ion ${getIconClass()}`}></span>
            </span>
          </Link>
        </div>
        <div className="desc">
          <Link to={project.link} className="name" target="_blank">
            {project.title}
          </Link>
          <div className="category">{project.category}</div>
        </div>
      </div>
    </div>
  );
};

export default function Works() {
  return (
    <>
      <div className="card-inner active" id="card-works">
        <div className="card-wrap">
          <div
            id="post-46"
            className="post-46 page type-page status-publish hentry"
          >
            <div
              data-elementor-type="wp-page"
              data-elementor-id="46"
              className="elementor elementor-46"
            >
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-484379f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="484379f"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f31adcd"
                    data-id="f31adcd"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-91b90f8 elementor-widget elementor-widget-ryancv-portfolio"
                        data-id="91b90f8"
                        data-element_type="widget"
                        data-widget_type="ryancv-portfolio.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="content works-grid works">
                            <div className="title">
                              <span>Works</span>
                            </div>

                            <div className="filter-menu filter-button-group">
                              <div className="f_btn active">
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

                            <div className="row grid-items border-line-v columns-2">
                              {/* Map over projectsData to render all projects */}
                              {projectsData.map((project) => (
                                <ProjectItem
                                  key={project.id}
                                  project={project}
                                />
                              ))}

                              <div className="clear"></div>
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
