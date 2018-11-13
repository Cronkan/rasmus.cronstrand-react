import React, { Component } from 'react'
import { withStyles, Typography } from '@material-ui/core';
import Consider from './Consider';
import { Route } from "react-router-dom";
import thingsToConsider from './things-to-consider.md';
import mainProblems from './main-problems.md';
import Divider from '@material-ui/core/Divider';
import Markdown from '../Markdown';
const styles = theme => ({

});
const posts = [thingsToConsider, mainProblems];

class Yogas extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Typography variant="h5" gutterBottom>
                    Developer doing Yoga
              </Typography>
                <Divider />
                {posts.map(post => (
                    <>
                        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                            {post}
                        </Markdown>
                        <Divider />
                    </>
                ))}
                <Route path="/" component={Consider} />
                <Route path="/things-to-consider" component={Consider} />
            </>
        )
    }
}

export default withStyles(styles)(Yogas);