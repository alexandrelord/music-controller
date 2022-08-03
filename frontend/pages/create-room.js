// import { useState } from "react"
// import { useRouter } from "next/router"
// import axios from "../src/utils/axios"
import CreateAndUpdateForm from "../components/CreateAndUpdateForm"

function CreateRoom() {
  // const defaultVotes = 2
  // const [guestCanPause, setGuestCanPause] = useState(true)
  // const [votesToSkip, setVotesToSkip] = useState(defaultVotes)
  // const router = useRouter()

  // const handleVotesChange = (e) => {
  //   setVotesToSkip(e.target.value)
  // }

  // const handleGuestCanPauseChange = (e) => {
  //   setGuestCanPause(e.target.value === "true" ? true: false)
  // }

  // const handleRoomButtonClick = async () => {
  //   await axios.post('/api/create-room/', {
  //     guest_can_pause: guestCanPause, 
  //     votes_to_skip: votesToSkip
  //   })
  //   .then(response => {
  //     if (response.status === 201) router.push(`/room/${response.data.code}`)
  //   })
  //   .catch(error => console.error(error))
  // }

  return (
    <CreateAndUpdateForm 
    // defaultVotes={defaultVotes}
    // handleGuestCanPauseChange={handleGuestCanPauseChange}
    // handleVotesChange={handleVotesChange}
    // handleRoomButtonClick={handleRoomButtonClick}
    />
  )
}
  
export default CreateRoom