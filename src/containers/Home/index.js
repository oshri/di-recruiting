import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import { Parallax, Background } from 'react-parallax';
import './Home.css';

// cvUIv9j5wDg  for contact

class Home extends Component {
    splash = "https://source.unsplash.com/xah3Ny20Vbw/400";

	render() {
		return (
            <div style={this.styles}>
                <Parallax bgImage={this.splash} strength={500}>
                    <div style={{height: 700}}>
                        <div className="text">
                            "Sourcing should be viewed as a business partner, someone who is critical to the success of the business."
                        </div>
                    </div>
                </Parallax>
                <Parallax blur={{min: -1,max:3}}>
                <div style={{height: 500}}>
                    <div className="text">Dynamic Blur</div>
                </div>
                </Parallax>
                <div style={{height: 500}}>

                </div>
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