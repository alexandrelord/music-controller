import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "../src/utils/axios"
import Link from "next/link"

import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"


function JoinRoom() {
  const [roomCode, setRoomCode] = useState('')
  const [error, setError] = useState('')   
  const router = useRouter()

  useEffect(() => {
    setError('')
  }, [roomCode])

  const handleRoomButtonClick = async () => {
    try {
      const response = await axios.post('/api/join-room/', {
        'code': roomCode
      })
      if (response.status === 200) router.push(`/room/${roomCode}`)
      else setError('Room Not Found')
    } catch (error) {
      console.log(error)
    }
  }

  return (
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" component="h4">
              Join a Room
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
              error={error ? true : false}
              label="Code"
              placeholder="Enter a Room Code"
              value={roomCode} 
              helperText={error}
              variant="outlined"
              autoComplete="off"
              onChange={(e) => setRoomCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} align="center"> 
              <Button color="primary" variant="contained" onClick={handleRoomButtonClick}>
                Enter Room
              </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Link href="/" passHref>  
              <Button color="secondary" variant="contained">
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
    )
  }
  
  export default JoinRoom