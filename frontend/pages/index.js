import Link from 'next/link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Home() {
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Homepage
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
