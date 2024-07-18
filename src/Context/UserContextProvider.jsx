import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [bar,setBar]=useState(0)
    // console.log(bar)
  return (
    <UserContext.Provider value={{bar,setBar}}>
        {children}
    </UserContext.Provider>
  )
}
