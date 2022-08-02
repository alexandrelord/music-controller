import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from '../../src/utils/axios'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Details() {
    const router = useRouter()
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
      await axios.post('/api/leave-room/')
      .then(response => {
        if (response.status === 200) {
          router.push('/')
        }
      })
      .catch(error => console.error(error))
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
          Guest Can Pause: {isHost.toString()}
        </Typography>
      </Grid>
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