import React from 'react';
import './style.css'

function Home(){
    return(
        <div>
            <header className="header">
                <div className="tollbar">
                    <a href="/">A Rede Social</a>
                    <imput type="text"></imput>
                </div>

                    <div>
                        <button>Novo post</button>
                        <spam>img1</spam>
                        <spam>img2</spam>
                    </div>
            </header>

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