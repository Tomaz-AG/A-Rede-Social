import React from 'react';
import Button from '@material-ui/core';
import '../style.css'

function Header(){
    return(
    <header className="header">
                <div className="tollbar">
                    <a href="/">A Rede Social</a>
                    <imput type="text"></imput>
                </div>

                    <div>
                    <Button variant="contained" color="primary">Novo post</Button>
                        <spam>img1</spam>
                        <spam>img2</spam>
                    </div>
            </header>
    )
}

export default Header;