import react from "react";
import React,{createContext,useContext} from "react";
const CountContext = createContext();
export default function CountContextProvider({children}){
    const [count,setcount]=React.useState(0);
    const [count2,setcount2]=React.useState(0);
    const [count3,setcount3]=React.useState(0);
    return (
        <CountContext.Provider
        value={{count,setcount,count2,setcount2,count3,setcount3,}}>
            {children}
        </CountContext.Provider>
    );
}
export function useCountContext(){
    return useContext(CountContext);
}