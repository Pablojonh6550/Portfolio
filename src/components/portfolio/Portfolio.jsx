import React from "react";

// --CSS--
import './css/portfolio.css';
// --Card--
import PortfolioCard from "./PortfolioCard";

// --Images--
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Project1',
        github_link:'http://github.com',
        demo:'http://dribble.com',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Project2',
        github_link:'http://github.com',
        demo:'http://dribble.com',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Project3',
        github_link:'http://github.com',
        demo:'http://dribble.com',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Project4',
        github_link:'http://github.com',
        demo:'http://dribble.com',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Project5',
        github_link:'http://github.com',
        demo:'http://dribble.com',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Project6',
        github_link:'http://github.com',
        demo:'http://dribble.com',
    },
]

function Portfolio() {
    return (
        <>
        <section id='portfolio'>
            <h5>Meus Trabalhos</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container"> 
            {
            data.map(({id, image, title, github, demo}) => {
                return(
                    <PortfolioCard id={id} image={image} title={title} github={github} demo={demo} />
                )
            })
            }     
            </div>
        </section>
        </>
    );
}

export default Portfolio;