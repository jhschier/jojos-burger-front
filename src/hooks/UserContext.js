import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const user = { name: 'JowJow', age: 27 }
  const otherUser = { name: 'Luana', age: 23 }

  return (
    <UserContext.Provider value={{ user, otherUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext.')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
