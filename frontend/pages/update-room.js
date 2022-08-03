import CreateAndUpdateForm from '../components/CreateAndUpdateForm'
import { useRouter } from 'next/router'
import { Room } from '@mui/icons-material'

const UpdateRoom = () => {
    const router = useRouter()
    const roomInfo = router.query

    return (
        <CreateAndUpdateForm updateRoom={roomInfo} />
     )
}
 
export default UpdateRoom