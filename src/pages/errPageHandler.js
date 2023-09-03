import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Grid, Button, Typography } from '@material-ui/core';

import imgUrl from '../Assets/svg/404.svg';

const styles = theme => ({
    root: {
        flex: '1 0 100%',
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        letterSpacing: '.7rem',
        justifyContent: 'center',
        alignItems: 'center',
        textIndent: '.7rem',
        fontWeight: theme.typography.fontWeightLight,
        [theme.breakpoints.only('xs')]: {
            fontSize: 28,
        },
        whiteSpace: 'nowrap',
    },
    headline: {
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit,
        maxWidth: 500,
        textAlign: 'center',
    },
    content: {
        paddingBottom: theme.spacing.unit * 8,
        paddingTop: theme.spacing.unit * 8,
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing.unit * 12,
        },
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        width: 328,
    },
    logo: {
        margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
        width: '100%',
        height: '35vw',
        maxHeight: 200,
    },
});


class errPageHandler extends Component {
    static defaultProps = {
        code: '404',
        title: 'Page not found.',
        desc: '',
        actionLabel: 'Go to home',
        actionClick: './basic',
    }

    handleClick = (e) => {
        const { history } = this.props;

        /*
       A component configured with a route will receive three props: history, location, and match:
         Among them, you can move to another path or switch to the front and back pages through push, replace of this object.
         In this loading page, .push is used to create a link that moves the loading page to the '/basic' page through the router.
        */

        // history.push(e);
        history.push('/basic');
    };

    render() {
        const {
            classes, code, title, desc, actionLabel, actionClick,
        } = this.props;

        // const imgUrl = `/Assets/svg/${code}.svg`; // 이런 식으로 좀 동적으로 관리하고 싶은데...

        const { handleClick } = this;


        return (
            <Fragment>
                <Grid className={classes.root}>
                    <img src={imgUrl} alt={code} className={classes.logo} />
                    <Grid className={classes.text}>
                        <Typography
                            variant="h3"
                            align="center"
                            component="h1"
                            color="inherit"
                            gutterBottom
                            className={classes.title}
                        >
                            {code} 
{' '}
{title}
                        </Typography>
                        <Typography
                            variant="h5"
                            component="h2"
                            color="inherit"
                            gutterBottom
                            className={classes.headline}
                        >
                            {desc}
                        </Typography>
                        <Button
                            onClick={handleClick}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            {actionLabel}
                        </Button>

                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}


errPageHandler.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(errPageHandler);
