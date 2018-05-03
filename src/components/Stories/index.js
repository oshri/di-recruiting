import React, { Component}  from 'react';
import './Stories.css';
import Story from '../Story';
import alonImage from './alon_rozenberg.jpg';
import harelGillon from './harel_gillon.jpg';
import asafRosenheim from './asaf_rosenheim.jpg';

class Stories extends Component {
    data = [
        {
            id: 1,
            name: 'Alon Rozenberg',
            title: 'SVP Customer Success & Field Engineering at Namogoo',
            details: 'Dona is an expert sourcer and has helped me grow my team with employees that really fit our needs and culture at Namogoo. She is intelligent, efficient and responsive throughout the hiring process.',
            imageUrl: alonImage
        },
        {
            id: 2,
            name: 'Harel Gillon',
            title: 'CEO at Oppenheimer Israel',
            details: 'Dona is professional, persistent and spot-on when sourcing the right candidates for Oppenheimer. Her efforts are constant and persistent until our needs are fully met. She fully comprehends the position requirements and makes every effort to find the perfect candidate.',
            imageUrl: harelGillon
        },
        {
            id: 3,
            name: 'Asaf Rosenheim',
            title: 'Real Estate Business Development at Profimex',
            details: 'Dona really stands out as a Headhunter, with her courteousness and professionalism. She provides personalized service and has helped us recruit for many of our openings.',
            imageUrl: asafRosenheim
        }

    ];

    list = this.data.map((story) => {
        return <Story user={story} key="{story.id}"/> ;
    });

    render() {
        return <div className="Stories">{this.list}</div>;
    }
}


export default Stories;