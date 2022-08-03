import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from '../../src/utils/axios'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Details() {
  const router = useRouter()
  const roomCode = router.query.code
  const [votesToSkip, setVotesToSkip] = useState(2)
  const [guestCanPause, setGuestCanPause] = useState(false)
  const [isHost, setIsHost] = useState(false)

  const getRoomDetail = async () => {
      await axios.get(`/api/get-room?code=${router.query.code}`)
      .then(response => {
        if (response.status === 200) {
          setVotesToSkip(response?.data?.votes_to_skip)
          setGuestCanPause(response?.data?.guest_can_pause)
          setIsHost(response?.data?.is_host)
        }
      })
      .catch(error => console.error(error))
  }
  getRoomDetail()

  const handleLeaveButtonClick = async () => {
    if (isHost === true) {
      await axios.delete('/api/leave-room/')
      .then(response => {
        if (response.status === 200) {
          router.push('/')
        }
      })
      .catch(error => console.error(error))
    } else {
      router.push('/')
    }
  }

  const handleSettingsButtonClick = () => {
          router.push({ 
            pathname: '/update-room', 
            state: { 
              update: true, 
              votesToSkip,
              guestCanPause,
              roomCode
            }})
  }

  const renderSettingsButton = () => {
    return (
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" onClick={handleSettingsButtonClick}>
          Settings
        </Button>
      </Grid>
    )
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Code: {router.query.code}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Votes: {votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Guest Can Pause: {guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Host: {isHost.toString()}
        </Typography>
      </Grid>
      {isHost ? renderSettingsButton : null}
      <Grid item xs={12} align="center">
          <Button 
            variant="contained" 
            color="secondary"
            disableRipple
            onClick={handleLeaveButtonClick}
          >
            Leave Room
          </Button>
      </Grid>
    </Grid>
  )
}

export default Details