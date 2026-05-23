import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="item col-md-4">
      <div className="image">
        <a href="properties-detail.html">
          <h3>{property.title}</h3>
          <span className="location">{property.location}</span>
        </a>
        <img src={property.image} alt={property.title} />
      </div>
      <div className="price">
        <span>${property.price}</span>
        <p>per night</p>
      </div>
      <ul className="amenities">
        <li><i className="icon-bedrooms"></i> {property.bedrooms}</li>
        <li><i className="icon-bathrooms"></i> {property.bathrooms}</li>
      </ul>
    </div>
  );
};

export default PropertyCard;