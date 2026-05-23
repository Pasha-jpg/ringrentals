import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div id="home-advanced-search" className="open">
      <div id="opensearch"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="form-group">
                <div className="form-control-small">
                  <div className="input-group date chzn-container" data-datepicker>
                    <input
                      placeholder="Arrive on..."
                      type="text"
                      className="form-control"
                      data-date-format="DD/MM/YYYY"
                    />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                  </div>
                </div>

                <div className="form-control-small">
                  <select id="search_status" name="search_status" data-placeholder="Stay...">
                    <option value="">Stay...</option>
                    {[...Array(14)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} Night{i !== 0 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control-small">
                  <select id="search_bedrooms" name="search_bedrooms" data-placeholder="Bedrooms">
                    <option value="">Bedrooms</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5plus">5+</option>
                  </select>
                </div>

                <div className="form-control-large">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="City, State, Country, etc..."
                  />
                </div>

                <button type="submit" className="btn btn-fullcolor">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;