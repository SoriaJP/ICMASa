import { createContext } from "react";

export const LoadJson = createContext();

export default function CargarJson({children, archJson}){
    return(
       <LoadJson.Provider value={archJson}>
            {children}
       </LoadJson.Provider> 
    );
}
