import { createContext, useContext, useState } from "react"

const StateContext = createContext ({ 


    currentUser: {},
    userToken: null,
    setCurrentUser: () => { },
    setUserToken: () => {}
});


export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        name: " Johnrr",
        email: "tom@example.com",
        imageUrl:
        "https://unsplash.com/photos/tifa-from-overwatch--uWiIajRN0s"
    })
    const [userToken, setUserToken] = useState('1234')


    return (
        <StateContext.Provider value={{ 
          currentUser,
          setCurrentUser,
          userToken,
          setUserToken
        }}>
            {children}

        </StateContext.Provider>
    )
}
 
export const  userStateContext = () => useContext(StateContext)