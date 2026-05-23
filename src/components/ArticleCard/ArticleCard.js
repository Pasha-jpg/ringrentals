import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="item col-md-4">
      <div className="image">
        <a href="#">
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Read More
          </span>
        </a>
        <img src={article.image} alt={article.title} />
      </div>
      <div className="tag"><i className={article.icon}></i></div>
      <div className="info-blog">
        <ul className="top-info">
          <li><i className="fa fa-calendar"></i> {article.date}</li>
          <li><i className="fa fa-comments-o"></i> {article.comments}</li>
          <li><i className="fa fa-tags"></i> {article.tags}</li>
        </ul>
        <h3><a href="#">{article.title}</a></h3>
        <p>{article.excerpt}</p>
      </div>
    </div>
  );
};

export default ArticleCard;