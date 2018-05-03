import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import fb from '../../services/firebase';
import './Jobs.css';

import Job from '../Job';

class Jobs extends Component {
    jobsCollectionObserver
    splash = "https://source.unsplash.com/LAaSoL0LrYs/400";

    state = {
        jobs: [
            {
                id: 1,
                title: "Sales Development Representative",
                category: "",
                description: "Looking for Sales Development Representatives for a growing company in the center of Israel. SDR’s are responsible for prospecting, qualifying and creating sales opportunities for the company’s global sales teams.",
                requirements: ["Previous experience in a similar role." , 
                                "Willingness to work Monday-Friday.", 
                                "Native English speaker-MUST!", 
                                "Additional Languages (Advantage)."
                                ]
		    },
            {
                id:2,
                title: "Content Marketing Manager",
                category: "Cyber",
                description: "Looking for a Content Marketing Manager for an established cyber startup in Tel Aviv. Responsibilities include devising unique content and social media strategies as well as copyrighting.",
                requirements: ["Native English speaker-MUST!" , 
                                "A creative, talented copywriter with strong communication skills.", 
                                "Previous experience with social media marketing and SEO optimization.",
                                "Strong WordPress knowledge (Google Analytics is a plus)."
                                ]
            },
            {
                id: 3,
                title: "Senior Sales Executive-EMEA",
                category: "SaaS",
                description: "Looking for an Senior Sales Executive with a proven track record of success selling to Enterprise organizations in EMEA utilizing Inside Sales and Field Sales as needed.",
                requirements: ["4+ years of experience in selling software B2B-MUST!" , 
                                "6+ years of proven experience in Inside sales as well as field sales.", 
                                "Experience in selling through Channels/Partners (Advantage).", 
                                "Native Level English -MUST!", "Working Days – Mon – Fri.", 
                                "Willingness to travel up to 25%"
                                ]
            },
            {
                id: 4,
                title: "Senior Security Researcher",
                category: "Cyber",
                description: "Looking for a Senior Security Researcher to join a growing cyber startup in the field of malware detection based in Tel-Aviv. Responsibilities include identifying and analyzing cyber campaigns and malware datasets as well as reverse-engineering. ",
                requirements: ["Knowledge of security issues and attack vectors in the following environments: Windows (Must)", 
                                "Android, Mac-OS, Linux (Advantage)." , 
                                "Hands-on experience in static and dynamic malware analysis, relevant tools and methods.", 
                                "Programming in Python (Must) and Scripting in Bash (Advantage).", 
                                "Proficiency in English - both written and spoken.", 
                                "Direct management experience (Advantage)."
                            ]
            },
            {
                id: 5,
                title: "BI Developer",
                category: "Software Development",
                description: "Looking for a BI Developer to join a DWH at a company in Tel-Aviv.",
                requirements: ["3+ years of experience in data modeling." , 
                                "Extensive knowledge of MS-SQL.", 
                                "Experience with ETL processes including SSIS.", 
                                "Experience with big-data tools (Advantage)."
                                ]
            },
            {
                id: 6,
                title: "Content Writer",
                category: "Marketing",
                description: "Looking for a junior Content Writer for a Fin-Tech company in Central Tel-Aviv. If you have at least one year of writing experience and are a native English speaker, this job is for you!",
                requirements: ["Native English speaker-MUST!" , 
                                "1+ years of writing experience writing blogs/articles/social media content and more.", 
                                "Financial background (Advantage)."
                                ]
            }
        ]
    };

    componentDidMount() {
        // this.jobsCollectionObserver = fb.firestore().collection('jobs').onSnapshot((snap) => {
        //   const jobs = {};
        //   snap.forEach((docSnapshot) => {
        //     jobs[docSnapshot.id] = docSnapshot.data();
        //   });
        //   this.setState({ jobs });
        // });
    }
      
    componentWillUnmount() {
        // this.jobsCollectionObserver();
    }

    list = this.state.jobs.map((j) => {
        return <Job details={j} key="{job.id}"/> ;
    });

	render() {
		return (
            <div style={this.styles}>
                <Parallax bgImage={this.splash}>
                    <div style={{height: 300}}>
                        <div className="quote">
                            <div className="text">
                                <p>JOBS</p>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div className="content-wrapper jobs-container">
                    {this.list}
                </div>
            </div>
		);
	}
}

export default Jobs;