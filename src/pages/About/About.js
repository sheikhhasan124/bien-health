import React from 'react';
import './About.css'
import myPic from '../../imges/me.png'

const About = () => {
    return (
        <div className='about-me-container'>
            <div className='about-me top'>
                <h3>My Goal</h3>
                <p>of my life is to be a good tech-boy, as well as to become honest peachfull person, and spread tech invention to my peoples.the main goal of my life is to become a true, honest and loyal human, because there is very low competition in this field.The first aim in my life is to learn various technology and do such activity wich beneficial for in this world. My greatest aim in life is to serve my country by these technology, and create more job opportunity for my people,and come up with the whole world..</p>
            </div>
            <div className='about-me'>
                <img src={myPic} alt="" />
                <h4>Hasan Ullah</h4>
            </div>
            <div className='about-me bottom'>
                <h3>How to Achive my goal</h3>
                <p>Hard work is the key to both success and self-satisfaction. I remember always that  When I do hard work, I can achieve my goals, which leads to self-satisfaction. I must always remember that positivity and motivation come from hard work. I am always determined and disciplined to learn new things. I always hard work to gain my dream. I concentrate as it ensures my work to finish on time and in a better manner. Therefore, by working hard, I can increase my concentration power and open doors to new opportunities</p>
            </div>
        </div>
    );
};

export default About;