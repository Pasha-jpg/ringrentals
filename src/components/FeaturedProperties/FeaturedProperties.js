import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';

const propertiesData = [
  { id: 1, title: 'Luxury Apartment with great views', location: 'Upper East Side, New York', price: 950, bedrooms: 4, bathrooms: 3, image: 'http://placehold.it/760x670' },
  { id: 2, title: 'Stunning Villa with 5 bedrooms', location: 'Miami Beach, Florida', price: 1300, bedrooms: 5, bathrooms: 2, image: 'http://placehold.it/760x670' },
  { id: 3, title: 'Recent construction with 3 bedrooms', location: 'Park Slope, New York', price: 560, bedrooms: 3, bathrooms: 2, image: 'http://placehold.it/760x670' },
  { id: 4, title: 'Modern construction with parking space', location: 'Midtown, New York', price: 85, bedrooms: 1, bathrooms: 2, image: 'http://placehold.it/760x670' },
  { id: 5, title: 'Single Family Townhouse', location: 'Cobble Hill, New York', price: 840, bedrooms: 2, bathrooms: 2, image: 'http://placehold.it/760x670' },
  { id: 6, title: '3 bedroom villa with garage for rent', location: 'Bal Harbour, Florida', price: 150, bedrooms: 3, bathrooms: 2, image: 'http://placehold.it/760x670' }
];

const FeaturedProperties = () => {
  return (
    <>
      <h1 className="section-title">Featured Properties</h1>
      <div className="grid-style1 clearfix">
        {propertiesData.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProperties;