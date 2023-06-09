import { List, ListItem } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import "./Tutorial.css";
export default function Tutorial() {
  return (
    <div className={"Tutorial"}>
      <List>
        <ListItem disablePadding>
          <p>
            1. Go to the <b>Functions</b> tab and define a function.
          </p>
        </ListItem>
        <ListItem disablePadding>
          <p>
            2. Go to the <b>Transformation</b> tab, upload your .xlsx file and
            click process.
          </p>
        </ListItem>
        <ListItem disablePadding>
          <p>
            3. <b>Download</b> your processed file!
          </p>
        </ListItem>
        <Link
          href="https://excel-transformation-tool.com/documentation/"
          target={"_blank"}
          rel="noopener"
        >
          Link to documentation
        </Link>
      </List>
    </div>
  );
}
