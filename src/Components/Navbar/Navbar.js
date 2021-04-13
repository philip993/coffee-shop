import React, { useState, useEffect } from 'react';
import './NavbarStyle.scss';
import { Link } from 'react-router-dom';
import { Drawer, ListItem, Button, Badge, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUserCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { countItemsInCart } from '../Cart/CartActions';
const Navbar = () => {
  const { cartItemsNo } = useSelector((state) => ({
    ...state.CartReducer,
  }));
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(cartItemsNo);

  useEffect(() => {
    dispatch(countItemsInCart());
  }, []);

  return (
    <div className="navbarDiv">
      <div className="navbarFirstDiv">
        <Tooltip title="Check Menu">
          <Button className="btn" onClick={handleOpen}>
            <FontAwesomeIcon className="icon" icon={faBars} />
          </Button>
        </Tooltip>
      </div>
      <div className="navbarSecondDiv">
        <Tooltip title="Go to Profile">
          <Button className="btn">
            <FontAwesomeIcon className="icon" icon={faUserCircle} />
          </Button>
        </Tooltip>

        <Tooltip title="Check Cart">
          <Button className="btn">
            <Badge badgeContent={5} color="secondary">
              <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </Badge>
          </Button>
        </Tooltip>
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
