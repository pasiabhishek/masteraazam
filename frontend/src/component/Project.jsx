import React from 'react'
import './css/Project.css'
import ProjectF from "./data/Project.json"
export default function Project() {
    return (
        <div className='project ' id='Project'>

            <div className="section">
                <h1>Project</h1>
                <p>Things I've built.</p>
                <div className="project_list">
                    {
                        ProjectF.map((pro) => (
                            <div className="project_card" key={pro.id}>
                                <img src={pro.img} alt="" srcset="" />
                                <div className="project_details">
                                    <h2>
                                        {pro.name}
                                    </h2>
                                    <p1 className='project_info'>
                                        {pro.description}
                                    </p1><br />
                                    <a href={pro.url}  target="_blank">Visit Project &rarr;</a>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>

        </div>
    )
}
