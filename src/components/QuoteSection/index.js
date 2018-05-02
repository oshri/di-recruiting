import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';
import './QuoteSection.css';

const QuoteSection = (props) => {
	const { quote, imageUrl } = props;

	return (
		<div className="Quote">
            <div className="border-decorator">
                <span className="bd lt"></span>
                <span className="bd rt"></span>
                <span className="bd lb"></span>
                <span className="bd rb"></span>
            </div>
            <div className="BoxWrap">
                <h4>    
                    <span>{quote.p1}</span>
                    <strong>{quote.p2}</strong>
                    <span>{quote.p3}</span>
                </h4>
            </div>
			<LazyLoad className="quoteImage" offsetVertical={300}>
				<img src={imageUrl} />
			</LazyLoad>
		</div>
	);
};

export default QuoteSection;
