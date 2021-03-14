import React, { useState } from 'react'
import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Input,
  Box,
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MenuIcon from '@material-ui/icons/Menu'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
  },
  ifTrue: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  toolbar: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'Mystery Quest',
    color: theme.palette.text.main,
    fontWeight: 600,
    fontSize: 22,
  },
  currentPlaceContainer: {
    width: 350,
  },
  currentPlace: {
    color: 'black',
    paddingLeft: 8,
  },
  address: {
    color: 'red',
  },
  input: {
    marginLeft: 8,
    color: 'red',
    width: 124,
  },
  menuIcon: {
    color: 'black',
  },
}))

function Header() {
  const isActive = useMediaQuery('(min-width: 600px)')
  const isActive2 = useMediaQuery('(max-width: 599px)')

  const classes = useStyles()
  const [currentAddress, setCurrentAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(currentAddress)
  }

  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar className={classes.toolbar}>
        {isActive && <Typography className={classes.logo}>Souperb</Typography>}

        {isActive && (
          <Grid
            className={classes.currentPlaceContainer}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography className={classes.currentPlace}>
              Nuvarande plats
            </Typography>
            <form onSubmit={handleSubmit}>
              <Input
                className={classes.input}
                placeholder="Brunbärsvägen 8"
                value={currentAddress}
                onInput={(e) => setCurrentAddress(e.target.value)}
              />
            </form>
            <IconButton size="small">
              <ArrowDropDownIcon style={{ color: 'black' }} />
            </IconButton>
          </Grid>
        )}

        {isActive2 && (
          <Grid
            className={classes.ifTrue}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography style={{}} className={classes.currentPlace}>
              Nuvarande plats
            </Typography>
            <Box style={{ display: 'flex', flexDirection: 'row' }}>
              <form onSubmit={handleSubmit}>
                <Input
                  style={{}}
                  className={classes.input}
                  placeholder="Brunbärsvägen 8"
                  value={currentAddress}
                  onInput={(e) => setCurrentAddress(e.target.value)}
                />
              </form>
              <IconButton size="small">
                <ArrowDropDownIcon style={{ color: 'black' }} />
              </IconButton>
            </Box>
          </Grid>
        )}

        {isActive && (
          <IconButton>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
