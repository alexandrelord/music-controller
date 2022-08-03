import CreateAndUpdateForm from '../components/CreateAndUpdateForm'
import { useRouter } from 'next/router'

const UpdateRoom = () => {
    const router = useRouter()
    console.log(router.query)

    return (
            <CreateAndUpdateForm />
     )
}
 
export default UpdateRoom