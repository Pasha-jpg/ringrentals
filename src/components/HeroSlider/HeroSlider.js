import React from 'react';

const HeroSlider = () => {
  const slides = [
    {
      id: 'slide1',
      title: 'Breathtaking views',
      subtitle: 'Relaxation in the Bay of Belfalas',
      background: "url(http://placehold.it/1920x605) no-repeat left center"
    },
    {
      id: 'slide2',
      title: 'The simple life',
      subtitle: 'Lush gardens in Mordor',
      background: "url(http://placehold.it/1920x605) no-repeat left center"
    }
  ];

  return (
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li 
            key={slide.id}
            data-target="#carousel-example-generic" 
            data-slide-to={index} 
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`item ${index === 0 ? 'active' : ''}`}
            id={slide.id}
            style={{
              background: slide.background,
              backgroundSize: "cover"
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">{slide.title}</div>
              <div className="caption sfl slider-subtitle">{slide.subtitle}</div>
              <a href="#" className="caption sfb btn btn-default btn-lg">Learn More</a>
            </div>
          </div>
        ))}
      </div>

      <div id="home-search-section"></div>

      {/* Controls */}
      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HeroSlider;