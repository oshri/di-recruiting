import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import { Parallax, Background } from 'react-parallax';
import './Home.css';
import Signature from '../../components/Signature';
import QuoteSection from '../../components/QuoteSection';

// cvUIv9j5wDg  for contact
// SYTO3xs06fU
class Home extends Component {
    splash = "https://source.unsplash.com/xah3Ny20Vbw/400";
    quoteImageUrl = "https://source.unsplash.com/SYTO3xs06fU/400";
    quote = {
        p1: 'Sourcing is the ',
        p2: 'key to your',
        p3: 'recruitmentnstrategy'
    };

	render() {
		return (
            <div style={this.styles}>
                <Parallax bgImage={this.splash}>
                    <div style={{height: 700}}>
                        <div className="text">
                            "Sourcing should be viewed as a business partner, someone who is critical to the success of the business."
                        </div>
                        <div className="DonaSignature">
                            <Signature/>
                        </div>
                    </div>
                </Parallax>
                <Parallax blur={{min: -1,max:3}}>
                <div style={{height: 500}}>
                    <div className="text">Dynamic Blur</div>
                </div>
                </Parallax>
                <QuoteSection quote={this.quote} imageUrl={this.quoteImageUrl} ></QuoteSection>
                <Parallax strength={-100}>
                <div style={{height: 500}}>
                    <div className="text">Reverse direction</div>
                </div>
                </Parallax>

                <div style={{height: 500}}>
                </div>
            </div>
		);
	}
}

export default Home;


{/* <LazyLoad height={762} offsetVertical={300}>
						<img src="https://source.unsplash.com/Q1p7bh3SHj8/400" />
					</LazyLoad> */}