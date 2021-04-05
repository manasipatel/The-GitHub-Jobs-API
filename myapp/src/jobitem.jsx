import React, { useState } from 'react'
import JobDetails from './jobdetails'

// const JobItem = ({id, created_at, type, title, company, location, company_logo }) => {
const JobItem = ({ job ,ev}) => {

    return (
        <div className="listitem" onClick={() => ev()}>
            <img src={job.company_logo} alt="" />
            <p>
                {job.created_at}  .  {job.type}
            </p>
            <h2>{job.title}</h2>
            <p>
                {job.company}
            </p>
            <p>
                {job.location}
            </p>
        </div>
    )
}

export default JobItem;