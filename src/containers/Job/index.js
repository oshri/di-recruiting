import React, { Component } from 'react';

const Job =  (props) => {
    const { details } = props;
            
    return (
        <div>
            {details.title}
        </div>
    );
};

export default Job;