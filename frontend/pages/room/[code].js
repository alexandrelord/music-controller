import { useState } from "react"
import { useRouter } from "next/router"
import axios from "../../src/utils/axios"

function Details() {
    const { query } = useRouter()
    const [votesToSkip, setVotesToSkip] = useState(2)
    const [guestCanPause, setGuestCanPause] = useState(false)
    const [isHost, setIsHost] = useState(false)

    const getRoomDetail = async () => {
      // include error handling (try/catch)
        const response = await axios.get(`/api/get-room?code=${query.code}`)
        setVotesToSkip(response?.data?.votes_to_skip)
        setGuestCanPause(response?.data?.guest_can_pause)
        setIsHost(response?.data?.is_host)
    }
    getRoomDetail()

  return (
    <>
        <h1>{query.code}</h1>
        <p>Votes: {votesToSkip}</p>
        <p>Guest Can Pause: {guestCanPause.toString()}</p>
        <p>Host: {isHost.toString()}</p>
    </>
  )
}

export default Details