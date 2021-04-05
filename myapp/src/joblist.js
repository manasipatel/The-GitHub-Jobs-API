import React, { useEffect, useState } from 'react';
import './App.css';
import JobItem from './jobitem';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import JobDetails from './jobdetails';
//import { useHistory } from 'react-router-dom'

const JobList = () => {

    //let history = useHistory();

    const [arrJobs, setJobs] = useState([]);
    const [strFilter, setFilter] = useState("node");
    const [isFullTime, setFullTime] = useState(false);
    const [str, setstr] = useState("");
    const [strLocation, setFilterLocation] = useState("");
    const [strLoc, setstrLoc] = useState("");
    const [objJob, setJobData] = useState({});
    const[isShowJobDetails,showJobDetails]=useState(false);
    useEffect(() => {
        LoadJobs();
    }, [strFilter, isFullTime]);

    const LoadJobs = async () => {
        const URL = `/positions.json?search=${strFilter}&full_time=${isFullTime}&location=${strLocation}`;
        console.log(URL);
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setJobs(data);
    }

    function onChangeTitle(e) {
        if (e.target.name === "txtSeachByTitle") {
            setstr(e.target.value);
        }
        else {
            setstrLoc(e.target.value);
        }
    }

    const FilterList = (e) => {
        e.preventDefault();
        setFilter(str);
        setFilterLocation(strLoc);
    }

    const onChange = (e) => {
        setFullTime(e.target.checked);
    }

    const jobdetailsClick = (e) => {
        setJobData(e)
        showJobDetails(!isShowJobDetails);
    }

    const getJobList = ()=>{
        showJobDetails(!isShowJobDetails);
    }

    return (
        <div className="mainBodyDiv">

            <div className="headerDiv">
                <h1>
                    devjobs
            <button>
                        Light
            </button>
                </h1>
            </div>
            <div className="searchDiv">
                <form onSubmit={(e) => FilterList(e)}>
                    <input name="txtSeachByTitle" type="text" placeholder="Filter by title,companies, expertise..." onChange={(e) => onChangeTitle(e)} />
                    <input name="txtSeachByLocation" type="text" placeholder="Filter by location..." onChange={(e) => onChangeTitle(e)} />
                    <label>
                        <input type="checkbox" onChange={(e) => onChange(e)} /> Full Time Only
        </label>
                    <button>Search</button>
                </form>
            </div>

            <div className="listContainer">
                {
                   !isShowJobDetails ? arrJobs.map(job => (
                        <JobItem
                            ev={() => jobdetailsClick(job)}
                            key={job.id}
                            job={job}
                        />
                    ))
                    :
                    <JobDetails  jobdesc={objJob} ev={()=>getJobList()}/>

                    
                }


            </div>


            <div className="footer">

            </div>

        </div>
    )
}

export default JobList;
