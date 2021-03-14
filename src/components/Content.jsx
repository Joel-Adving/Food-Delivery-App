import { Grid } from '@material-ui/core'
import React from 'react'
import SoupCard from './SoupCard'
import soupList from '../constants/soups'

function Content() {
  const getSoupCard = (soupObj) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <SoupCard {...soupObj} />
      </Grid>
    )
  }
  return (
    <Grid spacing={4} container justify="center">
      {soupList.map((soupObj) => getSoupCard(soupObj))}
    </Grid>
  )
}

export default Content
