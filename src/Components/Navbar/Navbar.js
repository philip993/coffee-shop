import React, { useState } from 'react';
import './NavbarStyle.scss';
import { Link } from 'react-router-dom';
import { Drawer, ListItem, Button, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUserCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
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
      <div className="navbarFirstDiv">
        <Button className="btn" onClick={handleOpen}>
          <FontAwesomeIcon className="icon" icon={faBars} />
        </Button>
      </div>
      <div className="navbarSecondDiv">
        <Button className="btn">
          <FontAwesomeIcon className="icon" icon={faUserCircle} />
        </Button>
        <Button className="btn">
          <Badge badgeContent={5} color="secondary">
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          </Badge>
        </Button>
      </div>

      <Drawer id="drawer" open={open} onClose={handleClose}>
        <div className="drawerDiv">
          <ListItem className="listItem">
            <Link className="link" to="/">
              Homepage
            </Link>
          </ListItem>
          <ListItem className="listItem">
            <Link className="link" to="#">
              #
            </Link>
          </ListItem>
          <ListItem className="listItem">
            <Link className="link" to="#">
              #
            </Link>
          </ListItem>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
