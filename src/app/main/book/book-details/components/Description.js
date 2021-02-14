import React from "react";
import { Button, BrinmiUtils } from "@brinmi";
import { Rating } from "@material-ui/lab";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function Description() {
  return (
    <div className="flex flex-col">
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
      <p className="flex items-center space-x-2 mb-4">
        <span className="text-base text-gray-600">Price</span>
        <span>{BrinmiUtils.formatCurrency(6000)}</span>
      </p>

      <p className="text-lg mb-8">
        Spiritual direction is the practice to being with people as they attempt
        to deepen their relationship with the divine, or to learn and grow in
        their own personal spirituality. The person seeking direction shares
        stories with their encounter of the divine or how they are cultivating a
        life attuned to the spiritual things.
      </p>

      <div className="flex items-center justify-evenly md:justify-start space-x-4">
        <Button variant="outlined" color="secondary" size="large" rounded>
          Add to Cart
        </Button>
        <Button variant="contained" color="secondary" size="large" rounded>
          Read
        </Button>
      </div>
    </div>
  );
}
