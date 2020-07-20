import React from 'react';import './style.css'
import Header from'./components/Header.js'

function Home(){
    return(
        <div>
            <Header>
            </Header>    
            <div className="toolbar"></div> 
            <main className="feed">
                <div className="toolbar"> </div>
                <div className="navbar">
                    navbar
                </div>

                <div className = "feed">
                    feed
                </div>
            </main>
        </div>
    )
}

export default Home;