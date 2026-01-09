import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
    const { job } = props;
  return (
    <div className="card">
        <div className="top">
          <img src={job.img}></img>
          <button >Save <Bookmark /></button>
        </div>
        <div className="center">
          <div className="company">
            <h3>{job.company}</h3>
            <span>{job.postedAt}</span>
          </div>
          <div className="position">
            <h2>{job.role}</h2>
          </div>
          <div className="role">
            <span>{job.time}</span>
            <span>{job.more}</span>
          </div>
        </div>
        <div className="bottom">
          <div className="pay-location">
            <h3>{job.pay}</h3>
            <span>{job.location}</span>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
  )
}

export default Card
