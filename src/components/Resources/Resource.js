import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from './Resources.module.css';
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const Resource = ({title, infoSource, image, description, url}) => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  return (
    <Card className={styles.resource}>
      <div
        className={styles.resource__overlap}
        style={{ display: clicked ? "block" : "none" }}
      >
        <div className={styles.resource__overlap__content}>
          <div className={styles.resource__overlap__icon}>
            <CloseIcon
              className={styles.close__icon}
              onClick={() => setClicked(false)}
            />
          </div>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {infoSource}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
      </div>
      <CardActionArea onClick={() => setClicked(true)}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {infoSource}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default Resource;

