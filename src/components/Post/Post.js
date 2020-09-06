import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100%',
      margin: '0px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Post = (props) => {
    const {title, id} = props.post;
    const classes = useStyles();
    return (
        <Container>
            <Grid spacing={2} className={classes.gird}>
                <Grid item>
                    <Typography variant="h5" component="div">{title}</Typography>
                    <Link to={`/post/${id}`}> <Button variant="contained" color="primary">Show Details</Button></Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Post;