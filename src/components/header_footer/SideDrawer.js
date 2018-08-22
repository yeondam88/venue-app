import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log("clicked")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log("clicked")}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => console.log("clicked")}>
          Hightlights
        </ListItem>
        <ListItem button onClick={() => console.log("clicked")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("clicked")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
