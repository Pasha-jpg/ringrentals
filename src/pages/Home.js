import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import SearchForm from '../components/SearchForm/SearchForm';
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties';
import PopularRegions from '../components/PopularRegions/PopularRegions';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import Sidebar from '../components/Sidebar/Sidebar';
import './Home.css';

function Home() {
  return (
    <>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Search Form Section */}
      <SearchForm />

      {/* Content Wrapper */}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="main col-sm-8">
              <FeaturedProperties />
              
              <div className="row">
                <div className="col-sm-12">
                  <PopularRegions />
                </div>
              </div>

              <RecentArticles />
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;