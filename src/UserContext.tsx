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
  error: ErrorLogin
}

interface ErrorLogin {
  message: string
  isError: boolean
}

const UserContext = createContext<IUserCont | undefined>(undefined)

export const UserContextProviver = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorLogin>({ message: '', isError: false })

  const login = async (username: string) => {
    // Simulate login
    try {
      setError({
        message: '',
        isError: false
      })
      setIsLoading(true)
      const users: IUser[] | undefined = await getUsersData()
      const userData = users?.find((user) => user.username === username)
      setUser(userData)
    } catch (error) {
      console.error(error)
      setError({
        message: 'Error con el login',
        isError: true
      })
      setTimeout(() => {
        setError({
          message: '',
          isError: false
        })
      }, 2000)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(undefined)
  }

  const getUsersData = async (): Promise<IUser[] | undefined> => {
    try {
      const response = await fetch('http://localhost:3000/users')
      const json: IUser[] = await response.json()
      return json
    } catch (error) {
      throw new Error('Error getting users')
    }
  }

  return <UserContext.Provider value={{ user, login, logout, isLoading, error }}>
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
