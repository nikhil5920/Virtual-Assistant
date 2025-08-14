import React, { createContext, useState } from "react";
export const userDataContext = createContext();

function UserContext({children}){
    const serverUrl = "http://localhost:3000";
 
    const [userData, setUserData]=useState(null);
    const handleCurrentUser = async() => {
        try {
            const result = await axios.get(`${serverUrl}/api/user/current`)
            setUserData(result.data);
            console.log('result.data : ', result.data);
        } catch (error) {
            console.log(`UserContext error`)
        }
    }
    
    const value = { serverUrl }

    return(
        <div>
            <userDataContext.Provider value={value} >
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext;