import React, { Fragment } from "react";
import { BrinmiUtils } from "@brinmi";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";

const useStyles = makeStyles((theme) => ({}));

const reviews = [
  {
    name: "Falz the Bahd Guy",
    comment:
      "This book is awesome! The growning spiritually, growing in the lord really got me. God bless the author",
  },
  {
    name: "Falz the Bahd Guy",
    comment:
      "This book is awesome! The growning spiritually, growing in the lord really got me. God bless the author",
  },
];

export default function Description(props) {
  const classes = useStyles(props);

  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h2 className="flex justify-between items-center space-x-2 mb-2">
          <h3 className="">Design Your Faith</h3>
          <span className="text-green text-lg">
            {BrinmiUtils.formatCurrency(1200000)}
          </span>
        </h2>
        <h3 className="flex items-center space-x-2 mb-2">
          <span className="text-base">Ratings 4.9</span>
          <Rating
            name="customized-empty"
            size="small"
            defaultValue={2}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </h3>
        <h3 className="flex items-center space-x-2 mb-2">
          <span className="text-base">Downloads</span>
          <CloudDownloadOutlinedIcon />
          <span className="text-base">345</span>
        </h3>
      </div>

      <List
        className={classes.root}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Reviews
          </ListSubheader>
        }
      >
        {reviews.map((review, i) => (
          <Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/assets/icons/profile.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={review.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Book
                    </Typography>
                    {` — ${review.comment}`}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <Rating
                  name="customized-empty"
                  size="small"
                  defaultValue={2}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </div>
  );
}
