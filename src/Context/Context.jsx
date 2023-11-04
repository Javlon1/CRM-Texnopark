import { createContext, useState } from 'react'
import { HeaderData } from '../Data/Data'

const Context = createContext()

function Provider({children}) {
    
    const [headerData] = useState(HeaderData)

    const [menu, setMenu] = useState(window.sessionStorage.getItem('menu') ? window.sessionStorage.getItem('menu') : headerData[0].id)
    const [lan, setLan] = useState(window.localStorage.getItem('lan') ? window.localStorage.getItem('lan') : "ru")

    return (
        <Context.Provider value={{lan, setLan, menu, setMenu}}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider} 