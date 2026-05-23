import React from 'react';

const regions = ['Rhovanion', 'Eriador', 'Bay of Belfalas', 'Mordor', 'The Southwest', 'Arnor'];

const PopularRegions = () => {
  return (
    <>
      <h1 className="section-title">Popular Regions</h1>
      <div id="regions">
        {regions.map(region => (
          <div key={region} className="item">
            <a href="#">
              <img src="http://placehold.it/194x194" alt={region} />
              <h3>{region}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularRegions;