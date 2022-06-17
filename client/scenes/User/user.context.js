import { createContext, useContext } from 'react'

const UserContext = createContext()
const UserDispatchContext = createContext()

function useUserState() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider')
  }

  return context
}

function useUserDispatch() {
  const context = useContext(UserDispatchContext)
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider')
  }

  return context
}

export { UserContext, UserDispatchContext, useUserState, useUserDispatch }
