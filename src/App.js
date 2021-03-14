import { Grid } from '@material-ui/core'
import Header from './components/Header'
import Content from './components/Content'
import { makeStyles } from '@material-ui/core/styles'
import CampaignCard from './components/CampaignCard'
import { useMediaQuery } from '@material-ui/core'
import NavBar from './components/NavBar'
import CarouselSlide from './components/Carousel'

const useStyles = makeStyles({
  root: {},
})

function App() {
  const classes = useStyles()
  const isActive = useMediaQuery('(max-width: 600px)')

  return (
    <Grid className={classes.root} container direction="column">
      <Header />
      <Grid container justify="center">
        <Grid xs={10} sm={5}>
          <CarouselSlide />
        </Grid>
      </Grid>

      <Grid item container justify="center">
        <Grid item container xs={10} sm={5} md={6} lg={7}>
          <Grid item xs={1} />
          <Content />
          <Grid item xs={1} />
        </Grid>
      </Grid>
      {isActive && <NavBar />}
    </Grid>
  )
}

export default App
