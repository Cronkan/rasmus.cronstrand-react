import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import thingsToConsider from './things-to-consider.md';
import mainProblems from './main-problems.md';
import classNames from 'classnames';
import Logo from "./Logo/Logo";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import ThemeDefaults from './Themes/ThemeDefaults';
import { Route, Redirect } from "react-router-dom";
import { Grid, Typography, Tabs, Tab, AppBar } from "@material-ui/core";
import Yogas from "./Yogas/Yogas";
import posed, { PoseGroup } from 'react-pose';
const styles = theme => ({
    '@global': {
        body: {
            // background: 'linear-gradient(to top, #512DA8, #673AB7)',
            width: '100%',
            height: '100%',
            margin: '0'
        },
        html: {
            width: '100%',
            height: '100%',
            margin: '0'
        }
    },
    appBar: {
        // backgroundColor: 'transparent'
    },
    logoContainer: {
        flex: 1
    },
    logo: {
        width: '20rem',
    },
    logoText: {
        fontFamily: 'Raleway'
    },
    layout: {
        height: '100%',
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 1}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }

});
const sections = [
    'Yoga',
    'Projects',
    'Contact',
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

const posts = [thingsToConsider, mainProblems];


const social = ['GitHub', 'Twitter', 'Facebook'];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { classes } = this.props;
        return (

            <MuiThemeProvider theme={createMuiTheme(ThemeDefaults)}>
                <CssBaseline />

                <AppBar position="sticky" className={classes.appBar}>
                    <Toolbar variant="dense">
                        <div className={classes.logoContainer}>
                            {/* <div className={classes.logo}>
                                <Logo />
                            </div> */}
                            <Typography
                                component="h2"
                                variant="h4"
                                color="inherit"
                                noWrap
                                className={classes.logoText}

                            >Rasmus Cronstrand</Typography>
                        </div>

                        {sections.map(section => (
                            <Button key={section}  >{section}</Button>
                        ))}
                    </Toolbar>

                </AppBar>
                <div className={classes.layout}>
                    <Grid container spacing={40} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item >
                            <Paper className={classes.paper}>
                                <Typography variant="h5" gutterBottom>
                                    Developer doing Yoga
              </Typography>
                                <Divider />

                                <Grid container className={classes.markdown} justify="center">
                                    <Grid item>
                                        <img src="https://media.giphy.com/media/EDQDvjUjZKXra/giphy.gif" />
                                    </Grid>
                                </Grid>

                                {posts.map(post => (
                                    <>
                                        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                                            {post}
                                        </Markdown>
                                        <Divider />
                                    </>
                                ))}
                            </Paper>
                        </Grid>
                        {/* <Grid item xs={12} md={4}>

                            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                Social
              </Typography>
                            {social.map(network => (
                                <Typography key={network}>{network}</Typography>
                            ))}
                        </Grid> */}
                    </Grid>

                </div>
                {/* <Logo />
                <Grid container>
                    <Grid item sm={12}>
                        <Route path="/yoga/" component={Yogas} />
                        <Route path="/" component={Yogas} />
                    </Grid>
                </Grid> */}
            </MuiThemeProvider>
        )
    }
}
App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App)