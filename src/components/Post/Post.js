import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '40px auto'
    },
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.light,
        background: 'lightgray'
    },
    typography: {
        marginBottom: '40px'
    }
  }));

const Post = (props) => {
    const {title, id} = props.post;
    const classes = useStyles();
    return (
        <Container  className={classes.container}>
            <Grid container spacing={2} className={classes.gird}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography  className={classes.typography} variant="h5">{title}</Typography>
                        <Link to={`/post/${id}`}> <Button variant="contained" color="primary">Show Details</Button></Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Post;