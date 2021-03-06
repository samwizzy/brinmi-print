import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import _ from "lodash";

export default function Content(props) {
  const [selected, setSelected] = React.useState([]);
  const handleClick = (event, name) => {
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2 px-4 py-2">
        <>
          <h3 className="text-lg">Books</h3>
          <h3 className="text-lg font-light text-gray-600">105</h3>
        </>
        <IconButton component={Link} to="/account/books/new">
          <AddIcon />
        </IconButton>
      </div>
      <Table>
        <TableBody>
          {_.range(0, 10).map((row, i) => {
            const isItemSelected = isSelected(row.name);
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={i}
                selected={isItemSelected}
              >
                <TableCell>{i + 1}</TableCell>
                <TableCell>Chapter {i + 1} — The Faith</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
