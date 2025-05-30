import React from "react";
import heroimg from "../assets/sideimg.avif";
import Book from "../components/Book";
import lovestoryImg from "../assets/lovestory.jpg"; // Importing images
import psychologyImg from "../assets/psychology.jpeg";
import scifiImg from "../assets/scifi.jpeg";
import historyImg from "../assets/history.jpeg";
import image6 from "../assets/image6.jpeg"
import image9 from "../assets/image9.jpg"
import image3 from "../assets/image3.webp"
// import image6 from "../assets/image6.jpeg"
import { useState } from "react";
import Display from "../components/display";

const Home = () => {
   
    return (
        <div className="homepage">
            <Display/>
            <header className="welcome-section"> {/* Use className instead of class */}
                <h1>Welcome to The Book Bazaar</h1>
                {/* <img src={heroimg} alt="sideimg" /> */}
                <main></main>
                <p>Your one-stop shop for all things books!</p>
            </header>
            
            <div className="collections-section">
                <h2>Explore Our Book Collections</h2>
                <div className="collections-container">
                
                     <Book
                     
                        title="Love Story Books" 
                        image={lovestoryImg}  // Pass the imported image here
                        description="A collection of heartwarming love stories."
                    />
                
                    <Book 
                        title="Psychology Books" 
                        image={psychologyImg}   // Pass the imported image here
                        description="Dive deep into the human mind with these great reads."
                    />
                    <Book 
                        title="Science Fiction Books" 
                        image={scifiImg}  // Pass the imported image here
                        description="Explore futuristic worlds and mind-bending stories."
                    />
                    <Book 
                        title="History Books" 
                        image={historyImg}  // Pass the imported image here
                        description="Learn from the past with these compelling history books."
                    />
                    <Book 
                        title="" 
                        image={image6}  // Pass the imported image here
                        description="Learn from the past with these compelling history books."
                    />
                    <Book 
                        title="" 
                        image={image9}  // Pass the imported image here
                        description="Learn from the past with these compelling history books."
                    />
                    <Book 
                        title="" 
                        image={image3}  // Pass the imported image here
                        description="Learn from the past with these compelling history books."
                    />
                   
                
                </div>
            </div> 
            </div>          
    );
};

export default Home;

