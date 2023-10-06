import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counter/counter-reducer";
import { counterInitialState } from "./counter/counter-initial-state";
import "bootstrap/scss/bootstrap.scss"
import { authReducer } from "./auth/auth-reducer";
import { authInitialState } from "./auth/auth-initial-state";

//Boş bir merkezi state oluşturuldu
const StoreContext = createContext();

//Componentlerde merkezi state e erişimi kolaylaştırmak için kendi hookumuzu yazdık
export const useStore = () => useContext(StoreContext);

export const StoreProvider=({children})=>{
    // useReducer hook una reducer ve initialState paremetre olarak verilir 
    // useReducer fonksiyonu ise geriye setter ve getter ları döner
    const [counterState, dispatchCounter] = useReducer(counterReducer,counterInitialState)
    const [authState,dispatchAuth] = useReducer(authReducer,authInitialState)
    
return (
    <StoreContext.Provider value={{counterState,dispatchCounter,authState,dispatchAuth}}>
    {children}
    </StoreContext.Provider>

)
}