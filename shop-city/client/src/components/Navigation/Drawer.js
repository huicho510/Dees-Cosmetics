import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key={'home'}>
            <a href='/home' >
            <ListItemText primary={'Home'} />
            </a>
          </ListItem>
      </List>
      <Divider />
      <List>
        
          <ListItem button key={'Log In'}>
            <a href='/login' >
            <ListItemText primary={'Log In'} />
            </a>
          </ListItem>
          <ListItem button key={'Sign Up'}>
            <a href='/sign' >
            <ListItemText primary={'Sign Up'} />
            </a>
          </ListItem>
          <ListItem button key={'About'}>
            <a href='/about' >
            <ListItemText primary={'About'} />
            </a>
          </ListItem>
          <ListItem button key={'Cart'}>
            <a href='/checkout' >
            <ListItemText primary={'Shopping Cart'} />
            </a>
          </ListItem>

      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment >
  <Button onClick={toggleDrawer('left', true)}>
    <MenuIcon className= 'menu-icon' />
  </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state.left}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}