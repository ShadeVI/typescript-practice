import { useUserContext } from '../UserContext'

const Profile = () => {
  const { user } = useUserContext()

  if (!user) {
    return <div className='h-screen flex justify-center items-center'>
      LOADING...
    </div>
  }

  return (
    <div className='h-screen flex flex-col justify-start items-center mt-24'>
      <h2 className="text-4xl mb-10">Username: {user.username}</h2>
      <h3 className="text-2xl mb-6">Name: {user.name}</h3>
      <h4 className="text-lg">UUID: <span className="text-sm italic">{user.userID}</span></h4>
    </div>
  )
}
export default Profile
