import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '300px',
    height: '300px',
    backgroundColor: 'purple'
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <center>
    <Paper className={classes.root} elevation={2}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
    </center>
  );
}