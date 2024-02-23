import React from 'react';

const Header = ({ imageName, subheading, subheading2 }) => {
    return (
        <div className='container'>
            <div className="header">
                <div className="logo">
                    <img className="logo" src={require(`../images/${imageName}`)} alt="sakura bistro logo"></img>
                </div>
            </div>
            <div className="subheader">
                <div className="subheading">{subheading}</div>
                <div className="subheading2">{subheading2}</div>
            </div>
        </div>
    );
};

export default Header;
