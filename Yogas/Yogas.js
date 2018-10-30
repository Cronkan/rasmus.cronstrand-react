import React, { Component } from 'react'
import { withStyles, Typography } from '@material-ui/core';
import Consider from './Consider';
import { Route } from "react-router-dom";
const styles = theme => ({

});
class Yogas extends Component {
    render() {
        return (
            <>
                <Typography variant="subtitle1">Yoga</Typography>
                <Route path="/" component={Consider} />
                <Route path="/things-to-consider" component={Consider} />
            </>
        )
    }
}

export default withStyles(styles)(Yogas);