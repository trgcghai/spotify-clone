'use client'
import { useState } from "react"
import { VisibleContext } from "./Context"

export default function VisibleContextProvider({ children }) {
    const [visible, setVisible] = useState({
        NowPlaying: false,
        queue: false,
        devices: false
    })

    return (
        <VisibleContext.Provider value={{ visible, setVisible }}>
            {children}
        </VisibleContext.Provider>
    )
}