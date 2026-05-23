import React from "react";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Latest News</h1>
            <div className="grid-style1 clearfix">
              <div className="item col-md-4">
                <div className="image">
                  <Link to="/news/1">
                    <span className="btn btn-default">Read More</span>
                  </Link>
                  <img src="http://placehold.it/766x515" alt="News image" />
                </div>
                <div className="tag"><i className="fa fa-file-text"></i></div>
                <div className="info-blog">
                  <span className="title">New Rental Regulations Announced</span>
                  <span className="text">
                    The government has announced new rental regulations
                    effective from next month. Find out how this impacts you.
                  </span>
                  <span className="meta">
                    <span className="author">
                      <i className="fa fa-user"></i> Admin
                    </span>
                    <span className="date">
                      <i className="fa fa-clock-o"></i> 2024-08-08
                    </span>
                  </span>
                </div>
              </div>
              {/* Repeat for other news items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;