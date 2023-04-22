import { useContext,createContext,useState } from "react";

const authContext = createContext();

function ContextProvider({children}){
    const [auth,setAuth] = useState(false);
    return <authContext.Provider value={{auth,setAuth}}>
        {children}
    </authContext.Provider>
}

export default ContextProvider

export const useAuthContext = ()=>useContext(authContext);