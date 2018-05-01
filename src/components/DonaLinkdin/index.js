import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import dona from './dona.jpeg';
import './DonaLinkdin.css';

import LinkedInLink from '../LinkedInLink'

export class DonaLinkdin extends Component {
    render(){
        return (
            <div className="donaLinkdin">
                <div className="imageProfile">
                    <LazyLoad>
                        <img src={dona} alt="Dona Inselberg" />
                    </LazyLoad>
                </div>
                <a href="mailto:jobs@di-recruiting.com">
                    jobs@di-recruiting.com
                </a>
            </div>
        );
    }
}

export default DonaLinkdin;