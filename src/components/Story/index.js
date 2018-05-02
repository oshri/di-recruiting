import React from 'react';
import LazyLoad from 'react-lazy-load';
import './Story.css';

const Story = (props) => {
    const { user } = props;

    return (
        <div className="story">
            <LazyLoad>
                <img src={user.imageUrl} alt="Dona Inselberg" />
            </LazyLoad>
            <h3>{user.name}</h3>
            <p>{user.details}</p>
        </div>
    );
};

export default Story