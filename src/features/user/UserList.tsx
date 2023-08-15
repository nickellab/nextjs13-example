type User = {
  id: number
  name: string
  email: string
}

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await response.json()
  return users
}

/**
 * Server side component
 */
const UserList: React.FC = async () => {
  const users = await getUsers()

  return (
    <div>
      <h2 className='mt-4 text-lg font-bold'>ユーザ一覧</h2>
      <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  )
}

export default UserList
