import React from 'react';
import {CircularProgress} from "@material-ui/core";
import "./loading.scss"

const Loading = ({size = 40, className= ""}) => {
    return (
        <div className={`loading ${className}`}>
            <CircularProgress size={size}/>
        </div>
    );
};

export default Loading;