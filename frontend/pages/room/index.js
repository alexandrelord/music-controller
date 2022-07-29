import { useState } from "react"
import Link from "next/link"

export default function room() {
    const [votesToSkip, setVotesToSkip] = useState(2)
    const [guestCanPause, setGuestCanPause] = useState(false)
    const [isHost, setIsHost] = useState(false)

  return (
    <>
        <p>{votesToSkip}</p>
        <p>{guestCanPause}</p>
        <p>{isHost}</p>
        <Link href={'/room/'}>
          <a></a>
        </Link>
    </>
  )
}
