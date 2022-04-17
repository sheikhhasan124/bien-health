import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <h1>foooter {year}</h1>
        </div>
    );
};

export default Footer;