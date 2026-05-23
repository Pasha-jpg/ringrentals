import React from 'react';

const deals = [
  { title: 'Private Beach', location: 'Lossarnach, Eriado', availability: 'Available Now', image: 'http://placehold.it/100x100' },
  { title: 'Mountain views', location: 'Hyarnustar, Rhovanion', availability: 'Available on 24 July', image: 'http://placehold.it/100x100' },
  { title: 'Heart of the village', location: 'Minhiriath, Eriador', availability: 'Available 5 July', image: 'http://placehold.it/100x100' },
  { title: 'The city life', location: 'West Beleriand, Mordor', availability: 'Available 6 July', image: 'http://placehold.it/100x100' }
];

const activities = [
  { user: 'Sam Minnée', action: 'reviewed', item: 'The House With No Windows', comment: 'Awesome solitary confinement, mate. Spot on. Sweet as.', time: 'Just now', image: 'http://placehold.it/70x70' },
  { user: 'Ingo Schoomer', action: 'asked a question about', item: 'The Mistake by the Lake', comment: 'Has this house been unit tested?', time: '37 minutes ago', image: 'http://placehold.it/70x70' }
];

const Sidebar = () => {
  return (
    <div className="sidebar col-sm-4">
      {/* Last Minute Deals */}
      <div className="col-sm-12">
        <h2 className="section-title">Last minute deals</h2>
        <ul className="latest-news">
          {deals.map((deal, index) => (
            <li key={index} className="col-md-12">
              <div className="image">
                <a href="blog-detail.html"></a>
                <img alt={deal.title} src={deal.image} />
              </div>
              <ul className="top-info">
                <li><i className="fa fa-calendar"></i>{deal.availability}</li>
              </ul>
              <h4>
                <a href="blog-detail.html">{deal.title}</a>
                <p>{deal.location}</p>
              </h4>
            </li>
          ))}
        </ul>
        <p className="center">
          <a className="btn btn-fullcolor" href="#">More deals</a>
        </p>
      </div>

      {/* Activity Feed */}
      <div className="col-sm-12">
        <h2 className="section-title">Activity</h2>
        <ul className="activity">
          {activities.map((activity, index) => (
            <li key={index} className="col-lg-12">
              <a href="#"><img src={activity.image} alt={activity.user} /></a>
              <div className="info">
                <h5>
                  {activity.user} {activity.action}
                  <a href="#">{activity.item}</a>
                </h5>
                <p>{activity.comment}</p>
                <h6>{activity.time}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;