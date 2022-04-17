import React from "react";

// --CSS--
import './css/portfolio.css';
// --Card--
import PortfolioCard from "./PortfolioCard";
// --Dados--
import {datas} from './data';

function Portfolio() {
    const datap = datas;

    return (
        <>
        <section id='portfolio'>
            <h5>Meus Trabalhos</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container"> 
            {
                datap.map((data) => {
                    return(
                        <PortfolioCard id={data.id} image={data.image} title={data.title} github={data.github_link} demo={data.demo} />
                   
                    )
            })
            }     
            </div>
        </section>
        </>
    );
}

export default Portfolio;