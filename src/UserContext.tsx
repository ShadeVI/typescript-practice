import { useState, createContext, useContext } from 'react'

interface IUser {
  username: string
  userID: string
  name: string
}

interface IUserCont {
  user: IUser | undefined
  login: (username: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const UserContext = createContext<IUserCont | undefined>(undefined)

export const UserContextProviver = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (username: string) => {
    // Simulate login
    try {
      setIsLoading(true)
      const users: IUser[] = await getUserData()
      const userData = users.find((user) => user.username === username)
      setUser(userData)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(undefined)
  }

  const getUserData = async () => {
    const response = await fetch('http://localhost:3000/users')
    const json: IUser[] = await response.json()
    return json
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
