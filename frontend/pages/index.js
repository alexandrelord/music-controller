import Link from "next/link"

function Home() {
  return (
    <>
    <h1>HomePage</h1>
    <Link href="/join-room"><a>Join a room</a></Link> <br />
    <Link href="/create-room"><a>Create a Room</a></Link>
    </>
  )
}

export default Home
