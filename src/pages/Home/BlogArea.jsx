import React from 'react';
import blog1 from '../../assets/img/blog/blog1.png';
import blog2 from '../../assets/img/blog/blog2.png';
import blog3 from '../../assets/img/blog/blog3.png';
import shape1 from '../../assets/img/shape/shape1.png';
import shape2 from '../../assets/img/shape/shape5.png';
import shape3 from '../../assets/img/shape/shape4.png';
import shape4 from '../../assets/img/shape/shape6.png';

const BlogArea = () => {
  return (
    <div className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Our Blogs</span>
          <h2 className="h2-color2">Latest Valuable Insights</h2>
          <p className="margin-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim
          </p>
        </div>
        <div className="row pt-45">
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <a href="blog-details.html">
                <img src={blog1} alt="Blog 1" />
              </a>
              <div className="content">
                <ul>
                  <li>
                    <i className='bx bx-time-five'></i>
                    09 April 2024
                  </li>
                  <li>
                    <i className='bx bx-purchase-tag-alt'></i>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
                <h3><a href="blog-details.html">The Home of Technology is in Front of You</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <a href="blog-details.html">
                <img src={blog2} alt="Blog 2" />
              </a>
              <div className="content">
                <ul>
                  <li>
                    <i className='bx bx-time-five'></i>
                    10 July 2024
                  </li>
                  <li>
                    <i className='bx bx-purchase-tag-alt'></i>
                    <a href="#">SEO</a>
                  </li>
                </ul>
                <h3><a href="blog-details.html">SEO Best Practices Mobile Friendliness</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="blog-card">
              <a href="blog-details.html">
                <img src={blog3} alt="Blog 3" />
              </a>
              <div className="content">
                <ul>
                  <li>
                    <i className='bx bx-time-five'></i>
                    19 June 2024
                  </li>
                  <li>
                    <i className='bx bx-purchase-tag-alt'></i>
                    <a href="#">SEO & Marketing</a>
                  </li>
                </ul>
                <h3><a href="blog-details.html">15 SEO Practices Website Architecture</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-shape">
        <div className="shape1">
          <img src={shape1} alt="Shape 1" />
        </div>
        <div className="shape2">
          <img src={shape2} alt="Shape 2" />
        </div>
        <div className="shape3">
          <img src={shape3} alt="Shape 3" />
        </div>
        <div className="shape4">
          <img src={shape4} alt="Shape 4" />
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
