import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import fb from '../../services/firebase';
import './Jobs.css';

class Jobs extends Component {
    jobsCollectionObserver
    splash = "https://source.unsplash.com/LAaSoL0LrYs/400";

    state = {
        jobs: []
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
                <div className="jobs-container">

                </div>
            </div>
		);
	}
}

export default Jobs;