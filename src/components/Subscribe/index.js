import React, { Component } from 'react';
import MailchimpSubscribe from './MailchimpSubscribe';
import './Subscribe.css';

const url = "https://sachagreif.us2.list-manage.com/subscribe/post-json?u=b5af47765edbd2fc173dbf27a&id=d8282e7e96&EMAIL=";

export class Subscribe extends Component {
    render(){
        return (
            <div className="subscribe">
                <p> Exciting jobs ahead,<br /> stay tuned for more information. </p>
                <MailchimpSubscribe url={url}/>
            </div>
        );
    }
}

export default Subscribe;