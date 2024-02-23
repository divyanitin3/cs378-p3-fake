import React from 'react';
import {useState} from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, quantity, onAdd, onRemove}) => {
    return (
        <div className="menu-container">
            <div className="menu-row">
                <div className="menu-image-col">
                    <img 
                        src={require(`../images/${imageName}`)} 
                        alt={title} 
                        className="menu-image rounded-3"
                        style={{ width: "110%", border: '2px solid #ccc' }}
                    />
                </div>
                <div className="menu-detail-col">
                    <div className="menu-card-body">
                        <h5 className="menu-card-title">{title}</h5>
                        <p className="menu-card-text">{description}</p>
                    </div>
                    <div className="menu-card-footer">
                        <p className="menu-price-text">Price: ${price}</p>
                        <div className="quantity-control">
                            <button className="quantity-btn circular" onClick={onRemove}> - </button>
                                <span className="quantity"> {quantity} </span>
                            <button className="quantity-btn circular" onClick={onAdd}> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MenuItem;
