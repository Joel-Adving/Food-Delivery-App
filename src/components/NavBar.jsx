import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AppsIcon from '@material-ui/icons/Apps'

const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    backgroundColor: theme.palette.background.main,
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    width: '33.33%',
    flexDirection: 'column',
    color: theme.palette.text.main,
  },
}))

function NavBar() {
  const classes = useStyles()
  return (
    <AppBar position="sticky" color="primary" className={classes.appBar}>
      <Toolbar>
        <ButtonGroup className={classes.buttonGroup} variant="text">
          <Button className={classes.button}>
            <AppsIcon />
          </Button>
          <Button className={classes.button}>
            <ShoppingCartIcon />
          </Button>
          <Button className={classes.button}>
            <PersonIcon />
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
