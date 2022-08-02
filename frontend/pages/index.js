import Link from 'next/link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import { useEffect, useState } from 'react'
// import { useRouter } from "next/router"
// import axios from '../src/utils/axios'

function Home() {
  // const [roomCode, setRoomCode] = useState(null)
  // const router = useRouter()

  // ¡OJO! ¿do I want this function?
  // useEffect(() => {
  //   // let isMounted = true
  //   // const controller = new AbortController()

  //   async function fetchData() {
  //     await axios.get('/api/user-in-room/')
  //     .then(response => {
  //      /*isMounted &&*/ setRoomCode(response.data.code)
  //      if(roomCode) {
  //       router.push(`/room/${roomCode}`)
  //      }
  //    })
  //    .catch((error) => console.error(error))
  //   }
  //   fetchData()

  //   // return () => {
  //   //   isMounted = false
  //   //   controller.abort()
  //   // }
  // }, [])

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          House Party
        </Typography>
        <Link href="/join-room" passHref>
          <Button color="warning" variant="contained" disableRipple>
            Join a Room
          </Button>
        </Link>
        <Link href="/create-room" passHref>
          <Button color="primary" variant="contained" disableRipple>
            Create A Room
          </Button>
        </Link>
      </Stack>
    </>
  )
}

export default Home
