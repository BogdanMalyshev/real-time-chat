import React, {useContext} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./info-bar.scss"
import {Context} from "../../../index";

const InfoBar = ({name}) => {
    const {auth} = useContext(Context)

    function logOut() {
        auth.signOut()
    }

    return (
        <div className="info-bar">
            <AppBar position="relative" color="inherit">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="open drawer" onClick={logOut}
                                edge="start">
                        <ExitToAppIcon/>
                    </IconButton>
                    <h3>{name}</h3>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default InfoBar;