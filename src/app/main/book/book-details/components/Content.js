import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Actions from "./../../store/actions";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

function Content(props) {
  const { chapters } = props;
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState([]);

  const handleClick = (event, name) => {
    setSelected([]);
    dispatch(Actions.openChapterSlideDialog(chapters));
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2 px-4 py-2">
        <h3 className="text-lg">Categories</h3>
        <h3 className="text-lg font-light text-gray-600">{chapters.length}</h3>
      </div>
      <Table>
        <TableBody>
          {chapters.map((chapter, i) => {
            const isItemSelected = isSelected(chapter.title);
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, chapter.title)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={i}
                selected={isItemSelected}
              >
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  Chapter {i + 1} — {chapter.title}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default withRouter(Content);
