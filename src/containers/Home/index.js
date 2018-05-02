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
                        <div className="quote">
                            <div className="text">
                                <p>"Sourcing should be viewed as a business partner, someone who is critical to the success of the business." <div className="DonaSignature"><Signature/></div></p>
                            </div>
                            
                        </div>
                    </div>
                </Parallax>

                <Parallax blur={{min: -1,max:3}}>
                    <div className="content-wrapper">
                        <p>
                            After many years of working in Analytical and Project Management roles on Wall Street as well as in Customer Success roles at Israeli Fintech and cyber companies, I’ve applied my unique skill set to ensure companies source the best candidates for their open positions. 
                            <br/>
                            My services include sourcing and headhunting for mid-level to C-level positions in High-Tech and Finance. I specialize in Sales, Marketing, Product, Operations and Analytical roles. My expertise is in sourcing native English-speaking candidates as well as 
multi-lingual individuals. I provide personalized and professional service and spot-on sourcing for the role and company culture.
                        </p>
                    </div>
                </Parallax>

                <QuoteSection quote={this.quote} imageUrl={this.quoteImageUrl} ></QuoteSection>
                
                <Parallax strength={-100}>
                    <div className="stories content-wrapper">
                        <h4>Stories</h4>
                        <p>What our clients are saying...</p>
                    </div>
                </Parallax>
            </div>
		);
	}
}

export default Home;


{/* <LazyLoad height={762} offsetVertical={300}>
						<img src="https://source.unsplash.com/Q1p7bh3SHj8/400" />
					</LazyLoad> */}