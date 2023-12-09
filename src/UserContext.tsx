import { useState, createContext, useContext } from 'react'

interface IUser {
  username: string
  userID: string
  name: string
}

interface IUserCont {
  user: IUser | undefined
  login: () => Promise<void>
  logout: () => void
  isLoading: boolean
}

const UserContext = createContext<IUserCont | undefined>(undefined)

export const UserContextProviver = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const login = async () => {
    // Simulate login
    setIsLoading(true)
    const promise = new Promise<IUser>((resolve) => {
      setTimeout(() => {
        const user = {
          userID: '164ae9f2-9798-4dbc-b555-dd25e118b2ca',
          username: 'Pepino123',
          name: 'Pepe'
        }
        resolve(user)
      }, 2000)
    })

    const resolved = Promise.resolve(promise)
    const userLogged = await resolved
    setUser(userLogged)
    setIsLoading(false)
  }

  const logout = () => {
    setUser(undefined)
  }

  return <UserContext.Provider value={{ user, login, logout, isLoading }}>
    {children}
  </UserContext.Provider>
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
