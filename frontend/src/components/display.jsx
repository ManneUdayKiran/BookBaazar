import React, { useState, useEffect } from 'react';

// Import your images
import lovestoryImg from "../assets/image1.jpeg";
import psychologyImg from "../assets/image6.jpeg";
import scifiImg from "../assets/image3.webp";
import historyImg from "../assets/image9.jpg";
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Display = () => {
    // List of images
    const images = [lovestoryImg, psychologyImg, scifiImg, historyImg];

    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set up an interval to change the image every 3 seconds
        const interval = setInterval(() => {
            // Update the current index to the next one, looping back to 0 when we reach the end
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Our  Collections</h1>
            <div style={{ position: 'relative', width: '500px', margin: '0 auto' }}>
                {/* Image */}
                <img 
                    src={images[currentIndex]} 
                    alt="Slideshow" 
                    style={{
                        width: '500px',
                        height: '500px',
                        transition: 'opacity 1s ease-in-out', // Smooth transition
                    }} 
                    
                />
                
            </div>
        </div>
    );
};

export default Display;
