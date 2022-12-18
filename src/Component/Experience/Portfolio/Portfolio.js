import React from "react";

import './Portfolio.scss';
import JR from '../../../Assets/images/portfolio_jira.png';
import BK from '../../../Assets/images/portfolio_booking.png';
import WC from '../../../Assets/images/portfolio_wealthcare.png';

const portfolio_data = [
  {
    id: 1,
    image: JR,
    title: 'Jira clone built with React',
    description: 'Register new or login with the below account to quickly discover my project',
    account: 'dhthinh7@gmail.com',
    password: '111111',
    github: 'https://github.com/dhthinh7/Jira_clone',
    liveDemo: 'https://git-jira-clone.netlify.app',
    public: true
  },
  {
    id: 2,
    image: BK,
    title: 'Movie tickets online booking',
    description: 'Register new or login with the below account to quickly discover my project',
    account: `Thinh Doan QT or Thinh Doan Client`,
    password: '111111',
    github: 'https://github.com/dhthinh7/movie_tickets_online_booking',
    liveDemo: 'https://moviesbookingonline.netlify.app',
    public: true
  },
  {
    id: 3,
    image: WC,
    title: 'WealthCare',
    description: ' ',
    account: `None`,
    password: 'None',
    github: '/',
    liveDemo: '/',
    public: false
  }
]

export default function Portfolio() {
  const renderPortfolio = () => {
    return portfolio_data.map((item) => {
      return <article key={item.id} className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p className="account">Account: <span>{item.account}</span></p>
        <p className="password">Password: <span>{item.password}</span></p>
        {!item.public ? <div className="portfolio_item_ref not-share">
          <div className="btn">Github</div>
          <div className="btn btn-primary">Live Demo</div>
        </div> : <div className="portfolio_item_ref">
          <a href={item.github} target="_blank" rel="noreferrer" className="btn">Github</a>
          <a href={item.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
        </div>}
      </article>
    })
  }
  return <section id="portfolio">
    <h5>My recent work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
      {renderPortfolio()}
    </div>
  </section>
}
