import React from 'react'
import {LuUserPlus} from "react-icons/lu"
import {VscTasklist} from "react-icons/vsc"
import {BiSolidLike} from "react-icons/bi"

function HowItWorks() {
  return (
   <section className='howItWorks'>
    <h3>How does it works?</h3>
    <div className="container">
        <div className="card">
            <div className="icon">
                <LuUserPlus/>
            </div>
            <h4>Create an Account</h4>
            <p>Sing up for a free account as a job seeker or employer. Set up your profile in minutes to start posting jobs or applying for jobs. Customize your profile to highlight your skills or requiments.</p>
        </div>

        <div className="card">
            <div className="icon">
                <VscTasklist/>
            </div>
            <h4>Post or Browser Jobs</h4>
            <p>Employers can post detailed job descriptions, and job seekers can a comprehensive list of available positions. Utilize filters to find jobs that match your skills and preferences.</p>
        </div>

        <div className="card">
            <div className="icon">
                <BiSolidLike/>
            </div>
            <h4>Hire or Get Hired</h4>
            <p>Employers can shortlist candidates and extend job offers. Job Seekers can review job offere and accept positions that align with their career goals.</p>
        </div>
    </div>
   </section>
  )
}

export default HowItWorks
