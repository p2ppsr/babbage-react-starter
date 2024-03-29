import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { createAction } from '@babbage/sdk'
import { toast } from 'react-toastify'

const useStyles = makeStyles(theme => ({
  content_wrap: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    minHeight: '100vh'
  },
  action_button: {
    marginBottom: theme.spacing(3)
  }
}), { name: 'App' })

const App = () => {
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  const handleClick = async () => {
    try {
      setLoading(true)
      const action = await createAction({
        description: 'Create an Action with Babbage React Starter',
        outputs: [
          {
            script: '016a',
            satoshis: 1
          }
        ]
      })
      console.log('Your Action was created! Here are the details:')
      console.log(action)
      toast.success('Action created! Hit F12 to open your browser console and see the details.')
      console.log(
        'To learn about creating and using Actions in your apps, check out the tutorial: https://projectbabbage.com/using-action-protocols'
      )
    } catch (e) {
      console.error('Uh oh! Looks like something went wrong...')
      console.error(e)
      toast.error(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.content_wrap}>
      <Typography variant='h1' align='center'>
        Babbage React Starter
      </Typography>
      <Button
        className={classes.action_button}
        onClick={handleClick}
        variant='contained'
        color='primary'
        size='large'
        disabled={loading}
      >
        Create an Action
      </Button>
      <a href='https://projectbabbage.com/docs/babbage-sdk'>
        <Button>Learn the Babbage SDK</Button>
      </a>
    </div>
  )
}

export default App
