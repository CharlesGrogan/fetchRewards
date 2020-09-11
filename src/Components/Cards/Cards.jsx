import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = (props) => {
  // console.log("this is props", props);
  // console.log("typeof props", typeof props);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} >
          <CardContent className={styles.alpha}>
            <Typography
              variant="h5"
              component="h2"
              color="textSecondary"
              gutterBottom
            >
              List ID: (1,2,3,4)
            </Typography>
            <Typography compoment="ul">
              Names and IDs in Ascending Order:
              <Typography component="li">Name: ID:</Typography>
            </Typography>
            <Typography>
              *remove all entries with null or "" in name.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent className={styles.beta}>
            <Typography
              variant="h5"
              component="h2"
              color="textSecondary"
              gutterBottom
            >
              List ID: (1,2,3,4)
            </Typography>
            <Typography compoment="ul">
              Names and IDs in Ascending Order:
              <Typography component="li">Name: ID:</Typography>
            </Typography>
            <Typography>
              *remove all entries with null or "" in name.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent className={styles.gamma}>
            <Typography
              variant="h5"
              component="h2"
              color="textSecondary"
              gutterBottom
            >
              List ID: (1,2,3,4)
            </Typography>
            <Typography compoment="ul">
              Names and IDs in Ascending Order:
              <Typography component="li">Name: ID:</Typography>
            </Typography>
            <Typography>
              *remove all entries with null or "" in name.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent className={styles.delta}>
            <Typography
              variant="h5"
              component="h2"
              color="textSecondary"
              gutterBottom
            >
              List ID: (1,2,3,4)
            </Typography>
            <Typography compoment="ul">
              Names and IDs in Ascending Order:
              <Typography component="li">Name: ID:</Typography>
            </Typography>
            <Typography>
              *remove all entries with null or "" in name.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
