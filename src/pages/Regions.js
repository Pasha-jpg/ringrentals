import React from "react";
import { Link } from "react-router-dom";


function Regions() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Regions in Australia</h1>
            <div className="grid-style1 clearfix">
              <div className="item col-md-4">
                <div className="image">
                  <Link to="/sydney">
                    <h3>Sydney</h3>
                    <span className="location">New South Wales</span>
                  </Link>
                  <img src="http://placehold.it/760x670" alt="Sydney" />
                </div>
              </div>
              <div className="item col-md-4">
                <div className="image">
                  <Link to="/melbourne">
                    <h3>Melbourne</h3>
                    <span className="location">Victoria</span>
                  </Link>
                  <img src="http://placehold.it/760x670" alt="Melbourne" />
                </div>
              </div>
              <div className="item col-md-4">
                <div className="image">
                  <Link to="/brisbane">
                    <h3>Brisbane</h3>
                    <span className="location">Queensland</span>
                  </Link>
                  <img src="http://placehold.it/760x670" alt="Brisbane" />
                </div>
              </div>
              <div className="item col-md-4">
                <div className="image">
                  <Link to="/perth">
                    <h3>Perth</h3>
                    <span className="location">Western Australia</span>
                  </Link>
                  <img src="http://placehold.it/760x670" alt="Perth" />
                </div>
              </div>
              <div className="item col-md-4">
                <div className="image">
                  <Link to="/adelaide">
                    <h3>Adelaide</h3>
                    <span className="location">South Australia</span>
                  </Link>
                  <img src="http://placehold.it/760x670" alt="Adelaide" />
                </div>
              </div>
              <div className="item col-md-4">
                <div className="image">
                  <Link to="/hobart">
                    <h3>Hobart</h3>
                    <span className="location">Tasmania</span>
                  </Link>
                  <img src="http://placehold.it/760x670" alt="Hobart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regions;