import React from 'react';

const services = [
    {
        id: 1,
        services: "Software Development",
        description: "Innovative software development services to build, and upgrade applications, ensuring they meet the highest quality standards",
    },
    {
        id: 2,
        services: "Web Developer",
        description: "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
        id: 3,
        services: "Data Science",
        description: "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
        id: 4,
        services: "Cloud Computing",
        description: "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
        id: 5,
        services: "DevOps",
        description: "DevOps services to streamline software development and operations enhancing development efficiency and reducing time to market.",
    }
];

function TopNiches() {
    return (
        <section className='services'>
            <h3>Top Niches</h3>
            <div className="grid">
                {services.map((element) => {
                    return (
                        <div className="card" key={element.id}>
                            <h4>{element.services}</h4>
                            <p>{element.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default TopNiches;
