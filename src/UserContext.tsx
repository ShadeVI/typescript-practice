import { useState, createContext, useContext } from 'react'

interface IUser {
  username: string
  userID: string
  name: string
}

interface IUserCont {
  user: IUser | undefined
  login: (user: IUser) => void
  logout: () => void
}

const UserContext = createContext<IUserCont | undefined>(undefined)

export const UserContextProviver = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined)

  const login = (user: IUser) => {
    setUser(user)
  }

  const logout = () => {
    setUser(undefined)
  }

  return <UserContext.Provider value={{ user, login, logout }}>
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
