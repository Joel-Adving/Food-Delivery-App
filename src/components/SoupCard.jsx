import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {},
  media: {
    height: 200,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'space-between',
  },
  cardActions: {
    justifyContent: 'space-between',
    alignIontent: 'center',
  },
})

const SoupCard = (props) => {
  const classes = useStyles()
  const { imgUrl, name, description, price } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgUrl} title="Soup" />
        <CardContent>
          <CardContent className={classes.titleContainer}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" variant="outlined" color="black">
          Lägg i kundvagn
        </Button>
        <Typography gutterBottom variant="h6" component="h2">
          {price + 'Kr'}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default SoupCard
