import React from 'react';
import Grow from '@material-ui/core/Grow';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
const Transition = (props) => {
    return <Grow  {...props} />;
}
export default {
    shape: {
        borderRadius: 1
    },
    palette: {
        type: 'light',

        primary: purple,
        secondary: pink,
    },
    typography: {
        fontFamily: 'IBM Plex Sans',

        useNextVariants: true,
        // h5: {
        //     fontFamily: 'Raleway',
        //     fontWeight:200
        // }
    },
    props: {
        MuiGrid: {
            spacing: 16
        },
        MuiDialog: {
            TransitionComponent: Transition
        },
    },
};