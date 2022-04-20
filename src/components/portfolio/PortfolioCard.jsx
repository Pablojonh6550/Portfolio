import React from "react";

// --CSS--
import './css/portfolio.css';

function PortfolioCard({ id, image, tittle, github, demo }) {
    return (
        <article id={id} className="portfolio_item">
            <div className="portfolio_item_image">
                <img src={image} alt={tittle} />
            </div>
            <h3>{tittle}</h3>
            <div className="portfolio_item_a">
                <a href={github} target='_blank' rel="noopener noreferrer" className="btn">Github</a>
                <a href={demo} target='_blank' rel="noopener noreferrer" className="btn btn_primary">Live Demo</a>
            </div>
        </article>
    );
}

export default PortfolioCard;