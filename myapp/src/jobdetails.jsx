import React from 'react'

const JobDetails = ({ jobdesc ,ev }) => {


    const redirectToSite = (e) => {
        window.location.href = 'https://www.stickermule.com/careers';
    }

    return (
        <div  >
            <div>
                <button onClick={()=>ev()}>BACK</button>
            </div>
            <div>
                <img src={jobdesc.company_logo} alt="" height="50" width="50" />
                {jobdesc.company}
                <button onClick={() => { redirectToSite(jobdesc.company_url) }}> Company Site</button>
            </div>
            <h2>{jobdesc.title}</h2>
            <div>
                {jobdesc.description}
            </div>
        </div>
    )
}


export default JobDetails;