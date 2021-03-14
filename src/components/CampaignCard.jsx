import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 32,
    marginTop: '32px',
    marginBottom: '32px',
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    textAlign: 'center',
  },
}))

const CampaignCard = () => {
  const classes = useStyles()
  return (
    <Grid>
      <Card className={classes.root}>
        <Box>
          <Typography className={classes.title} color="textSecondary">
            Dela till dina vänner så får du nästa leverans helt gratis!
          </Typography>
        </Box>
      </Card>
    </Grid>
  )
}

export default CampaignCard
