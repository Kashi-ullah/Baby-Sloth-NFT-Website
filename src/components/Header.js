import React from 'react'
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.nav}>
            <div>
                <img className={classes.image} src='logo.png'></img>
            </div>
            <div className={classes.links}>
                <div>
                    <a className={classes.home} href='#'>HOME</a>
                    <a href='#'>ABOUT</a>
                    <a href='#'>TEAM</a>
                    <a href='#'>TOKENOMICS</a>
                    <a href='#'>ROADMAPS</a>
                    <a href='#'>FAQ</a>
                </div>

                <div>
                    <button className={classes.button}>CONNECT WALLET</button>
                </div>

            </div>
        </div>
    )
}

export default Header