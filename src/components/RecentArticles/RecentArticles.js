import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

const articlesData = [
  {
    id: 1,
    title: 'How to get your dream property for the best price?',
    date: 'July 30, 2014',
    comments: 2,
    tags: 'Properties, Prices, best deals',
    excerpt: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
    image: 'http://placehold.it/766x515',
    icon: 'fa fa-file-text'
  },
  {
    id: 2,
    title: '7 tips to get the best mortgage.',
    date: 'July 24, 2014',
    comments: 4,
    tags: 'Tips, Mortgage',
    excerpt: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
    image: 'http://placehold.it/766x515',
    icon: 'fa fa-film'
  },
  {
    id: 3,
    title: 'House, location or price: What\'s the most important factor?',
    date: 'July 05, 2014',
    comments: 1,
    tags: 'Location, Price, House',
    excerpt: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
    image: 'http://placehold.it/766x515',
    icon: 'fa fa-file-text'
  }
];

const RecentArticles = () => {
  return (
    <>
      <h1 className="section-title">Recent Articles</h1>
      <div className="grid-style1">
        {articlesData.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="center">
        <a href="#" className="btn btn-default-color">View All News</a>
      </div>
    </>
  );
};

export default RecentArticles;