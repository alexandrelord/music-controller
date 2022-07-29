import { useState } from "react"
import { useRouter } from "next/router"
import axios from "../../src/utils/axios"

function Details() {
    const { query } = useRouter()
    const [votesToSkip, setVotesToSkip] = useState(2)
    const [guestCanPause, setGuestCanPause] = useState(false)
    const [isHost, setIsHost] = useState(false)

    const getRoomDetails = async () => {
        const response = await axios.get(`/api/get-room?code="${query.code}`)
        console.log(response)
    }

  return (
    <>
        <h1>{query.code}</h1>
        <p>Votes: {votesToSkip}</p>
        <p>Guest Can Pause: {guestCanPause}</p>
        <p>Host: {isHost}</p>
    </>
  )
}

export default Details