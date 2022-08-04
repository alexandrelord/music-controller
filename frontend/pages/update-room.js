import CreateAndUpdateForm from '../components/CreateAndUpdateForm'
import { useRouter } from 'next/router'

const UpdateRoom = () => {
    const router = useRouter()
    const roomInfo = router.query

    return (
        <CreateAndUpdateForm updateRoom={roomInfo} />
     )
}
 
export default UpdateRoom