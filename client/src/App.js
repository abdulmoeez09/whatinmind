import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from '../src/images/memories.png'
import { getPosts } from './actions/posts'
import Posts from '../src/components/Posts/Posts.js'
import Form from '../src/components/Form/Form.js'
import useStyles from './styles'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default App
