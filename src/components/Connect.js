import React from 'react';
import '../css/Demo.css';
import ReactPlayer from 'react-player'

// Render a YouTube video player

function Connect() {


    return (
        <div className="about">
            <ReactPlayer className="about-video" style={{maxWidth:"100%"}} url='https://www.youtube.com/watch?v=kfDKxzQ_fRQ' />
        <div className="inner-section border">
            <h1>About Us</h1>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloribus velit ducimus, enim inventore earum, eligendi 
                nostrum pariatur necessitatibus eius dicta a voluptates sit 
                deleniti autem error eos totam
                 nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div className="skills">
                <a target="blank" href="https://dsc.community.dev/pimpri-chinchwad-college-of-engineering/">Join Us</a>
            </div>
        </div>
    </div>
        );
}

export default Connect;
