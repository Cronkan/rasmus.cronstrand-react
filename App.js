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


import classNames from 'classnames';
import Logo from "./Logo/Logo";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import ThemeDefaults from './Themes/ThemeDefaults';
import { Route, Redirect } from "react-router-dom";
import { Grid, Typography, Tabs, Tab, AppBar, SvgIcon } from "@material-ui/core";
import Yogas from "./Yogas/Yogas";
import posed, { PoseGroup } from 'react-pose';
import MailIcon from '@material-ui/icons/MailOutline';
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
        backgroundColor: 'rgba(255,255,255,0.5)'
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
    },
    icon: {
        fontSize: 30
    }

});
const sections = [
    'Yoga',
    'Projects'
];





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
                                noWrap
                                className={classes.logoText}

                            >Rasmus Cronstrand</Typography>
                        </div>

                        {sections.map(section => (
                            <Button key={section}>{section}</Button>
                        ))}
                        <IconButton><MailIcon className={classes.icon} /></IconButton>
                        <IconButton>
                            <SvgIcon className={classes.icon}>
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                            </SvgIcon>
                        </IconButton>
                        <IconButton>
                            <SvgIcon className={classes.icon}>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </SvgIcon>
                        </IconButton>

                    </Toolbar>

                </AppBar>
                <div className={classes.layout}>
                    <Grid container spacing={40} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item >
                            <Paper className={classes.paper}>
                                <Route path="/yoga/" component={Yogas} />
                                <Route path="/" component={Yogas} />

                                {/* <Grid container className={classes.markdown} justify="center">
                                    <Grid item>
                                        <img src="https://media.giphy.com/media/EDQDvjUjZKXra/giphy.gif" />
                                    </Grid>
                                </Grid> */}


                            </Paper>
                        </Grid>

                    </Grid>

                </div>
                {/* <Logo />
                <Grid container>
                    <Grid item sm={12}>
                     
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