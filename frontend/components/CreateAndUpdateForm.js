import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "../src/utils/axios"

import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

const CreateAndUpdateForm = (props) => {
  let defaultVotes = 2
  const [guestCanPause, setGuestCanPause] = useState(true)
  const [votesToSkip, setVotesToSkip] = useState(defaultVotes)
  const router = useRouter()
  
  let update = ''
  if (props.updateRoom) {
    update = true
    defaultVotes = props.updateRoom.votesToSkip
    // update state of votes to skip
  }

  const handleVotesChange = (e) => {
    setVotesToSkip(e.target.value)
  }

  const handleGuestCanPauseChange = (e) => {
    setGuestCanPause(e.target.value === "true" ? true: false)
  }

  const handleRoomButtonClick = async () => {
    //if update true - send to update end point
    await axios.post('/api/create-room/', {
      guest_can_pause: guestCanPause, 
      votes_to_skip: votesToSkip
    })
    .then(response => {
      if (response.status === 201) router.push(`/room/${response.data.code}`)
    })
    .catch(error => console.error(error))
  }
  
  return ( 
    <Grid container spacing={1}>
    <Grid item xs={12} align="center">
      <Typography component="h4" variant="h4">
        {update ? 'Update Room' : 'Create a Room'}
      </Typography>
    </Grid>
    <Grid item xs={12} align="center">
      <FormControl component="fieldset">
        <FormHelperText sx={{ textAlign: "center" }}>
            Guest Control of Playback State
        </FormHelperText>
        <RadioGroup row defaultValue="true" onChange={handleGuestCanPauseChange}>
          <FormControlLabel 
            value="true" 
              control={<Radio color="primary" />} 
              label="Play/Pause"
              labelPlacement="bottom"
          />
          <FormControlLabel 
            value="false" 
              control={<Radio color="secondary" />} 
              label="No Control"
              labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
    <Grid item xs={12} align="center">
      <FormControl>
        <TextField 
          required={true} 
          type="number" 
          defaultValue={ defaultVotes }
            inputProps={{
              min: 1,
              style: { textAlign: "center" }
          }} 
          onChange={handleVotesChange}
        />
        <FormHelperText sx={{ textAlign: "center" }}>
          Votes Required to Skip Song
        </FormHelperText>
      </FormControl>
    </Grid>
    <Grid item xs={12} align="center">
      <Button 
        color="primary" 
        variant="contained"
        disableRipple 
        onClick={handleRoomButtonClick}
      >
        {update ? 'Update Room' : 'Create a Room'}
      </Button>
    </Grid>
    <Grid item xs={12} align="center">
      <Link href="/" passHref>  
        <Button 
        color="secondary" 
        variant="contained" 
        disableRipple
        >
          Back
        </Button>
      </Link>
    </Grid>
  </Grid>
  )
}
 
export default CreateAndUpdateForm
