import React from "react";

// --CSS--
import './css/portfolio.css';

function PortfolioCard({ id, image, title, github, demo }) {
    return (
        <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_a">
                <a href={github} target='_blank' rel='noopener referrer' className="btn">Github</a>
                <a href={demo} target='_blank' rel='noopener referrer' className="btn btn_primary">Live Demo</a>
            </div>
        </article>
    );
}

export default PortfolioCard;