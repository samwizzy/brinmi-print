import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { BrinmiUtils } from "@brinmi";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function BookCard({ book }) {
  return (
    <Card>
      <CardActionArea href={`books/${book.book.id}`}>
        <CardMedia
          className="w-full h-64"
          image="https://image.freepik.com/free-psd/high-angle-turned-open-book-mock-up_23-2148657114.jpg"
        />
        <CardContent>
          <div className="flex flex-col">
            <h3 className="text-base">{book.book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              by {book.book.publisher.name}
            </p>
            <Rating
              name="customized-empty"
              size="small"
              defaultValue={2}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
            <h3 className="flex justify-between text-sm space-x-4 mt-2">
              <span className="text-green">
                {BrinmiUtils.formatCurrency(book.book.price)}
              </span>
              <Divider orientation="vertical" flexItem />
              <span className="text-green">
                {BrinmiUtils.formatCurrency(
                  Math.ceil(book.book.price / 480),
                  "USD"
                )}
              </span>
            </h3>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
