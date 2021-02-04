import React, { useState } from 'react';
import { Drawer, ListItem, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="navbarDiv">
      <Button onClick={handleOpen}>Menu</Button>
      <Drawer open={open} onClose={handleClose}>
        <ListItem>
          <Link to="/">Homepage</Link>
        </ListItem>
        <ListItem>
          <Link to="#">#</Link>
        </ListItem>
        <ListItem>
          <Link to="#">#</Link>
        </ListItem>
      </Drawer>
    </div>
  );
};

export default Navbar;
